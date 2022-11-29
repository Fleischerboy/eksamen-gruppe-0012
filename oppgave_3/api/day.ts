const BASE_URL: string = '/api'
const WEEKS_URL: string = `${BASE_URL}/weeks`

export const overrideEmployee = (
  weekId: string | undefined,
  day: string,
  options: any
) => {
  return {
    method: 'POST',
    url: `${WEEKS_URL}/${weekId}/${day}`,
    ...options,
  }
}
