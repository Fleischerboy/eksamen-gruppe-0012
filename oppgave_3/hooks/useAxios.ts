// useAxios hook tatt fra denne linken URL: https://github.com/joeythelantern/DataHook/blob/main/src/useAxios.ts
import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useRef, useState } from 'react'

export const useAxios = <T>(
  config: AxiosRequestConfig<any>,
  loadOnStart: boolean = true
): [boolean, T | undefined, string, () => void] => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T>()
  const [error, setError] = useState('')
  const effectRan = useRef(false)
  useEffect(() => {
    if (effectRan.current === false) {
      if (loadOnStart) sendRequest()
      else setLoading(false)
    }

    return () => {
      effectRan.current = true
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const request = () => {
    sendRequest()
  }

  const sendRequest = () => {
    setLoading(true)

    axios(config)
      .then((response) => {
        setError('')
        setData(response.data)
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  return [loading, data, error, request]
}
