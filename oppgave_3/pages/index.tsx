import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import SmallWeekCards from '../components/SmallWeekCards'
import WeekCards from '../components/WeekCards'
import { useLunchContext } from '../context/LunchContext'
import { useAxios } from '../hooks/useAxios'
import { getWeeks } from '../api/weeks'
import { useEffect, useState } from 'react'
import { Result, Week } from '../types'



const Home: NextPage = () => {
  const {
    showLunchDays,
    handleLunchDaysToggle,
  } = useLunchContext()
  const router = useRouter()
  const [LunchData, setLunchData] = useState<Week[]>()

  const [loading, data, error] = useAxios<Result>(getWeeks({}))


  useEffect(() => {
    if (data) {
      setLunchData(data.data.weeks)
    }
  }, [data])


  const handleWeekClick = (weekNumber: number) => {
    router.push(`weeks/${weekNumber}`)
  }

  const handleEmployeeClick = (employeeId: number) => {
    router.push(`employees/${employeeId}`)
  }

  if (loading) return <main><h1>Henter Lunch data...</h1></main>

  if (error) return (
    <main><h1>Noe gikk galt med å hente lunch data...</h1> <h3>Error: {JSON.stringify(error)}</h3></main>
  )

  if (LunchData) {
    return <>
      <Layout>
        <h1>Lunsjkalender</h1>
        <SmallWeekCards weekList={LunchData} handleWeekClick={handleWeekClick} />
        <WeekCards weekList={LunchData} handleEmployeeClick={handleEmployeeClick} handleLunchDaysToggle={handleLunchDaysToggle} showLunchDays={showLunchDays} />

      </Layout>
    </>
  }

  return <main><h1>Lunch data var null</h1></main>

}

export default Home
