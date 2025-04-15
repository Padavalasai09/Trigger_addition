import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const pipelines = await prisma.pipeline.findMany({
      include: {
        activities: {
          include: {
            inputs: true,
            outputs: true
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      },
      orderBy: {
        lastPublishTime: 'desc'
      }
    });

    const runs = pipelines.flatMap(pipeline => {
      if (pipeline.activities.length === 0) {
        // Handle pipelines with no activities
        return [{
          id: `empty_${pipeline.id}`,
          runId: `run_empty_${pipeline.id}`,
          pipelineId: pipeline.id,
          pipelineName: pipeline.name,
          etag: pipeline.etag,
          lastPublishTime: pipeline.lastPublishTime?.toISOString() || null,

          activityName: null,
          activityType: null,
          runStatus: pipeline.status || "Unknown",
          message: null,

          dependsOn: [],
          userProperties: [],
          policy: {},

          duration: 0,
          startTime: null,
          endTime: null,
          dataVolume: 0,
          triggerType: "Unknown",
          parameters: {},
          createdAt: null
        }];
      }

      // Map actual activities
      return pipeline.activities.map(activity => {
        const pipelineStatus = pipeline.status || "Failed";
        const runStatus = pipelineStatus.toLowerCase() === "failed" ? "Failed" : "Succeeded";

        const failureReason =
          activity.errorMessage ||
          activity.error?.message ||
          null;

        return {
          id: activity.id,
          runId: `run_${activity.id.slice(0, 8)}`,
          pipelineId: pipeline.id,
          pipelineName: pipeline.name,
          etag: pipeline.etag,
          lastPublishTime: pipeline.lastPublishTime?.toISOString() || null,

          activityName: activity.name,
          activityType: activity.type,
          runStatus: runStatus,
          message: failureReason,

          dependsOn: activity.dependsOn || [],
          userProperties: activity.userProperties || [],
          policy: activity.policy || {},

          duration: calculateDuration(activity),
          startTime: activity.createdAt.toISOString(),
          endTime: activity.updatedAt.toISOString(),
          dataVolume: calculateDataVolume(activity),
          triggerType: getTriggerType(activity),
          parameters: activity?.parameters || {},
          createdAt: activity.createdAt.toISOString()
        };
      });
    });

    return NextResponse.json(runs);
  } catch (error) {
    console.error("Error fetching pipeline runs:", error);
    return NextResponse.json(
      { error: "Failed to fetch pipeline runs" },
      { status: 500 }
    );
  }
}

// Helper functions
function calculateDuration(activity: any): number {
  const start = new Date(activity.createdAt).getTime();
  const end = new Date(activity.updatedAt).getTime();
  return end - start;
}

function calculateDataVolume(activity: any): number | undefined {
  if (!activity.inputs.length && !activity.outputs.length) return undefined;

  const inputSize = activity.inputs.reduce((sum: number, input: any) =>
    sum + (input.parameters?.size || 0), 0);

  const outputSize = activity.outputs.reduce((sum: number, output: any) =>
    sum + (output.parameters?.size || 0), 0);

  return inputSize + outputSize;
}

function getTriggerType(activity: any): string {
  return activity.userProperties?.triggerType ||
    activity.typeProperties?.triggerType ||
    "Manual";
}
