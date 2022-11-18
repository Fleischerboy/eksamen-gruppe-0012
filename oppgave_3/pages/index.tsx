import type { NextPage } from 'next'
import Layout from '../components/Layout'
import SmallWeekCards from '../components/SmallWeekCards'
import WeekCards from '../components/WeekCards'
import { useLunchContext } from '../context/LunchContext'




const Home: NextPage = () => {
  const {
    LunchData,
    setLunchData,
  } = useLunchContext()

  if (!LunchData) return null // TODO MÅ FINNE EN MÅTE A RENDRE PAGE KUN NÅR LUNCHDATA HAR BLITT SATT I LUNCHCONTEXT!



  return <>
    <Layout>
      <h1>Lunsjkalender</h1>
      <SmallWeekCards weekList={LunchData} />
      <WeekCards weekList={LunchData} />
    </Layout>
  </>



}

export default Home
