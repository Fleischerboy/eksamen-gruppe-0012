/*
  Warnings:

  - A unique constraint covering the columns `[weekId]` on the table `override` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "override_weekId_key" ON "override"("weekId");
