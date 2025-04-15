/*
  Warnings:

  - You are about to drop the `Activity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DatasetReference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pipeline` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_pipelineId_fkey";

-- DropForeignKey
ALTER TABLE "DatasetReference" DROP CONSTRAINT "input_relation_fk";

-- DropForeignKey
ALTER TABLE "DatasetReference" DROP CONSTRAINT "output_relation_fk";

-- DropTable
DROP TABLE "Activity";

-- DropTable
DROP TABLE "DatasetReference";

-- DropTable
DROP TABLE "Pipeline";

-- CreateTable
CREATE TABLE "PipelineDummy" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "runId" TEXT,
    "status" TEXT,
    "message" TEXT,
    "runStart" TIMESTAMP(3),
    "runEnd" TIMESTAMP(3),
    "properties" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PipelineDummy_pkey" PRIMARY KEY ("name")
);

-- CreateIndex
CREATE UNIQUE INDEX "PipelineDummy_id_key" ON "PipelineDummy"("id");
