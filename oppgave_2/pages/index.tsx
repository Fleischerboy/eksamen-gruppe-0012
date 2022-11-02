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
      <h1>Student gruppering</h1>
      <SortOptionsTable sortMethods={sortMethods} handleSortMethodChange={handleSortMethodChange} />
      <GroupedStudentList
        groupByStudentProperty={groupByStudentProperty}
        sortType={sortMethod}
        sortStudentsByAlphabeticalOrder={sortStudentsByAlphabeticalOrder}
        sortStudentsByAge={sortStudentsByAge}
        sortStudentsByGender={sortStudentsByGender}
        sortStudentsByFieldOfStudy={sortStudentsByFieldOfStudy} />
    </main>
  )
}

export default Home
