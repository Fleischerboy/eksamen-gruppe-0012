-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_day" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
