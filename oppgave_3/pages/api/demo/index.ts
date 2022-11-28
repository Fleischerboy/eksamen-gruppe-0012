import type { NextApiRequest, NextApiResponse } from 'next'
import {seedScript} from '../../../prisma/seed'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await seedScript
  return res.status(200).json({ success: true, msg: `seed script executed` })

}
