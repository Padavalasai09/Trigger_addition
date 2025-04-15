/*
  Warnings:

  - A unique constraint covering the columns `[pipelineName]` on the table `PipelineRun` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PipelineRun_pipelineName_key" ON "PipelineRun"("pipelineName");
