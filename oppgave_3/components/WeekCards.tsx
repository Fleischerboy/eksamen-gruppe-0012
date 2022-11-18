import { useState } from "react"
import { useLunchContext } from "../context/LunchContext"
import employee from "../pages/employees/[id]"
import { Day, Week } from "../types"

type weekCardsProp = {
    weekList: Week[]
}

const WeekCards = ({ weekList }: weekCardsProp) => {
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
                    {weekList.map((week, index: number) => (
                        <li key={index} className="week-list-item">
                            <h1>Uke {week.id}</h1>
                            <ul className="day-list" hidden={show} >
                                {week.day.map((day: any, index: number) => (
                                    <li key={index} className="day-list-item" >
                                        <span>
                                            {day.name}
                                        </span>
                                        <span>
                                            {day.employee != null ? day.employee.name : <p className="fri">Fri</p>}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                type="button"
                                onClick={() => handleClick(week.id)}
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