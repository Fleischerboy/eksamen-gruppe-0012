import { useState } from 'react'
import { Method, StudentData } from './../types/index'

const sortMethods = ['nothing', 'age', 'gender', 'class']

export const useStudent = () => {
  const [students, setStudents] = useState<StudentData[]>([])
  const [sortMethod, setSortMethod] = useState<Method>('nothing')

  const handleSortMethodChange = (sortMethod: Method) => {
    setSortMethod(sortMethod)
    console.log(sortMethod)
  }

  const sortStudentsByAlphabeticalOrder = () => {
    return students.sort(
      (studentOne, studentTwo) => (studentOne.name > studentTwo.name ? 1 : -1) // 1 = bigger, -1: smaller, 0 = equal;
    )
  }

  return {
    students,
    sortMethod,
    sortMethods,
    setStudents,
    handleSortMethodChange,

    // sort algos
    sortStudentsByAlphabeticalOrder,
  }
}
