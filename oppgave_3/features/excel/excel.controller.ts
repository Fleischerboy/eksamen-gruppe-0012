//source url: https://stackoverflow.com/questions/63066985/send-file-as-response-using-nextjs-api
import type { NextApiRequest, NextApiResponse } from 'next'
import * as excelService from './excel.service'
import * as weekService from '../weeks/weeks.service'
import fs from 'fs'
import path from 'path'
const filePath = path.resolve('.', 'files/lunch.xlsx')

export const exportLunchList = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  /*
  const contentType = req.headers['content-type']
  if (
    contentType !=
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ) {
    return res.status(415).json({
      status: false,
      error:
        'Unsupported Media Type/format not supported or missing content-type',
    })
  }
  */

  const lunchListData = await weekService.getAllWeeks()
  if (lunchListData.error)
    return res.status(500).json({ status: false, error: lunchListData.error })

  const createFile = await excelService.createExcelFileOfLunchList(
    lunchListData.data
  )
  if (createFile.error)
    return res.status(500).json({ status: false, error: createFile.error })

  if (fs.existsSync(filePath)) {
    const excelBuffer = fs.readFileSync(filePath)
    return res
      .setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      )
      .send(excelBuffer)
  } else {
    return res.status(404).json({ status: false, error: 'File not found' })
  }
}
