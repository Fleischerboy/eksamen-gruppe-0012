import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import SmallWeekCards from '../components/SmallWeekCards'
import WeekCards from '../components/WeekCards'
import { useLunchContext } from '../context/LunchContext'
import { useAxios } from '../hooks/useAxios'
import { getWeeks } from '../api/weeks'
import { FormEvent, useEffect, useState } from 'react'
import { Result, Week } from '../types'
import SelectWeeks from '../components/SelectWeeks'

const Home: NextPage = () => {
  const { showLunchDays, handleLunchDaysToggle } = useLunchContext()
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

  const handleEmployeeClick = (employeeId?: number) => {
    router.push(`employees/${employeeId}`)
  }

  const handleSelectedWeeks = (e: FormEvent, start: number, end: number) => {
    e.preventDefault()
    router.push(`selectedWeeks/${start}/${end}`)
  }

  if (loading)
    return (
      <main>
        <h1>Henter Lunch data...</h1>
      </main>
    )

  if (error)
    return (
      <main>
        <h1>Noe gikk galt med å hente lunch data...</h1>{' '}
        <h3>Error: {JSON.stringify(error)}</h3>
      </main>
    )

  if (LunchData) {
    return (
      <>
        <Layout>
          <h1>Lunsjkalender</h1>
          <SmallWeekCards
            weekList={LunchData}
            handleWeekClick={handleWeekClick}
          />
          <SelectWeeks
            weekList={LunchData}
            handleSelectedWeeks={handleSelectedWeeks}
          />
          <WeekCards
            weekList={LunchData}
            handleEmployeeClick={handleEmployeeClick}
            handleLunchDaysToggle={handleLunchDaysToggle}
            showLunchDays={showLunchDays}
          />
        </Layout>
      </>
    )
  }

  return (
    <main>
      <h1>Lunch data var null</h1>
    </main>
  )
}

export default Home
