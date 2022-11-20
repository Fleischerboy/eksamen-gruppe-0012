import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import SmallWeekCards from '../components/SmallWeekCards'
import WeekCards from '../components/WeekCards'
import { useLunchContext } from '../context/LunchContext'




const Home: NextPage = () => {
  const {
    LunchData,
    setLunchData,
  } = useLunchContext()
  const router = useRouter()

  if (!LunchData) return null // TODO MÅ FINNE EN MÅTE A RENDRE PAGE KUN NÅR LUNCHDATA HAR BLITT SATT I LUNCHCONTEXT!


  const handleWeekClick = (weekNumber: number) => {
    router.push(`weeks/${weekNumber}`)
  }

  const handleEmployeeClick = (employeeId: number) => {
    router.push(`employees/${employeeId}`)
  }

  return <>
    <Layout>
      <h1>Lunsjkalender</h1>
      <SmallWeekCards weekList={LunchData} handleWeekClick={handleWeekClick} />
      <WeekCards weekList={LunchData} handleEmployeeClick={handleEmployeeClick} />

    </Layout>
  </>



}

export default Home
