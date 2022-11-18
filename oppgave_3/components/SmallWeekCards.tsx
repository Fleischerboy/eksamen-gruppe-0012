const SmallWeekCards = ({ weekList }: any) => {

    const handleClick = (weekNum: number) => {
        console.log(weekNum)
    }

    return (
        <>
            {weekList?.length > 0 ? (<>
                <ul className="small-week-cards-list">
                    {weekList.map((item: any, index: number) => (
                        <li key={index} className="small-week-cards-item">
                            <button
                                type="button"
                                onClick={() => handleClick(item.week)}
                            >
                                {item.week}
                            </button>
                        </li>
                    ))}
                </ul>
                <hr />
            </>

            ) : null}
        </>
    )
}

export default SmallWeekCards