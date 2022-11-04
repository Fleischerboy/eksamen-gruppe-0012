import { StudentData } from './../types/index'
import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

const studentClasses = [
  'informatikk',
  'informasjonsystemer',
  'digitale medier og design',
]

const createRandomStudent = () => {
  const sex = faker.name.sexType()
  const name = faker.name.firstName(sex)
  const age = faker.datatype.number({
    min: 18,
    max: 50,
  })
  const group =
    studentClasses[Math.floor(Math.random() * studentClasses.length)]

  return {
    name: name,
    gender: sex,
    age: age,
    group: group,
  }
}

const studentFactory = (number: Number) => {
  return Array(number)
    .fill(0)
    .map(() => {
      return createRandomStudent()
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
