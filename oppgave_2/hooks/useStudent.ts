import { useState } from 'react'
import { Method, StudentData } from './../types/index'

const sortMethods = ['nothing', 'age', 'gender', 'class']

export const useStudent = () => {
  const [students, setStudents] = useState<StudentData[]>([])
  const [sortMethod, setSortMethod] = useState<Method>('nothing')

  const handleSortMethodChange = (sortMethod: Method) => {
    
  }

  return {
    students,
    sortMethod,
    sortMethods,
    setStudents,
    handleSortMethodChange,
  }
}
