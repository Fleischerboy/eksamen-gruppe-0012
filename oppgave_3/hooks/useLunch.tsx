import { useState } from 'react'
import { Week } from '../types'


// TODO type init
export default function useLunch(init?: Week[] | undefined) {

  const [LunchData, setLunchData] = useState(init)

  return {
    LunchData,
    setLunchData,
  }
}
