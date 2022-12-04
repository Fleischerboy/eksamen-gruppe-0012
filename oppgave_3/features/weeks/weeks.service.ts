import * as weeksRepo from './weeks.repository'

export const getAllWeeks = async () => {
  const weeks = await weeksRepo.findMany()

  if (!weeks.status) return { status: false, error: weeks.error }

  if (!weeks.data)
    return {
      status: false,
      error: 'no weeks found',
    }

  return { status: true, data: weeks.data }
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

export const getSelectedWeeks = async (selectedWeeks: Array<number>) => {
  const weeks = await weeksRepo.getSelectedWeeks(selectedWeeks)

  if (!weeks.status) {
    return { status: false, error: weeks.error }
  }

  if (!weeks.data)
    return {
      status: false,
      type: 'weeks.NotExist',
      error: `Some or all selected weeks: ${selectedWeeks}, does not exist`,
    }

  return { status: true, data: weeks.data }
}
