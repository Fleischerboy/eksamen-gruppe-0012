import { useEffect, useState } from "react"
import { overrideEmployee } from "../api/day"
import { employees } from "../data/employees"
import { useAxios } from "../hooks/useAxios"
import { Result } from "../types"

type modalProps = {
    open: Boolean
    onClose: () => void
    handleRadioChange: (employeeId: number) => void
    handleOverrideInput: () => void
    day: string | undefined
}



const Modal = ({ open, day, onClose, handleOverrideInput, handleRadioChange }: modalProps) => {
    if (!open) return null
    return (
        <div onClick={onClose} className="overlay">
            <section onClick={(e) => {
                e.stopPropagation()
            }} className="modalContainer">
                <header className="modal-header">
                    <h1>{day}: bytt lunsj ansvarlig</h1>
                </header>
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
                <footer className="modal-footer">
                    <button onClick={onClose} className="primary-btn">close</button>
                    <input onClick={() => handleOverrideInput()} className="primary-btn" type="submit" value="Submit" />
                </footer>
            </section>

        </div>
    )
}

export default Modal;