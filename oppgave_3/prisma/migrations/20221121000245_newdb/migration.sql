/*
  Warnings:

  - You are about to drop the `lunch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `lunchId` on the `week` table. All the data in the column will be lost.
  - Added the required column `yearId` to the `week` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lunch` to the `day` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "lunch";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "year" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_week" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "week" INTEGER NOT NULL,
    "yearId" TEXT NOT NULL,
    CONSTRAINT "week_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "year" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_week" ("id", "week") SELECT "id", "week" FROM "week";
DROP TABLE "week";
ALTER TABLE "new_week" RENAME TO "week";
CREATE UNIQUE INDEX "week_week_key" ON "week"("week");
CREATE TABLE "new_day" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "lunch" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "employeeId" INTEGER,
    "weekId" TEXT NOT NULL,
    CONSTRAINT "day_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "week" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "day_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_day" ("employeeId", "id", "name", "weekId") SELECT "employeeId", "id", "name", "weekId" FROM "day";
DROP TABLE "day";
ALTER TABLE "new_day" RENAME TO "day";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
