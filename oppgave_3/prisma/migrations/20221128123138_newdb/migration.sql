/*
  Warnings:

  - Made the column `employeName` on table `override` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_override" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weekId" INTEGER NOT NULL,
    "dayName" TEXT NOT NULL,
    "employeName" TEXT NOT NULL,
    CONSTRAINT "override_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "week" ("week") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_override" ("createdAt", "dayName", "employeName", "id", "weekId") SELECT "createdAt", "dayName", "employeName", "id", "weekId" FROM "override";
DROP TABLE "override";
ALTER TABLE "new_override" RENAME TO "override";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
