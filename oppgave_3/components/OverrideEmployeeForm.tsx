import { employees } from "../data/employees"

type overrideEmployeeFormProps = {
    handleRadioChange: (employeeId: number) => void
    day: string | undefined
}

const overrideEmployeeForm = ({ handleRadioChange, day }: overrideEmployeeFormProps) => {

    return (
        <>
            <header className="modal-header">
                <h1>{day}: bytt lunsj ansvarlig</h1>
            </header>
            <form>
                <ul className="modal-list">
                    {employees.map((employee, index) => (
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


export default overrideEmployeeForm;