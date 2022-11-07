// TODO: Her er det bugs

import type { NextApiRequest, NextApiResponse } from 'next'
import { countries } from '../../data'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const country = countries[Math.floor(Math.random() * countries.length)]
  return res.status(200).json({ success: true, data: country }) // endret svarstatus fra 404 til 200 for å representere vellykket svar
}
