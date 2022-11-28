import { useRouter } from 'next/router'
import { useAxios } from '../../../hooks/useAxios'
import { getWeek } from '../../../api/weeks'
import { useEffect } from 'react'
import { Day, Result } from '../../../types'
import Layout from '../../../components/Layout'

const Week = () => {
  const router = useRouter()
  const id =
    router.query.id instanceof Array
      ? router.query.id.find((x) => x.includes('id'))
      : router.query.id

  const [loading, data, error, request] = useAxios<Result>(
    getWeek(id, {}),
    false
  )

  useEffect(() => {
    if (router.isReady) {
      request()
    }
  }, [router.isReady])

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
    const weekdata: Day[] = data.data.week.days

    console.log(data.data.week.days)
    return (
      <>
        <Layout>
          <>
            <h1>Uke: {id}</h1>
            <ul className="one-week-list">
              {weekdata.map((day: Day, index: number) => (
                <li className="one-week-item" key={index}>
                  <span>{day.name}</span>
                  <span>
                    {day.overrides.length > 0 ? (
                      <>
                        {day.overrides.map((ele) => (
                          <span>{ele?.employee?.name}</span>
                        ))}
                      </>
                    ) : (
                      <span>{day.employee?.name}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </>
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

export default Week
