import { Data, Error, Result } from '../../types/index'
import * as weeksRepo from './weeks.repository'

export const getAllWeeks = async () => {
  const weeks = await weeksRepo.findMany()

  if (weeks.status == false) return { status: false, error: weeks.error }

  return weeks
}

export const getWeekById = async (id: string) => {
  const week = await weeksRepo.getWeekById(id)

  if (!week.status) {
    return { status: false, error: week.error }
  }

  if (!week.data)
    return {
      status: false,
      type: 'week.NotExist',
      error: `week with ${id} does not exist`,
    }

  return { status: true, data: week.data }
}
