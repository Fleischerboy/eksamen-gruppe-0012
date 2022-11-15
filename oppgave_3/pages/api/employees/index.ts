// hente alle employee når httå methode er get

// lage ny employee når http methode er post


import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return res.status(200).json({ success: true, data: [] })
}