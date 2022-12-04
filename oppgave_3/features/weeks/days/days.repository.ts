import { checkIfDayHasOverrides } from './days.service'
import prisma from '../../../lib/db'

export const deletePreviousOverrideByDayId = async (dayId: string) => {
  try {
    const deletePrevOverride = await prisma.override.delete({
      where: {
        dayId: dayId,
      },
    })

    return { status: true, data: deletePrevOverride }
  } catch (error) {
    return {
      status: false,
      error: 'Failed deleting previous override',
    }
  }
}

export const overrideLunch = async (
  weekId: string,
  dayId: string,
  employeeId: string
) => {
  try {
    const override = await prisma.override.create({
      data: {
        weekId: parseInt(weekId),
        dayId: dayId,
        employeeId: parseInt(employeeId),
      },
    })
    return { status: true, data: override }
  } catch (error) {
    console.log(error)
    return { status: false, error: 'Failed creating override' }
  }
}
export const checkOverrides = async (dayId: string) => {
  try {
    const checkIfDayHasOverrides = await prisma.override.findMany({
      where: {
        dayId: dayId,
      },
    })
    return checkIfDayHasOverrides
  } catch (error) {
    console.log(error)
  }
}
