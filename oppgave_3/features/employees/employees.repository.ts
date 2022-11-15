import lunchList from '../../data/lunch.json'
import db from '../../lib/db'

export const findUnique = async (employeeId: number) => {
  try {
    const employee = await db.employee.findUnique({
      where: {
        id: employeeId,
      },
      include: {
        days: true,
      },
    })
    return { status: true, data: employee }
  } catch (error) {
    return { status: false, error: 'Failed finding employee' }
  }
}
