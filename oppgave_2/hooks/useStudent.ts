import { useState } from 'react'
import { StudentData } from './../types/index'
export const useStudent = () => {
  const [students, setStudents] = useState<StudentData[]>([])
  const [sortMethod, setSortMethod] = useState()


 


  return {
    students,
    setStudents,
  }
}
