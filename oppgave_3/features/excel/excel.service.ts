import * as excelRepo from './excel.repository'

export const createExcelFileOfLunchList = async (lunchListData: any) => {
  const excelFile = await excelRepo.createExcelFileOfLunchList(lunchListData)

  if (!excelFile.status) return { status: false, error: excelFile.error }

  return { status: true, data: excelFile }
}
