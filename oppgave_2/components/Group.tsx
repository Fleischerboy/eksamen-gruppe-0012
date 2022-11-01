import {Student, Method} from '../types'

type GroupProps = {
    studentData: Student[]
    sortMethod: Method
}

export default function Group({ studentData, sortMethod }: GroupProps) {
  return (
  <>
  <h1>Gruppering etter ${sortMethod}: ${value}</h1>
  {studentData.map((data) => (
    // data to show for each student
  ))}  
  </>
  )
}
