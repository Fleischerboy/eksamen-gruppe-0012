import { employees } from './../../data/employees'
import lunchList from '../../data/lunch.json'
import db from '../../lib/db'

export const findUnique = async (employeeId: number) => {
  try {
    const employee = await db.employee.findUnique({
      where: {
        id: employeeId,
      },
      include: {
        days: {
          select: {
            name: true,
            week: {
              select: {
                week: true,
              },
            },
            overrides: {
              orderBy: {
                createdAt: 'desc',
              },
              take: 1,
              select: {
                employee: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
          /*
          select: {
            name: true,
            week: {
              select: {
                week: true,
              },
            },
          },
          */
        },
        overrides: {
          select: {
            weekId: true,
            day: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    })
    return { status: true, data: employee }
  } catch (error) {
    return { status: false, error: 'Failed finding employee' }
  }
}

export const getAllEmployees = async () => {
  try {
    const employees = await db.employee.findMany({
      include: {
        days: {
          select: {
            name: true,
            week: {
              select: {
                week: true,
              },
            },
          },
        },
        overrides: {
          select: {
            weekId: true,
            day: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    })
    return { status: true, data: employees }
  } catch (error) {
    return { status: false, error: 'No employees found' }
  }
}

export const create = async (data: any) => {
  try {
    const employee = await db.employee.create({
      data,
    })
    return { status: true, data: employee }
  } catch (error) {
    return { status: false, error: 'Failed creating employee' }
  }
}

export const update = async (employeeId: number, data: any) => {
  try {
    const employee = await db.employee.update({
      where: {
        id: employeeId,
      },
      data,
    })
    return { status: true, data: employee }
  } catch (error) {
    return { status: false, error: 'Failed updating employee' }
  }
}
