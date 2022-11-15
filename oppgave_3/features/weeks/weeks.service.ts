import { Data, Error, Result } from '../../types/index'
import * as weeksRepo from './weeks.repository'

export const getAllWeeks = async () => {
  const weeks = await weeksRepo.findMany()

  if (weeks.status == false) return { status: false, error: weeks.error }

  return weeks
}
