import { Day, Employee, Week } from '../types'

type EmployeeProps = {
  employeesData: any
}

const EmployeeOverview = ({ employeesData }: EmployeeProps) => {
  return (
    <>
      <h1 className="employee-header">Alle ansatte:</h1>
      <ul className="employee-overview">
        {employeesData.map((employee: any, index: number) => (
          <li key={index} className="employee-list">
            <h3>Navn: {employee.name}</h3>
          </li>
        ))}
      </ul>
    </>
  )
}

export default EmployeeOverview
