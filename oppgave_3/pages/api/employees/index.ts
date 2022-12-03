import { getAllEmployees } from './../../../features/employees/employees.repository'
// hente alle employee når httå methode er get

// lage ny employee når http methode er post

import type { NextApiRequest, NextApiResponse } from 'next'
import * as employeeController from '../../../features/employees/employees.controller'
import { Result } from '../../../types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const { method } = req
  switch (method?.toLowerCase()) {
    case 'get':
      return employeeController.getAllEmployees(req, res)
      break
    case 'post':
      await employeeController.createEmployee(req, res)
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
