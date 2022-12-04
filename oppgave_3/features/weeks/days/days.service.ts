import * as repoDays from '../days/days.repository'
import * as employeeService from '../../employees/employees.service'

export const deletePreviousOverride = async (dayId: string) => {
  const deleteLastOverride = await repoDays.deletePreviousOverrideByDayId(dayId)
  if (!deleteLastOverride.status) {
    return { status: false, error: deleteLastOverride.error }
  }

  return { status: true, data: deleteLastOverride }
}

export const overrideLunchDay = async (
  weekId: string,
  dayId: string,
  employeeId: string
) => {
  const createOverride = await repoDays.overrideLunch(weekId, dayId, employeeId)

  if (!createOverride.status)
    return { status: false, error: createOverride.error }

  return { status: true, data: createOverride.data }
}
export const checkIfDayHasOverrides = async (dayId: string) => {
  const overrides = await repoDays.checkOverrides(dayId)

  if (!overrides) return []

  return overrides
}
