const BASE_URL: string = '/api'
const EMPLOYEES_URL: string = `${BASE_URL}/employees`

export const getEmployees = (options: any) => {
  return {
    method: 'GET',
    url: EMPLOYEES_URL,
    ...options,
  }
}

export const getEmployee = (id: string | undefined, options: any) => {
  return {
    method: 'GET',
    url: `${EMPLOYEES_URL}/${id}`,
    ...options,
  }
}
