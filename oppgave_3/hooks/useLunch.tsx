import { useState } from 'react'

// TODO type init
export default function useLunch(init?: any) {
  const [LunchData, setLunchData] = useState(init)

  return {
    LunchData,
    setLunchData
  }
}
