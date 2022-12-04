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
  const employeeData = {
    employee: employee.data,
  }
  return res.status(200).json({ status: true, data: employeeData })
}

export const createEmployee = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const { name, rules } = req.body
  const employee = await employeeService.createEmployee({ name, rules })

  if (!employee?.status) {
    switch (employee?.type) {
      case 'employee.NotCreated': {
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
  const employeeData = {
    employee: employee.data,
  }
  return res.status(200).json({ status: true, data: employeeData })
}

export const updateEmployee = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const id =
    req.query.id instanceof Array
      ? req.query.id.find((i) => i.includes('id'))
      : req.query.id

  if (!id)
    return res.status(400).json({ status: false, error: 'missing employee id' })
  const { name, rules } = req.body
  const employee = await employeeService.updateEmployee(id, { name, rules })
  console.log('controller', id, name)

  if (!employee?.status) {
    switch (employee?.type) {
      case 'employee.NotUpdated': {
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
  const employeeData = {
    employee: employee.data,
  }
  return res.status(200).json({ status: true, data: employeeData })
}
export const getAllEmployees = async (
  req: NextApiRequest,
  res: NextApiResponse<Result>
) => {
  const employees = await employeeService.getAllEmployees()

  if (!employees?.status) {
    return res.status(500).json({
      status: false,
      error: employees.error as string,
    })
  }

  const employeesData = {
    employees: employees.data,
  }

  return res.status(200).json({ status: true, data: employeesData })
}
