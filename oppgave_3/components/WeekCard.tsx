import { useLunchContext } from '../context/LunchContext'
import { Day, Employee } from '../types'

type WeekCardProps = {
  lunchDays: Day[]
  handleEmployeeClick: (employeeId?: number) => void
}

const WeekCard = ({ lunchDays, handleEmployeeClick }: WeekCardProps) => {
  return (
    <>
      <ul className="day-list">
        {lunchDays.map((day: Day, index: number) => (
          <li key={index} className="day-list-item">
            <span>{day.name}</span>
            <span>
              {day.employee != null ? (
                <>
                  {day.overrides.length > 0 ? (
                    <>
                      {day.overrides.map((ele, index) => (
                        <button
                          onClick={() => handleEmployeeClick(ele?.employee?.id)}
                          type="button"
                          key={index}
                        >
                          {ele?.employee?.name}
                        </button>
                      ))}
                    </>
                  ) : (
                    <button
                      onClick={() => handleEmployeeClick(day?.employee?.id)}
                      type="button"
                    >
                      {day.employee?.name}
                    </button>
                  )}
                </>
              ) : (
                <p className="fri">Fri</p>
              )}
            </span>
            <span>{day.lunch}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default WeekCard
