import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'
import HandleStudentList from '../components/HandleStudentList'
import SortOptionsTable from '../components/SortOptionsTable'
import { useStudent } from '../hooks/useStudent'
import { getStudents } from '../api/students'
import { Status } from '../types'



const Home: NextPage = () => {
  const isFirstRender = useRef(true)
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<Error>()

  const isLoading = status === 'loading'
  const isError = status === 'error'
  const isSuccess = status === 'success'


  const {
    sortMethod,
    sortMethods,
    setStudents,
    handleSortMethodChange,

    // sort algos
    sortStudentsByAlphabeticalOrder,
    sortStudentsByAge,
    sortStudentsByGender,
    sortStudentsByFieldOfStudy,

    // groupBY
    groupByStudentProperty,



  } = useStudent();

  useEffect(() => {
    if (!isFirstRender.current) return
    isFirstRender.current = false
    const handler = async () => {
      setStatus('loading')
      try {
        const response = await getStudents({});
        setStatus('success')
        setStudents(response.data);

      } catch (error) {
        setStatus('error')
        setError(error as any)
      }
    }
    handler()
  }, [setStudents])

  if (isLoading) {
    return <main><h1>Henter data...</h1></main>
  }

  if (isError) {
    return (
      <main>
        <h1>Noe gikk galt...</h1>
        <h3>Error: {JSON.stringify(error)}</h3>
      </main>
    )
  }

  return (
    <main>
      <>
        <h1>Student gruppering</h1>
        <SortOptionsTable sortMethods={sortMethods} handleSortMethodChange={handleSortMethodChange} />
        <HandleStudentList
          groupByStudentProperty={groupByStudentProperty}
          sortType={sortMethod}
          sortStudentsByAlphabeticalOrder={sortStudentsByAlphabeticalOrder}
          sortStudentsByAge={sortStudentsByAge}
          sortStudentsByGender={sortStudentsByGender}
          sortStudentsByFieldOfStudy={sortStudentsByFieldOfStudy} />
      </>
    </main>
  )
}

export default Home
