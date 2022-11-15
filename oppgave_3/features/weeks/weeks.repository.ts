import prisma from '../../lib/db'
import { Data, Error, Result } from '../../types/index'

export const findMany = async () => {
  try {
    const weeks = await prisma.week.findMany()
    return { weeks: weeks }
  } catch (error) {
    return { status: false, error: 'No weeks found' }
  }
}
