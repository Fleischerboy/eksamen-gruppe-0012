import prisma from '../../lib/db'
import { Data, Error, Result } from '../../types/index'

export const findMany = async () => {
  try {
    const weeks = await prisma.week.findMany({
      include: {
        day: true,
      },
    })
    return { weeks: weeks }
  } catch (error) {
    console.log(error)
    return { status: false, error: 'No weeks found' }
  }
}

export const getWeekById = async (id: any) => {
  try {
    const week = await prisma.week.findUnique({
      where: {
        week: parseInt(id),
      },
      include: {
        day: true,
      },
    })
    return { week: week }
  } catch (error) {
    return { status: false, error: 'week not found' }
  }
}
