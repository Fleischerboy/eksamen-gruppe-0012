import { useState } from "react"
import { Week } from "../types"
import WeekCard from "./WeekCard"


type weekCardsProp = {
    weekList: Week[]
    showLunchDays: number[]
    handleEmployeeClick: (employeeId?: number) => void
    handleLunchDaysToggle: (weekNumber: number) => void
}

const WeekCards = ({ weekList, showLunchDays, handleLunchDaysToggle, handleEmployeeClick }: weekCardsProp) => {


    return (
        <>
            <div className="week-cards" data-testid="week-cards">
                {weekList?.length > 0 ? (
                    <ul className="week-list" data-testid="week-list">
                        {weekList.map((item, index: number) => (
                            <li key={index} className="week-list-item" data-testid="week-list-item">
                                <h1>Uke {item.week}</h1>
                                {showLunchDays.includes(item.week) && (
                                    <WeekCard lunchDays={item.days} handleEmployeeClick={handleEmployeeClick} />
                                )}
                                <button
                                    type="button"
                                    onClick={() => handleLunchDaysToggle(item.week)}
                                    data-testid="see-days"
                                >
                                    Se dager
                                </button>
                            </li>
                        ))}
                    </ul>

                ) : null}
            </div>
        </>
    )
}

export default WeekCards