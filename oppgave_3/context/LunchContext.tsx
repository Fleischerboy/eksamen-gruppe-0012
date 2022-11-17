import React from 'react'
import { createContext } from 'react'
import useLunch from '../hooks/useLunch'
import data from '../data/lunch.json'

export type LunchContextTypes = {
  LunchData: any
  setLunchData: any
}


const LunchContext = createContext<LunchContextTypes | undefined>(undefined)

export const LunchProvider = ({ children }: { children: React.ReactNode }) => {
  const { LunchData, setLunchData } = useLunch(null)

  return (
    <LunchContext.Provider value={{
      LunchData,
      setLunchData
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
