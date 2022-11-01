import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const studentClasses = [
  'informatikk',
  'informasjonsystemer',
  'digitale medier og design',
]

const studentFactory = (number: Number | null) => {
  return Array(number)
    .fill(null)
    .map(() => {
      return {
        name: faker.name.firstName(),
        gender: faker.name.sexType(),
        age: faker.datatype.number({
          min: 18,
          max: 50,
        }),
        group:
          studentClasses[Math.floor(Math.random() * studentClasses.length)],
      }
    })
}

const createStudents = async (count: Number) => {
  const students = studentFactory(count)
  const studentPromises = students.map(async (student) => {
    await prisma.student.create({
      data: {
        ...student,
      },
    })
  })

  await Promise.all(studentPromises)
}

async function main() {
  console.log(`Start seeding ...`)
  createStudents(200)
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
