import type { NextApiRequest, NextApiResponse } from 'next'
import * as excelController from '../../../features/excel/excel.controller'
import { Result } from '../../../types/index'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      await excelController.exportLunchList(req, res)
      break
    default:
      return res.status(405).json({
        status: false,
        error: 'Method not allowed',
      })
  }
}
