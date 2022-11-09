import type { NextPage } from 'next'
import Layout from '../components/Layout'
import { useLunchContext } from '../context/LunchContext'





const Home: NextPage = () => {
  const {
    LunchList,
  } = useLunchContext()

  return <>
    <Layout>
      <h1>Lunsjkalender</h1>
      <h1>{JSON.stringify(LunchList)}</h1>
    </Layout>
  </>
}

export default Home
