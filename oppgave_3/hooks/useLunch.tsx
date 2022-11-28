import { useState } from 'react'
import { Week } from '../types'



// TODO type init
export default function useLunch(init?: Week[]) {

  const [LunchData, setLunchData] = useState(init)

  const [showLunchDays, setShowLunchDays] = useState<number[]>([])
  const handleLunchDaysToggle = (weekNumber: number) => {
    const showState = showLunchDays.slice()
    const index = showState.indexOf(weekNumber); // returns -1 when not found
    if (index >= 0) {
      showState.splice(index, 1) // remove week on index
      setShowLunchDays(showState)
    } else {
      showState.push(weekNumber)  // push week
      setShowLunchDays(showState)
    }
  }






  return {
    LunchData,
    showLunchDays,
    setLunchData,
    handleLunchDaysToggle

  }
}
