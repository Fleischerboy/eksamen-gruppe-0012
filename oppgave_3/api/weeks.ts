import { AxiosRequestConfig } from 'axios'
import axiosFetcher from '../lib/axiosFetch'
const BASE_URL: string = '/api'
const WEEKS_URL: string = `${BASE_URL}/weeks`
const SELECTED_URL: string = `${BASE_URL}/selected`

export const getWeeks = (options: any) => {
  return {
    method: 'GET',
    url: WEEKS_URL,
    ...options,
  }
}

export const getSelectedWeeks = (
  start: string | undefined,
  end: string | undefined,
  options: any
) => {
  return {
    method: 'GET',
    url: `${SELECTED_URL}/${start}/${end}`,
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
