import { Employee, Week } from './../types/index'
import { PrismaClient } from '@prisma/client'
import lunchList from '../data/lunch.json'
const prisma = new PrismaClient()
const lunchFoodData = ['Taco', 'Pizza', 'Fisk', 'Pasta']
const lunchData: any = lunchList.year //TODO MÅ FINNE EN MÅTE Å TYPE DETTE, FÅR IKKE DET TIL ATM
const createData = async () => {
  const yearId = await prisma.year.create({
    data: {
      id: undefined,
    },
  })
  for (const weekNumber in lunchData) {
    const createWeek = await prisma.week.create({
      data: {
        week: parseInt(weekNumber),
        yearId: yearId.id,
      },
    })

    const weekDays: Week = lunchData[weekNumber].week
    for (const day in weekDays) {
      const weekNum = weekNumber
      const employee: Employee = lunchData[weekNumber].week[day]
      const lunchFood =
      lunchFoodData[Math.floor(Math.random() * lunchFoodData.length)]
      console.log(weekNum, day, employee, lunchFood)

      if (employee) {
        const checkIfEmployeeExist = await prisma.employee.findUnique({
          where: {
            id: employee.id,
          },
        })

        if (!checkIfEmployeeExist) {
          await prisma.employee.create({
            data: {
              id: employee.id,
              name: employee.name,
              rules: employee.rules,
            },
          })
        }
      }
      await prisma.day.create({
        data: {
          name: day,
          employeeId: employee?.id,
          weekId: createWeek.id,
          lunch: lunchFood,
        },
      })
    }
  }
}

async function main() {
  console.log(`Start seeding ...`)
  await prisma.override.deleteMany({})
  await prisma.day.deleteMany({})
  await prisma.employee.deleteMany({})
  await prisma.week.deleteMany({})
  await prisma.year.deleteMany({})

  createData()

  console.log(`Seeding finished.`)
}

export const seedScript = main()
  .catch((e) => {
    console.error(e)

    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
