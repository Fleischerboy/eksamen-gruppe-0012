import React, { Dispatch, SetStateAction } from 'react'
import { createContext } from 'react'
import useLunch from '../hooks/useLunch'
import { Week } from '../types'

export type LunchContextTypes = {
  LunchData: Week[] | undefined
  showLunchDays: number[]
  handleLunchDaysToggle: (weekNumber: number) => void
  setLunchData: Dispatch<SetStateAction<Week[] | undefined>>
}



const LunchContext = createContext<LunchContextTypes | undefined>(undefined)

export const LunchProvider = ({ children }: { children: React.ReactNode }) => {


  const {
    LunchData,
    showLunchDays,
    setLunchData,
    handleLunchDaysToggle,


  } = useLunch()


  return (
    <LunchContext.Provider value={{
      LunchData,
      showLunchDays,
      setLunchData,
      handleLunchDaysToggle,

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
