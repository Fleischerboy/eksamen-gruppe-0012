import type { NextApiRequest, NextApiResponse } from 'next'
import { seedScript } from '../../../prisma/seed'
import { Result } from '../../../types'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  switch (req.method?.toLowerCase()) {
    case 'get':
      await seedScript
      const message = {
        msg: 'seed script executed',
      }
      return res.status(200).json({ status: true, data: message })
    default:
      return res.status(405).json({
        status: false,
        error: 'Method not allowed',
      })
  }
}
