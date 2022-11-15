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

  res.status(200).json({ status: true, data: weeks })
}
