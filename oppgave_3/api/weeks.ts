import { AxiosRequestConfig } from 'axios'
import axiosFetcher from '../lib/axiosFetch'
const BASE_URL: string = '/api'
const WEEKS_URL: string = `${BASE_URL}/weeks`

export const getWeeks = (options: any) => {
  return {
    method: 'GET',
    url: WEEKS_URL,
    ...options,
  }
}

export const getWeek = (weekId: string | undefined, options: any) => {
  return {
    method: 'GET',
    url: `${WEEKS_URL}/${weekId}`,
    ...options,
  }
}
