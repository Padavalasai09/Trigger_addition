/*
  Warnings:

  - A unique constraint covering the columns `[pipelineId,name]` on the table `Activity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Activity_pipelineId_name_key" ON "Activity"("pipelineId", "name");
