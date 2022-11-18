import { useState } from 'react'
import { getWeeks } from '../api/weeks'
import { useAxios } from './useAxios'

// TODO type init
export default function useLunch(init?: any) {

  const [LunchData, setLunchData] = useState(init)

  return {
    LunchData,
    setLunchData,
  }
}
