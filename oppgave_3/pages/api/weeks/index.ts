import type { NextApiRequest, NextApiResponse } from 'next'
import * as weekController from '../../../features/weeks/weeks.controller'
import { Result } from '../../../types/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  if (req.method?.toLowerCase() == 'get') {
    await weekController.getAllWeeks(req, res)
  } else
    return res.status(405).json({
      status: false,
      error: 'Method not allowed',
    })
}
