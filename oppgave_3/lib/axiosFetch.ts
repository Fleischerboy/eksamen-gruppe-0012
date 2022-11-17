import axios, { AxiosRequestConfig } from 'axios'

/* eslint-disable import/no-anonymous-default-export */
export default async function (url: string, options: any): Promise<any> {
  let defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const response = axios({
      url,
      ...defaultOptions,
      ...options,
    }).then((response) => {})
  } catch {}
}
