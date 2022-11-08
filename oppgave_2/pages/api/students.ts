import { Result } from './../../types/index'
import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../lib/db'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result>
) {
  const { method } = req

  if (method?.toLowerCase() === 'get') {
    try {
      const students: any = await db.student.findMany({
        orderBy: {
          name: 'asc',
        },
      })
      return res.status(200).json({ success: true, data: students })
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error: 'Failed finding students' })
    }
  } else {
    // gir 405 Method Not Allowed hvis klient bruker noe annet en HTTP-methode 'GET'
    res.status(405).json({
      success: false,
      error: "Target resource doesn't support this http-method",
    })
  }
}
