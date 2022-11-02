import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import GroupedStudentList from '../components/GroupedStudentList'
import SortOptionsTable from '../components/SortOptionsTable'
import StudentList from '../components/StudentList'
import { useStudent } from '../hooks/useStudent'
import fetch from '../lib/fetch'

const Home: NextPage = () => {
  const isFirstRender = useRef(true)
  const {
    students,
    sortMethod,
    sortMethods,
    setStudents,
    handleSortMethodChange,

    // sort algos
    sortStudentsByAlphabeticalOrder,
  } = useStudent();

  useEffect(() => {
    if (!isFirstRender.current) return
    isFirstRender.current = false
    const handler = async () => {
      try {
        const response = await fetch("/api/students", {
          method: 'GET'
        })
        setStudents(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    handler()
  }, [setStudents])

  return (
    <main>
      <h1>Student gruppering {sortMethod}</h1>
      <SortOptionsTable sortMethods={sortMethods} handleSortMethodChange={handleSortMethodChange} />
      {sortMethod === 'nothing' ? <StudentList data={sortStudentsByAlphabeticalOrder()} /> : <GroupedStudentList sortType={sortMethod} />}
      {/*hmmm skal denne komponenten ha kun ansvar for det å liste ut studenter når sortmethod er satt til 'ingen'?*/}

    </main>
  )
}

export default Home
