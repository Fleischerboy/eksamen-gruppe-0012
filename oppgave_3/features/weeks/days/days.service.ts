import * as repoDays from '../days/days.repository'
import * as employeeService from '../../employees/employees.service'

export const overrideLunchDay = async (
  weekId: string,
  dayId: string,
  employeeId: string
) => {
  //TODO CHECK IF DAYID EXIST & SAME ON EMPLOYE

  const createOverride = await repoDays.overrideLunch(weekId, dayId, employeeId)

  if (!createOverride.status)
    return { status: false, error: createOverride.error }

  return { status: true, data: createOverride.data }
}
