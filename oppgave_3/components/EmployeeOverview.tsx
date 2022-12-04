import { Day, Employee, Week } from '../types'

type EmployeeProps = {
  employeeObject: Employee
}

const EmployeeOverview = ({ employeeObject }: EmployeeProps) => {
  return (
    <>
      <h1 className="employee-header">
        Oversikt over jobbdager for: {employeeObject.name}
      </h1>
      <ul className="employee-overview">
        {employeeObject.days.map((week: any, index: number) => (
          <li key={index} className="employee-list">
            <h3>ukenr: {week.week.week}</h3>
            <span>Dag: {week.name}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EmployeeOverview
