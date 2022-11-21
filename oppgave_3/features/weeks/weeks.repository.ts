import prisma from '../../lib/db'

export const findMany = async () => {
  try {
    const weeks = await prisma.week.findMany({
      select: {
        week: true,
        days: {
          select: {
            name: true,
            lunch: true,
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
    return { status: true, data: weeks }
  } catch (error) {
    console.log(error)
    return { status: false, error: 'Failed finding weeks' }
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
        days: {
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
