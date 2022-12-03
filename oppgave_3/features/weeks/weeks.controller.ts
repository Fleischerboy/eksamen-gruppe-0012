import { findMany } from './weeks.repository'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, Error, Result } from '../../types/index'
import * as weekService from './weeks.service'

export const getAllWeeks = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const weeks = await weekService.getAllWeeks()

  if (weeks.error)
    return res.status(500).json({ status: false, error: weeks.error })

  const weeksData = {
    weeks: weeks.data,
  }
  return res.status(200).json({ status: true, data: weeksData })
}

export const getWeekById = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const id =
    req.query.week instanceof Array
      ? req.query.week.find((i) => i.includes('week'))
      : req.query.week

  if (!id)
    return res.status(400).json({ status: false, error: 'missing week id' })

  const week = await weekService.getWeekById(id)

  if (!week?.status) {
    switch (week?.type) {
      case 'week.NotExist': {
        return res.status(404).json({
          status: false,
          error: week.error as string,
        })
      }
      default:
        return res
          .status(500)
          .json({ status: false, error: week.error as string })
    }
  }

  const weekData = {
    week: week.data,
  }

  return res.status(200).json({ status: true, data: weekData })
}

export const getSelectedWeeks = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const start =
    req.query.start instanceof Array
      ? req.query.start.find((i) => i.includes('start'))
      : req.query.start

  const end =
    req.query.end instanceof Array
      ? req.query.end.find((i) => i.includes('end'))
      : req.query.end

  if (!start || !end) {
    return res.status(400).json({ status: false, error: "missing week id's" })
  }

  const weekList = []

  for (let index = parseInt(start); index <= parseInt(end); index++) {
    weekList.push(index)
  }

  const weeks = await weekService.getSelectedWeeks(weekList)

  if (weeks.error)
    return res.status(500).json({ status: false, error: weeks.error })

  const weeksData = {
    weeks: weeks.data,
  }
  res.status(200).json({ status: true, data: weeksData })
}
