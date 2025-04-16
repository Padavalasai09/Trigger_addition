import { NextResponse } from "next/server";
import { getPipelineRuns } from "@/lib/adfService";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const pipelineRuns = await getPipelineRuns();
    let processedCount = 0;

    for (const pipelineData of pipelineRuns) {
      const runId = pipelineData.runId;

    
      const pipeline = await prisma.pipelineDummy.upsert({
        where: { name: pipelineData.name },
        update: {
          runId: runId,
          status: pipelineData.status || "Pending",
          message: pipelineData.message || null,
          runStart: pipelineData.runStart ? new Date(pipelineData.runStart) : null,
          runEnd: pipelineData.runEnd ? new Date(pipelineData.runEnd) : null,
          properties: pipelineData.properties || {},
          updatedAt: new Date(), 
        },
        create: {
          name: pipelineData.name,
          id: runId || undefined, 
          runId: runId,
          status: pipelineData.status || "Pending",
          message: pipelineData.message || null,
          runStart: pipelineData.runStart ? new Date(pipelineData.runStart) : null,
          runEnd: pipelineData.runEnd ? new Date(pipelineData.runEnd) : null,
          properties: pipelineData.properties || {},
          createdAt: new Date(), 
          updatedAt: new Date(),
        },
      });


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