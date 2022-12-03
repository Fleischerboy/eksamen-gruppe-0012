import { getEmployees } from "../api/employee"
import { employees } from "../data/employees"
import { useAxios } from "../hooks/useAxios"
import { Result } from "../types"

type overrideEmployeeFormProps = {
    handleRadioChange: (employeeId: number) => void
    day: string | undefined
}

const OverrideEmployeeForm = ({ handleRadioChange, day }: overrideEmployeeFormProps) => {


    const [loading, data, error, request] = useAxios<Result>(
        getEmployees({}))


    if (loading)
        return (
            <main>
                <h1>Henter data...</h1>
            </main>
        )

    if (error)
        return (
            <main>
                <h1>Noe gikk galt...</h1> <h3>Error: {JSON.stringify(error)}</h3>
            </main>
        )

    if (!data) {
        return (
            <main>
                <h1>employees data var null</h1>
            </main>
        )
    }

    return (
        <>
            <header className="modal-header">
                <h1>{day}: bytt lunsj ansvarlig</h1>
            </header>
            <form>
                <ul className="modal-list">
                    {data.data.employees.map((employee, index) => (
                        <li className="modal-list-item" key={index}>
                            <div className="input-container">
                                <input onChange={() => handleRadioChange(employee.id)}
                                    className="radio-input" type="radio" id={employee.id.toString()}
                                    name="employee"
                                    value={employee.id} />
                                <label htmlFor={employee.id.toString()}>{employee.name}</label>
                            </div>
                        </li>
                    ))}
                </ul>
            </form>


        </>
    )

}


export default OverrideEmployeeForm;