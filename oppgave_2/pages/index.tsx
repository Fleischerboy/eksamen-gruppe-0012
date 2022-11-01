import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'
import StudentList from '../components/StudentList'
import { useStudent } from '../hooks/useStudent'
import fetch from '../lib/fetch'

const Home: NextPage = () => {
  const isFirstRender = useRef(true)
  const {
    students,
    setStudents,
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
      <StudentList data={students.sort()} />

    </main>
  )
}

export default Home
