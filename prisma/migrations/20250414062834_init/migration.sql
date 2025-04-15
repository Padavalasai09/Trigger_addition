/*
  Warnings:

  - You are about to drop the `ActivityRun` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PipelineRun` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActivityRun" DROP CONSTRAINT "ActivityRun_pipelineRunId_fkey";

-- DropTable
DROP TABLE "ActivityRun";

-- DropTable
DROP TABLE "PipelineRun";
