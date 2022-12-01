// URL: https://medium.com/geekculture/exporting-data-in-excel-file-in-node-js-f1b298997d47
import excel from 'exceljs'
import { Day, Week } from '../../types'

export const createExcelFileOfLunchList = async (lunchListData: Week[]) => {
  const workbook = new excel.Workbook()
  const worksheet = workbook.addWorksheet('My Lunch Sheet')

  const path = './files'

  worksheet.columns = [
    { header: 'Week Number', key: 'week', width: 20 },
    { header: 'Day', key: 'name', width: 20 },
    { header: 'Employee Id', key: 'employeeName', width: 20 },
    { header: 'Lunch food', key: 'food', width: 20 },
  ]

  // Looping through User data
  lunchListData.forEach((week) => {
    week.week = week.week
    week.days.forEach((day: Day) => {
      worksheet.addRow({
        week: week.week,
        name: day.name,
        employeeName:
          day.overrides.length > 0
            ? day.overrides[0].employee.name
            : day.employee
            ? day.employee.name
            : 'Fri',
        food: day.lunch,
      })
    })
  })

  // Making first line in excel bold
  worksheet.getRow(1).eachCell((cell: any) => {
    cell.font = { bold: true }
  })

  try {
    const data = await workbook.xlsx
      .writeFile(`${path}/lunch.xlsx`)
      .then(() => {
        console.log('success')
      })
    return { status: true, data: data }
  } catch (error) {
    return { status: false, error: 'Failed creating excel file' }
  }
}
