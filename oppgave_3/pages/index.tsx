import type { NextPage } from 'next'
import Layout from '../components/Layout'
import WeekCards from '../components/WeekCards'
import { useLunchContext } from '../context/LunchContext'
import { getWeeks } from '../api/weeks'
import { useAxios } from '../hooks/useAxios'
import { useEffect } from 'react'





const Home: NextPage = () => {
  const [loading, data, error, request] = useAxios(getWeeks({}))

  const {
    setLunchData,
  } = useLunchContext()


  if (loading) {
    return <main><h1>Henter data...</h1></main>
  }

  if (error) {
    return (
      <main>
        <h1>Noe gikk galt...</h1>
        <h3>Error: {JSON.stringify(error)}</h3>
      </main>
    )
  }

  if (!data) {
    return <h1>Data was null</h1>
  }

  return <>
    {console.log(data)}
    <Layout>
      <h1>Lunsjkalender</h1>
      {/* <SmallWeekCards />*/}

      <WeekCards />
    </Layout>
  </>
}

export default Home
