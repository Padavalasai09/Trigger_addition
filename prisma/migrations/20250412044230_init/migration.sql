-- CreateTable
CREATE TABLE "PipelineRun" (
    "id" TEXT NOT NULL,
    "pipelineName" TEXT NOT NULL,
    "runStatus" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "triggerType" TEXT NOT NULL,
    "parameters" JSONB NOT NULL,
    "dataVolume" DOUBLE PRECISION,
    "failureReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PipelineRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityRun" (
    "id" TEXT NOT NULL,
    "pipelineRunId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "dataProcessed" DOUBLE PRECISION,
    "errorMessage" TEXT,

    CONSTRAINT "ActivityRun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ActivityRun" ADD CONSTRAINT "ActivityRun_pipelineRunId_fkey" FOREIGN KEY ("pipelineRunId") REFERENCES "PipelineRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
