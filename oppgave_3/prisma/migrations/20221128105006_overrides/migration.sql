-- CreateTable
CREATE TABLE "override" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "weekId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "employeeId" INTEGER,
    CONSTRAINT "override_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "override_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
