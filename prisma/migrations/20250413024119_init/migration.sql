/*
  Warnings:

  - A unique constraint covering the columns `[runId]` on the table `PipelineRun` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `runId` to the `PipelineRun` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PipelineRun" ADD COLUMN     "runId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "PipelineRun_runId_key" ON "PipelineRun"("runId");
