import prisma from '../../../lib/db'

export const overrideLunch = async (
  weekId: string,
  dayId: string,
  employeeId: string
) => {
  try {
    const override = await prisma.override.create({
      data: {
        weekId: parseInt(weekId),
        dayId: dayId,
        employeeId: parseInt(employeeId),
      },
    })
    return { status: true, data: override }
  } catch (error) {
    console.log(error)
    return { status: false, error: 'Failed creating override' }
  }
}
