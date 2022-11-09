import { useState } from 'react'

// TODO type init
export default function useLunch(init?: any) {
  const [LunchList, setLunchList] = useState(init)

  return {
    LunchList,
    setLunchList,
  }
}
