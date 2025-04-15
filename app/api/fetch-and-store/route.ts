import { NextResponse } from "next/server";
import { getPipelineRuns } from "@/lib/adfService";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const pipelineRuns = await getPipelineRuns();
    let processedCount = 0;

    for (const pipelineData of pipelineRuns) {
      const runId = pipelineData.runId;

      if (!runId) {
        console.warn(`⛔ Skipping pipeline with missing runId:`, pipelineData);
        continue;
      }

      const props = pipelineData.properties || {};

      // 🟢 Upsert Pipeline by unique name
      const pipeline = await prisma.pipeline.upsert({
        where: { name: pipelineData.name  }, // unique name
        update: {
          type: "Manual",
          etag: "",
          lastPublishTime: pipelineData.runStart ? new Date(pipelineData.runStart) : null,
          policy: {},
          annotations: [],
          message: pipelineData.message || null,
        },
        create: {
          id: runId,
          name: pipelineData.name || "",
          type: "Manual",
          etag: "",
          lastPublishTime: pipelineData.runStart ? new Date(pipelineData.runStart) : null,
          policy: {},
          annotations: [],
          status: "Pending",
          message: pipelineData.message || null,
        },
      });

      if (props.activities && props.activities.length > 0) {
        for (const activityData of props.activities) {
          const activity = await prisma.activity.upsert({
            where: {
              pipelineId_name: {
                pipelineId: pipeline.id,
                name: activityData.name,
              },
            },
            update: {
              type: activityData.type,
              dependsOn: activityData.dependsOn || [],
              policy: activityData.policy || {},
              userProperties: activityData.userProperties || [],
              typeProperties: activityData.typeProperties || {},
            },
            create: {
              pipelineId: pipeline.id,
              name: activityData.name,
              type: activityData.type,
              dependsOn: activityData.dependsOn || [],
              policy: activityData.policy || {},
              userProperties: activityData.userProperties || [],
              typeProperties: activityData.typeProperties || {},
            },
          });

          for (const input of activityData.inputs || []) {
            await prisma.datasetReference.upsert({
              where: {
                activityId_referenceName_isInput: {
                  activityId: activity.id,
                  referenceName: input.referenceName,
                  isInput: true,
                },
              },
              update: {
                type: input.type,
                parameters: input.parameters || {},
              },
              create: {
                activityId: activity.id,
                referenceName: input.referenceName,
                type: input.type,
                parameters: input.parameters || {},
                isInput: true,
              },
            });
          }

          for (const output of activityData.outputs || []) {
            await prisma.datasetReference.upsert({
              where: {
                activityId_referenceName_isInput: {
                  activityId: activity.id,
                  referenceName: output.referenceName,
                  isInput: false,
                },
              },
              update: {
                type: output.type,
                parameters: output.parameters || {},
              },
              create: {
                activityId: activity.id,
                referenceName: output.referenceName,
                type: output.type,
                parameters: output.parameters || {},
                isInput: false,
              },
            });
          }
        }
      }

      processedCount++;
    }

    return NextResponse.json({
      success: true,
      message: `Successfully processed ${processedCount}/${pipelineRuns.length} pipelines`,
      data: pipelineRuns,
    });

  } catch (error: any) {
    console.error("Error storing pipeline data:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to store pipeline data",
        ...(process.env.NODE_ENV === 'development' && {
          details: error.message,
        }),
      },
      { status: 500 }
    );
  }
}
