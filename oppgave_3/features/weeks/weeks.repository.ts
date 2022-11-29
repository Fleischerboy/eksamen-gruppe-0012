import prisma from '../../lib/db'

export const findMany = async () => {
  try {
    const weeks = await prisma.week.findMany({
      select: {
        week: true,
        days: {
          select: {
            id: true,
            name: true,
            lunch: true,
            employee: {
              select: {
                id: true,
                name: true,
                rules: true,
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
        },
      },
    })
    return { status: true, data: weeks }
  } catch (error) {
    console.log(error)
    return { status: false, error: 'Failed finding weeks' }
  }
}

export const getWeekById = async (id: string) => {
  try {
    const week = await prisma.week.findUnique({
      where: {
        week: parseInt(id),
      },
      select: {
        week: true,
        days: {
          select: {
            id: true,
            name: true,
            lunch: true,
            employee: {
              select: {
                id: true,
                name: true,
                rules: true,
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
        },
      },
    })
    return { status: true, data: week }
  } catch (error) {
    return { status: false, error: 'Failed finding week' }
  }
}
