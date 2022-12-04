import { FormEvent, useState } from 'react'
import { Week } from '../types'

type SelectWeeksProps = {
  handleSelectedWeeks: (e: FormEvent, start: number, end: number) => void
  weekList: Week[]
}

const SelectWeeks = ({ weekList, handleSelectedWeeks }: SelectWeeksProps) => {
  const [start, setStart] = useState(1)
  const [end, setEnd] = useState(1)

  const validSelection = (start: number, end: number) => {
    return start <= end
  }

  return (
    <>
      <form
        onSubmit={(e) => handleSelectedWeeks(e, start, end)}
        className="select-weeks"
      >
        <label htmlFor="weeks">Velg periode du vil se ansvaret for:</label>
        <select
          id="start"
          data-testid="start"
          name="start"
          onChange={(e) => setStart(parseInt(e.target.value))}
        >
          {weekList.map((item, index: number) => (
            <option key={index} value={item.week}>
              {item.week}
            </option>
          ))}
        </select>
        <p>til:</p>
        <select
          id="end"
          data-testid="end"
          name="end"
          onChange={(e) => setEnd(parseInt(e.target.value))}
        >
          {weekList.map((item, index: number) => (
            <option key={index} value={item.week}>
              {item.week}
            </option>
          ))}
        </select>
        <button disabled={!validSelection(start, end)} type="submit">
          Se uker
        </button>
      </form>
    </>
  )
}

export default SelectWeeks
