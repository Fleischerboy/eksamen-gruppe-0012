const SortOptionsTable = () => {
    return (
        <>
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
        </>
    )
}

export default SortOptionsTable;