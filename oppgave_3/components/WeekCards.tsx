import { useState } from "react"
import { Day, Week } from "../types"
import WeekCard from "./WeekCard"

type weekCardsProp = {
    weekList: Week[]
    handleEmployeeClick: (employeeId: number) => void
}

const WeekCards = ({ weekList, handleEmployeeClick }: weekCardsProp) => {
    const [showLunchDays, setShowLunchDays] = useState<number[]>([])
    const handleLunchDaysToggle = (weekNumber: number) => {
        const showState = showLunchDays.slice()
        const index = showState.indexOf(weekNumber); // returns -1 when not found
        if (index >= 0) {
            showState.splice(index, 1) // remove week on index
            setShowLunchDays(showState)
        } else {
            showState.push(weekNumber)  // push week
            setShowLunchDays(showState)
        }
    }


    return (
        <>
            {/*console.table(weekList)*/}
            {weekList?.length > 0 ? (
                <ul className="week-list">
                    {weekList.map((item, index: number) => (
                        <li key={index} className="week-list-item">
                            <h1>Uke {item.week}</h1>
                            {showLunchDays.includes(item.week) && (
                                <WeekCard lunchDays={item.days} handleEmployeeClick={handleEmployeeClick} />
                            )}
                            <button
                                type="button"
                                onClick={() => handleLunchDaysToggle(item.week)}>
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