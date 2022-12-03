import { NextApiRequest, NextApiResponse } from 'next'
import { Result, WeekDay } from '../../../types'
import * as daysService from '../days/days.service'
// source url: https://stackoverflow.com/questions/51528780/typescript-check-typeof-against-custom-type
const weekDays = ['mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag'] as const
const isWeekDay = (day: any): day is WeekDay => weekDays.includes(day)

export const overrideLunchDay = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const weekId =
    req.query.week instanceof Array
      ? req.query.week.find((i) => i.includes('week'))
      : req.query.week

  const day =
    req.query.day instanceof Array
      ? req.query.day.find((i) => i.includes('day'))
      : req.query.day

  const employeeId = req.body.employeeId
  const dayId = req.body.dayId

  if (!(weekId && day && employeeId && dayId)) {
    return res.status(400).json({
      status: false,
      error: 'missing week id, day, dayId or employeId',
    })
  }

  const dayName = day?.toLowerCase()

  if (!isWeekDay(dayName)) {
    return res
      .status(400)
      .json({ status: false, error: `${dayName} is not a day` })
  }

  const override = await daysService.overrideLunchDay(weekId, dayId, employeeId)

  if (!override.status) {
    return res
      .status(500)
      .json({ status: false, error: override.error as string })
  }

  const overrideData = {
    override: override.data,
  }

  return res.status(200).json({ status: true, data: overrideData })
}
