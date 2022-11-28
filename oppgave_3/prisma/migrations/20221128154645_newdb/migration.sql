/*
  Warnings:

  - You are about to drop the column `dayName` on the `override` table. All the data in the column will be lost.
  - You are about to drop the column `employeName` on the `override` table. All the data in the column will be lost.
  - Added the required column `dayId` to the `override` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_override" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weekId" INTEGER NOT NULL,
    "dayId" TEXT NOT NULL,
    "employeeId" INTEGER,
    CONSTRAINT "override_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "override_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_override" ("createdAt", "id", "weekId") SELECT "createdAt", "id", "weekId" FROM "override";
DROP TABLE "override";
ALTER TABLE "new_override" RENAME TO "override";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
