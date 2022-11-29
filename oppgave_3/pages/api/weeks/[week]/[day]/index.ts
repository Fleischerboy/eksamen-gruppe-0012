import type { NextApiRequest, NextApiResponse } from 'next'
import * as dayController from '../../../../../features/weeks/days/days.controller'
import { Result } from '../../../../../types'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  switch (req.method?.toLowerCase()) {
    case 'get': {
      // TODO get one day.
      return res.status(200)
    }
    case 'post': {
      await dayController.overrideLunchDay(req, res)
      break
    }

    default: {
      return res.status(405).json({
        status: false,
        error: 'Method not allowed',
      })
    }
  }
}
