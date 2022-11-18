import { useState } from "react"
import { useLunchContext } from "../context/LunchContext"
import employee from "../pages/employees/[id]"
import { Day, Week } from "../types"

type weekCardsProp = {
    weekList: Week[]
    handleEmployeeClick: (employeeId: number) => void
}

const WeekCards = ({ weekList, handleEmployeeClick }: weekCardsProp) => {
    // fetch weeks med api hooket

    const [show, setShow] = useState(true)

    const handleClick = (weekNumber: number) => {
        console.log(weekNumber)
        setShow(!show)

    }


    return (
        <>
            {console.table(weekList)}
            {weekList?.length > 0 ? (
                <ul className="week-list">
                    {weekList.map((item, index: number) => (
                        <li key={index} className="week-list-item">
                            <h1>Uke {item.week}</h1>
                            <ul className="day-list" hidden={show} >
                                {item.day.map((day: any, index: number) => (
                                    <li key={index} className="day-list-item" >
                                        <span>
                                            {day.name}
                                        </span>
                                        <span>
                                            {day.employee != null ? <button onClick={() => handleEmployeeClick(day.employee.id)} type="button">{day.employee.name}</button> : <p className="fri">Fri</p>}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                onClick={() => handleClick(item.week)}
                            >
                                Se dager
                            </button>

                        </li>

                    ))}
                </ul>
            ) : null}

        </>
    )
}

export default WeekCards