/*
  Warnings:

  - A unique constraint covering the columns `[week]` on the table `week` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_day" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "employeeId" INTEGER,
    "weekId" TEXT,
    CONSTRAINT "day_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "week" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "day_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_day" ("employeeId", "id", "name", "weekId") SELECT "employeeId", "id", "name", "weekId" FROM "day";
DROP TABLE "day";
ALTER TABLE "new_day" RENAME TO "day";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "week_week_key" ON "week"("week");
