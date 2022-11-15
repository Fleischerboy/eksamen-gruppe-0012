import { getWeekById } from './../../../../features/weeks/weeks.repository'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as weekController from '../../../../features/weeks/weeks.controller'
import { Result } from '../../../../types/index'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const id =
    req.query.id instanceof Array
      ? req.query.id.find((i) => i.includes('id'))
      : req.query.id
  switch (req.method?.toLowerCase()) {
    case 'get':
      await weekController.getWeekById(req, res, id)
      break
    default:
      return res.status(405).json({
        status: false,
        error: 'Method not allowed',
      })
  }
}
