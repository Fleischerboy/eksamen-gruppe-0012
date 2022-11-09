-- CreateTable
CREATE TABLE "employee" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "rules" TEXT NOT NULL,
    "dayId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "day" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "weekId" TEXT NOT NULL,
    CONSTRAINT "day_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "day_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "week" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "week" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "week" INTEGER NOT NULL,
    "lunchId" TEXT NOT NULL,
    CONSTRAINT "week_lunchId_fkey" FOREIGN KEY ("lunchId") REFERENCES "lunch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "lunch" (
    "id" TEXT NOT NULL PRIMARY KEY
);
