import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getEmployee, getEmployees } from '../../api/employee'
import EmployeeOverview from '../../components/EmployeeOverview'
import EmployeesView from '../../components/EmployeesView'
import Layout from '../../components/Layout'
import { useAxios } from '../../hooks/useAxios'
import { Result } from '../../types'

const Employees = () => {
  const router = useRouter()
  const [loading, data, error, request] = useAxios<Result>(
    getEmployees({}),
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
          <EmployeesView employeesData={data.data.employees} />
        </Layout>
      </>
    )
}

export default Employees
