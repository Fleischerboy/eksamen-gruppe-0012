import { Week } from '../types'

type SelectWeeksProps = {
  handleSelectedWeeks: (start: number, end: number) => void
  weekList: Week[]
}

const SelectWeeks = ({ weekList, handleSelectedWeeks }: SelectWeeksProps) => {
  return (
    <>
      <form className="select-weeks">
        <label htmlFor="weeks">Velg periode du vil se ansvaret for:</label>
        <select id="start" name="start">
          {weekList.map((item, index: number) => (
            <option key={index} value={item.week}>
              {item.week}
            </option>
          ))}
        </select>
        <p>til:</p>
        <select id="end" name="end">
          {weekList.map((item, index: number) => (
            <option key={index} value={item.week}>
              {item.week}
            </option>
          ))}
        </select>
        <input type="submit"></input>
      </form>
    </>
  )
}

export default SelectWeeks
