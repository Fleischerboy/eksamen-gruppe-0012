import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, Error, Result } from '../../types/index'
import * as weekService from './weeks.service'
import lunchData from '../../data/lunch.json'

export const getAllWeeks = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const weeks = await weekService.getAllWeeks()

  if (weeks.error)
    return res.status(500).json({ status: false, error: weeks.error })

  res.status(200).json({ status: true, data: weeks })
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
    return res.status(400).json({ status: false, error: 'missing employee id' })

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

  return res.status(200).json({ status: true, data: week.data })
}
