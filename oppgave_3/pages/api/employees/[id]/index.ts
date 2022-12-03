// GET, PUT DELETE på en employee

import type { NextApiRequest, NextApiResponse } from 'next'
import * as employeeController from '../../../../features/employees/employees.controller'
import { Result } from '../../../../types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const { method } = req
  switch (method?.toLowerCase()) {
    case 'get':
      await employeeController.getEmployeeAndLunchDaysById(req, res)
      break
    case 'put':
    await employeeController.updateEmployee(req, res)
      break

    case 'delete':
      // return res.status(200).json({})
      break

    default:
      return res.status(405).json({
        status: false,
        error: 'Method not allowed',
      })
  }
}
