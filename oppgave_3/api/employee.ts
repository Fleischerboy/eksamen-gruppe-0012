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

export const createEmployee = (options: any) => {
  return {
    method: 'POST',
    url: `${EMPLOYEES_URL}`,
    ...options,
  }
}

export const updateEmployee = (id: string | undefined, options: any) => {
  console.log(id, options)

  return {
    method: 'PUT',
    url: `${EMPLOYEES_URL}/${id}`,
    ...options,
  }
}
