/*
  Warnings:

  - You are about to drop the column `dayId` on the `override` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `override` table. All the data in the column will be lost.
  - You are about to alter the column `weekId` on the `override` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_override" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weekId" INTEGER NOT NULL,
    "dayName" TEXT NOT NULL,
    "employeName" TEXT,
    CONSTRAINT "override_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "week" ("week") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_override" ("createdAt", "dayName", "id", "weekId") SELECT "createdAt", "dayName", "id", "weekId" FROM "override";
DROP TABLE "override";
ALTER TABLE "new_override" RENAME TO "override";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
