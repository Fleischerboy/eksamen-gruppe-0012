import { Data, Error, Result } from '../../types/index'
import * as weeksRepo from './weeks.repository'

export const getAllWeeks = async () => {
  const weeks = await weeksRepo.findMany()

  if (weeks.status == false) return { status: false, error: weeks.error }

  return weeks
}

export const getWeekById = async (id: any) => {
  const week = await weeksRepo.getWeekById(id)

  if (week.status == false) return { status: false, error: week.error }

  return week
}
