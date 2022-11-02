import { useState } from 'react'
import { Method, StudentData } from './../types/index'

const sortMethods = ['Ingen', 'Alder', 'Kjønn', 'Klasse']

export const useStudent = () => {
  const [students, setStudents] = useState<StudentData[]>([])
  const [sortMethod, setSortMethod] = useState<Method>('Ingen')

  const handleSortMethodChange = (sortMethod: Method) => {
    setSortMethod(sortMethod)
  }

  const sortStudentsByAlphabeticalOrder = () => {
    return students.sort(
      (studentOne, studentTwo) =>
        studentOne.name > studentTwo.name
          ? 1
          : studentOne.name === studentTwo.name
          ? 0
          : -1 // 1 = bigger, -1: smaller and 0: equal
    )
  }

  const sortStudentsByAge = () => {
    return students.sort((studentOne, studentTwo) =>
      studentOne.age > studentTwo.age ? 1 : -1
    )
  }

  const sortStudentsByGender = () => {
    return students.sort((studentOne, studentTwo) =>
      studentOne.gender > studentTwo.gender ? 1 : -1
    )
  }

  const sortStudentsByFieldOfStudy = () => {
    return students.sort((studentOne, studentTwo) =>
      studentOne.group > studentTwo.group ? 1 : -1
    )
  }

  const groupByStudentProperty = (arr: StudentData[], keyGetter: any) => {
    const map = new Map()
    arr.forEach((student: StudentData) => {
      const key = keyGetter(student)
      const collection = map.get(key)
      if (!collection) {
        map.set(key, [student])
      } else {
        collection.push(student)
      }
    })
    return map
  }

  return {
    students,
    sortMethod,
    sortMethods,
    setStudents,
    handleSortMethodChange,

    // sort algo
    sortStudentsByAlphabeticalOrder,
    sortStudentsByAge,
    sortStudentsByGender,
    sortStudentsByFieldOfStudy,

    // groupBy
    groupByStudentProperty,
  }
}
