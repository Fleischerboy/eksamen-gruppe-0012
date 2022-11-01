import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import StudentList from '../components/StudentList'
import SortOption from '../components/SortOption'
import { Method } from '../types'
const Home: NextPage = () => {
  const [sortMethod, setSortMethod] = useState(undefined)

  useEffect(() => {
    const handler = async () => {
      try {
      } catch (error) {
        console.log(error)
      }
    }
    handler()
  }, [])

  const getSortMethod = (method: Method) => {
    setSortMethod(method)
  }

  return (
    <main>
      <h1>Student gruppering</h1>
      <SortOption getSortMethod={getSortMethod} />
      <StudentList sortMethod={sortMethod} studentData={studentData} />
    </main>
  )
}

export default Home
