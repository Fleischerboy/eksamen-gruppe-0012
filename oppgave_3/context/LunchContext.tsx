import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { createContext } from 'react'
import { getWeeks } from '../api/weeks'
import { useAxios } from '../hooks/useAxios'
import useLunch from '../hooks/useLunch'
import { Result, Week } from '../types'

export type LunchContextTypes = {
  LunchData: Week[] | undefined
  setLunchData: Dispatch<SetStateAction<Week[] | undefined>>
}



const LunchContext = createContext<LunchContextTypes | undefined>(undefined)

export const LunchProvider = ({ children }: { children: React.ReactNode }) => {


  const {
    LunchData,
    setLunchData,

  } = useLunch()
  const [loading, data, error, request] = useAxios<any>(getWeeks({}))


  useEffect(() => {
    if (data) {
      setLunchData(data.data.weeks)
    }
  }, [data, request, setLunchData])

  if (loading) return <main><h1>Henter Lunch data...</h1></main>

  if (!data) return <main><h1>Lunch data var null</h1></main>

  if (error) return (
    <main><h1>Noe gikk galt med å hente lunch data...</h1> <h3>Error: {JSON.stringify(error)}</h3></main>
  )

  return (
    <LunchContext.Provider value={{
      LunchData,
      setLunchData,

    }}>
      {children}
    </LunchContext.Provider>

  )
}

export const useLunchContext = () => {
  const context = React.useContext(LunchContext)
  if (!context) throw new Error('LunchContext must have a LunchProvider')
  return context
}
