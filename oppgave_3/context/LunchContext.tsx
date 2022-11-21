import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import { createContext } from 'react'
import useLunch from '../hooks/useLunch'
import { Result, Week } from '../types'

export type LunchContextTypes = {
  showLunchDays: number[]
  handleLunchDaysToggle: (weekNumber: number) => void
}



const LunchContext = createContext<LunchContextTypes | undefined>(undefined)

export const LunchProvider = ({ children }: { children: React.ReactNode }) => {


  const {
    showLunchDays,
    handleLunchDaysToggle

  } = useLunch([])


  return (
    <LunchContext.Provider value={{
      showLunchDays,
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
