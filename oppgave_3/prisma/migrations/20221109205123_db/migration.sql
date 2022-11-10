/*
  Warnings:

  - You are about to drop the column `dayId` on the `employee` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rules" TEXT NOT NULL
);
INSERT INTO "new_employee" ("id", "name", "rules") SELECT "id", "name", "rules" FROM "employee";
DROP TABLE "employee";
ALTER TABLE "new_employee" RENAME TO "employee";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
