import { Day, Employee, Week } from '../types'

type EmployeeProps = {
  employeeObject: any
}

const EmployeeOverview = ({ employeeObject }: EmployeeProps) => {
  return (
    <>
      <h1>Oversikt over jobbdager for: {employeeObject.name}</h1>
      <ul className="employee-oversikt">
        {employeeObject.days.map((week: any, index: number) => (
          <li key={index} className="employee-list">
            <span>
              Dag: {week.name}, ukenr: {week.week.week}
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EmployeeOverview
