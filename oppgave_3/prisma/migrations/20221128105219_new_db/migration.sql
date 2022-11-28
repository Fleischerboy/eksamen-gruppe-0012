-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_override" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "weekId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "employeeId" INTEGER,
    CONSTRAINT "override_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "override_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_override" ("dayId", "employeeId", "id", "weekId") SELECT "dayId", "employeeId", "id", "weekId" FROM "override";
DROP TABLE "override";
ALTER TABLE "new_override" RENAME TO "override";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
