// source url: https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
import { employees } from "../data/employees"
import OverrideEmployeeForm from "./OverrideEmployeeForm"


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
                <OverrideEmployeeForm handleRadioChange={handleRadioChange} day={day} />
                <footer className="modal-footer">
                    <button onClick={onClose} className="primary-btn">close</button>
                    <input onClick={() => handleOverrideInput()} className="primary-btn" type="submit" value="Submit" />
                </footer>
            </section>

        </div>
    )
}

export default Modal;