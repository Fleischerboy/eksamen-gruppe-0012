const BASE_URL: string = '/api/excel'

export const downloadLunchList = (options: any) => {
  return {
    method: 'GET',
    url: `${BASE_URL}/lunch`,
    ...options,
  }
}
