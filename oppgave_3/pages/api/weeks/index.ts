import type { NextApiRequest, NextApiResponse } from 'next'
import * as weekController from '../../../features/weeks/weeks.controller'
import { Result } from '../../../types/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  if (req.method?.toLowerCase() == 'get') {
    await weekController.getAllWeeks(req, res)
  } else res.status(405).end()
}
