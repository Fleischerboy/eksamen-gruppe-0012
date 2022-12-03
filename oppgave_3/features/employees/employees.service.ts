import * as employeeRepo from './employees.repository'

export const getEmployeeById = async (id: string) => {
  const employee = await employeeRepo.findUnique(parseInt(id))

  if (!employee.status) {
    return { status: false, error: employee.error }
  }

  if (!employee.data)
    return {
      status: false,
      type: 'employee.NotExist',
      error: `employee with ${id} does not exist`,
    }

  return { status: true, data: employee.data }
}

export const createEmployee = async (data: any) => {
  const employee = await employeeRepo.create(data)

  if (!employee.status) {
    return { status: false, error: employee.error }
  }

  if (!employee.data)
    return {
      status: false,
      type: 'employee.NotCreated',
      error: `cannot create employee with following data: ${data}`,
    }

  return { status: true, data: employee.data }
}

export const updateEmployee = async (id: string, data: any) => {
  const employee = await employeeRepo.update(parseInt(id), data)

  if (!employee.status) {
    return { status: false, error: employee.error }
  }

  if (!employee.data)
    return {
      status: false,
      type: 'employee.NotUpdated',
      error: `cannot update employee with following data: ${{ id, ...data }}`,
    }

  return { status: true, data: employee.data }
}