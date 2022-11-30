import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getEmployee } from '../../../api/employee'
import EmployeeOverview from '../../../components/EmployeeOverview'
import Layout from '../../../components/Layout'
import { useAxios } from '../../../hooks/useAxios'
import { Result } from '../../../types'

const Employee = () => {
  const router = useRouter()
  const id =
    router.query.id instanceof Array
      ? router.query.id.find((x) => x.includes('id'))
      : router.query.id
  const [loading, data, error, request] = useAxios<Result>(
    getEmployee(id, {}),
    false
  )

  useEffect(() => {
    if (router.isReady) {
      request()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady])

  if (loading)
    return (
      <main>
        <h1>Henter data...</h1>
      </main>
    )

  if (error)
    return (
      <main>
        <h1>Noe gikk galt...</h1> <h3>Error: {JSON.stringify(error)}</h3>
      </main>
    )

  if (data)
    return (
      <>
        <Layout>
          <EmployeeOverview employeeObject={data.data.employee} />
        </Layout>
      </>
    )
}

export default Employee
