import { employees } from './../data/employees'
import { PrismaClient } from '@prisma/client'
import weeksData from '../data/lunch.json'

const prisma = new PrismaClient()

const lunchData = weeksData.year

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

    const weekDays = lunchData[weekNumber].week
    for (const day in weekDays) {
      const weekNum = weekNumber
      const thisDay = day
      const employee = lunchData[weekNumber].week[day]
      console.log(weekNum, thisDay, employee)

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
          name: thisDay,
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
