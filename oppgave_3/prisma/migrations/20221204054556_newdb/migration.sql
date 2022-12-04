/*
  Warnings:

  - Made the column `employeeId` on table `override` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_override" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weekId" INTEGER NOT NULL,
    "dayId" TEXT NOT NULL,
    "employeeId" INTEGER NOT NULL,
    CONSTRAINT "override_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "override_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_override" ("createdAt", "dayId", "employeeId", "id", "weekId") SELECT "createdAt", "dayId", "employeeId", "id", "weekId" FROM "override";
DROP TABLE "override";
ALTER TABLE "new_override" RENAME TO "override";
CREATE UNIQUE INDEX "override_dayId_key" ON "override"("dayId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
