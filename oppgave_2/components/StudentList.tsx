import { Student, Method } from '../types'
import Group from './Group'

type StudentListProps = {
  sortMethod: Method
  studentData: Student[]
}

export default function StudentList({
  sortMethod,
  studentData,
}: StudentListProps) {
  //TODO fix prop
  let studentListsSorted: any = []
  const Grouper = () => {
    //return list of mulitple lists with students sorted
    studentListsSorted.array.forEach((element) => {})
    studentData.filter()
  }

  return (
    <>
      {studentListsSorted.map((data) => (
        <Group studentData={data} sortMethod={sortMethod} />
      ))}
    </>
  )
}
