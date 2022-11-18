import type { NextApiRequest, NextApiResponse } from 'next'
import * as employeeService from '../employees/employees.service'
import { Result } from '../../types'

export const getEmployeeAndLunchDaysById = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const id =
    req.query.id instanceof Array
      ? req.query.id.find((i) => i.includes('id'))
      : req.query.id

  if (!id)
    return res.status(400).json({ status: false, error: 'missing employee id' })

  const employee = await employeeService.getEmployeeById(id)

  if (!employee?.status) {
    switch (employee?.type) {
      case 'employee.NotExist': {
        return res.status(404).json({
          status: false,
          error: employee.error,
        })
      }
      default:
        return res.status(500).json({
          status: false,
          error: employee.error as string,
        })
    }
  }
  return res.status(200).json({ status: true, data: employee.data })
}
