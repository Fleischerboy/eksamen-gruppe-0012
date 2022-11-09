import React from 'react'
import { createContext } from 'react'
import useLunch from '../hooks/useLunch'
import data from '../data/lunch.json'

export type LunchContextTypes = {
  LunchList: any
  setLunchList: any
}

const LunchContext = createContext<LunchContextTypes | undefined>(undefined)

export const LunchProvider = ({ children }: { children: React.ReactNode }) => {
  const { LunchList, setLunchList } = useLunch(data)

  return (
    <LunchContext.Provider value={{
      LunchList,
      setLunchList
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
