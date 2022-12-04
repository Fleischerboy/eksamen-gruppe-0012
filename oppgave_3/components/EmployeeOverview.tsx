import { Day, Employee, Week } from '../types'

type EmployeeProps = {
  employeeObject: Employee
}

const EmployeeOverview = ({ employeeObject }: EmployeeProps) => {
  return (
    <>
      {employeeObject.days.length > 0 ? <>
        <h1 className="employee-header">
          Oversikt over jobbdager for: {employeeObject.name}
        </h1>
        <ul className="employee-overview">
          {employeeObject.days.map((week: any, index: number) => (
            <li key={index} className="employee-list">
              {week.overrides.length > 0 ? <>
                <h3>Uke: {week.week.week}</h3>
                <span> Dag: {week.name}</span>
                <span className="step-in">{week.overrides[0].employee.name} stepper inn</span>
              </> : <>
                <h3>Uke: {week.week.week}</h3>
                <span>Dag: {week.name}</span>
              </>}
            </li>
          ))}
        </ul>
      </> : <h1 className="employee-header">ingen jobbdager</h1>}



      {employeeObject.overrides.length > 0 ? <>
        <h1 className="employee-header">
          Oversikt over alle overrides til {employeeObject.name}:
        </h1>
        <ul className="employee-overview">
          {employeeObject.overrides.map((overrides: any, index: number) => (
            <li className="employee-list" key={index}>
              <h3>ukenr: {overrides.weekId}</h3>
              <span>Dag: {overrides.day.name}</span>
            </li>

          ))}
        </ul>
      </> : <h1 className="employee-header">ingen overrides</h1>}
    </>
  )
}

export default EmployeeOverview
