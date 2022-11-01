import { useState } from 'react'
import { StudentData } from './../types/index'
export const useStudent = () => {
  const [students, setStudents] = useState<StudentData[] | undefined>(undefined)

  return {
    students,
    setStudents,
  }
}
