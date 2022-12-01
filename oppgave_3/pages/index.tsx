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
import axios from 'axios'
import { downloadLunchList } from '../api/ExcelExports'
import fileDownload from 'js-file-download'


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

  const handleExport = async (fileName: string) => {
    await axios(downloadLunchList({
      headers: { 'content_type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
    })).then((res) => {
      fileDownload(res.data, fileName)
    }).catch((error) => {
      console.log(error)
    })

  }

  const handleWeekClick = (weekNumber: number) => {
    router.push(`weeks/${weekNumber}`)
  }

  const handleEmployeeClick = (employeeId?: number) => {
    router.push(`employees/${employeeId}`)
  }

  if (loading) return (
    <main><h1>Henter Lunch data...</h1></main>
  )

  if (error) return (
    <main><h1>Noe gikk galt med å hente lunch data...</h1> <h3>Error: {JSON.stringify(error)}</h3></main>
  )

  if (LunchData) {
    return (<>
      <Layout>
        <h1>Lunsjkalender</h1>
        <SmallWeekCards weekList={LunchData} handleWeekClick={handleWeekClick} />
        <button onClick={() => handleExport("lunchList.xlsx")} className='primary-btn'>eksporter lunsj listen</button>
        <WeekCards weekList={LunchData} handleEmployeeClick={handleEmployeeClick} handleLunchDaysToggle={handleLunchDaysToggle} showLunchDays={showLunchDays} />
      </Layout>
    </>
    )
  }

  return (
    <main><h1>Lunch data var null</h1></main>
  )

}

export default Home
