import { Employee, Week } from './../types/index'
import { PrismaClient } from '@prisma/client'
import lunchList from '../data/lunch.json'
const prisma = new PrismaClient()

const lunchData: any = lunchList.year //TODO MÅ FINNE EN MÅTE Å TYPE DETTE, FÅR IKKE DET TIL ATM

const createData = async () => {
  for (const weekNumber in lunchData) {
    const lunchId = await prisma.lunch.create({
      data: {
        id: undefined,
      },
    })

    const createWeek = await prisma.week.create({
      data: {
        week: parseInt(weekNumber),
        lunchId: lunchId.id,
      },
    })

    const weekDays: Week = lunchData[weekNumber].week
    for (const day in weekDays) {
      const weekNum = weekNumber
      const employee: Employee = lunchData[weekNumber].week[day]
      console.log(weekNum, day, employee)

      if (employee) {
        const checkIfEmployeeExist = await prisma.employee.findUnique({
          where: {
            id: employee.id,
          },
        })

        if (!checkIfEmployeeExist) {
          const createEmployee = await prisma.employee.create({
            data: {
              id: employee.id,
              name: employee.name,
              rules: employee.rules,
            },
          })
        }
      }
      const createDay = await prisma.day.create({
        data: {
          name: day,
          employeeId: employee?.id,
          weekId: createWeek.id,
        },
      })
    }
  }
}

async function main() {
  console.log(`Start seeding ...`)
  await prisma.day.deleteMany({})
  await prisma.employee.deleteMany({})
  await prisma.week.deleteMany({})
  await prisma.lunch.deleteMany({})

  await createData()

  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
