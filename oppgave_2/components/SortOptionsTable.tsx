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




            {/* // FØR
                <section>
                    <label htmlFor="ingen">
                        Ingen
                        <input id="ingen" name="sortMethod" value="ingen" type="radio" defaultChecked={true} />
                    </label>
                    <label htmlFor="alder">
                        alder
                        <input id="alder" name="sortMethod" value="alder" type="radio" />
                    </label>
                    <label htmlFor="kjønn">
                        kjønn
                        <input id="kjønn" name="sortMethod" value="kjønn" type="radio" />
                    </label>
                    <label htmlFor="klasse">
                        klasse
                        <input id="klasse" name="sortMethod" value="klasse" type="radio" />
                    </label>
                </section>
                */}
        </>
    )
}

export default SortOptionsTable;