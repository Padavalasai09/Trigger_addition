// lib/storeRuns.ts
import { prisma } from "./prisma";

export async function storePipelineRuns(runs: any[]) {
  for (const run of runs) {
    await prisma.pipelineRun.upsert({
      where: { runId: run.runId },
      update: {}, // skip update if already exists
      create: {
        runId: run.runId,
        pipelineName: run.pipelineName,
        runStatus: run.status,
        startTime: new Date(run.runStart),
        endTime: new Date(run.runEnd),
        duration: Math.floor((new Date(run.runEnd).getTime() - new Date(run.runStart).getTime()) / 1000),
        triggerType: run.trigger?.triggerType,
        parameters: run.parameters,
        dataProcessed: run.dataProcessedInBytes ? run.dataProcessedInBytes / 1e6 : null,
        failureReason: run.message,
      },
    });
  }
}
