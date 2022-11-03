import { Method } from "../types";

type SortOptionsTableProp = {
    handleSortMethodChange: (sortMethod: Method) => void,
    sortMethods: string[]
}

const SortOptionsTable = ({ handleSortMethodChange, sortMethods }: SortOptionsTableProp) => {
    return (
        <>
            <section>
                {sortMethods.map((method, index) => (
                    <label key={index} htmlFor={method}>
                        {method}
                        <input type="radio" id={method} name="sortMethod" value={method} defaultChecked={index === 0 ? true : false} onChange={(event) => handleSortMethodChange(event.target.value as Method)} ></input>
                    </label>
                ))}
            </section>
        </>
    )
}

export default SortOptionsTable;