import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import excel from 'exceljs'
const filePath = path.resolve('.', 'files/users.xlsx')

const Users = [
  {
    fname: 'Amir',
    lname: 'Mustafa',
    email: 'amir@gmail.com',
    gender: 'Male',
  },
  {
    fname: 'Ashwani',
    lname: 'Kumar',
    email: 'ashwani@gmail.com',
    gender: 'Male',
  },
]
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
  if (!fs.existsSync(filePath)) {
    const createLunchXlsx = await createExcelFile()
  }

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

const createExcelFile = async () => {
  const workbook = new excel.Workbook()
  const worksheet = workbook.addWorksheet('My Sheet')

  const path = './files' // Path to download excel

  worksheet.columns = [
    { header: 'S no.', key: 's_no', width: 20 },
    { header: 'First Name', key: 'fname', width: 20 },
    { header: 'Last Name', key: 'lname', width: 20 },
    { header: 'Email Id', key: 'email', width: 20 },
    { header: 'Gender', key: 'gender', width: 20 },
  ]

  // Looping through User data
  let counter = 1
  Users.forEach((user) => {
    user.s_no = counter
    worksheet.addRow(user) // Add data in worksheet
    counter++
  })

  // Making first line in excel bold
  worksheet.getRow(1).eachCell((cell: any) => {
    cell.font = { bold: true }
  })

  try {
    const data = await workbook.xlsx
      .writeFile(`${path}/users.xlsx`)
      .then(() => {
        console.log('success')
      })
  } catch (error) {
    throw error
  }
}
