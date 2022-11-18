import prisma from '../../lib/db'

export const findMany = async () => {
  try {
    const weeks = await prisma.week.findMany({
      select: {
        week: true,
        day: {
          select: {
            name: true,
            employee: {
              select: {
                id: true,
                name: true,
                rules: true,
              },
            },
          },
        },
      },
    })
    return { weeks: weeks }
  } catch (error) {
    console.log(error)
    return { status: false, error: 'No weeks found' }
  }
}

export const getWeekById = async (id: any) => {
  try {
    const week = await prisma.week.findUnique({
      where: {
        week: parseInt(id),
      },
      select: {
        week: true,
        day: {
          select: {
            name: true,
            employee: {
              select: {
                id: true,
                name: true,
                rules: true,
              },
            },
          },
        },
      },
    })
    return { status: true, data: week }
  } catch (error) {
    return { status: false, error: 'Failed finding week' }
  }
}
