import { getSelectedWeeks } from '../../../../api/weeks'
import { useRouter } from 'next/router'
import { useAxios } from '../../../../hooks/useAxios'
import { getWeek } from '../../../../api/weeks'
import { useEffect } from 'react'
import { Day, Result } from '../../../../types'
import Layout from '../../../../components/Layout'
import WeekCards from '../../../../components/WeekCards'
import { useLunchContext } from '../../../../context/LunchContext'

const SelectedWeeks = () => {
  const router = useRouter()
  const { showLunchDays, handleLunchDaysToggle } = useLunchContext()

  const start =
    router.query.start instanceof Array
      ? router.query.start.find((i) => i.includes('start'))
      : router.query.start

  const end =
    router.query.end instanceof Array
      ? router.query.end.find((i) => i.includes('end'))
      : router.query.end

  // if (!start || !end) {
  //   return <h1>Something went wrong</h1>
  // }

  const [loading, data, error, request] = useAxios<Result>(
    getSelectedWeeks(start, end, {}),
    false
  )

  useEffect(() => {
    if (router.isReady) {
      request()
    }
  }, [router.isReady])

  const handleEmployeeClick = (employeeId?: number) => {
    router.push(`../../employees/${employeeId}`)
  }

  if (loading)
    return (
      <main>
        <h1>Henter week data...</h1>
      </main>
    )

  if (error)
    return (
      <main>
        <h1>Noe gikk galt...</h1> <h3>Error: {JSON.stringify(error)}</h3>
      </main>
    )

  if (data) {
    return (
      <>
        <Layout>
          <WeekCards
            weekList={data.data.weeks}
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
      <h1>data var null</h1>
    </main>
  )
}

export default SelectedWeeks
