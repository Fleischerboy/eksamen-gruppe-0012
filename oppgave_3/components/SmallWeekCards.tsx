import { Week } from "../types"

type SmallWeekCardsProps = {
    weekList: Week[]
    handleWeekClick: (weekNumber: number) => void

}

const SmallWeekCards = ({ weekList, handleWeekClick }: SmallWeekCardsProps) => {
    return (
        <>
            {/*console.table(weekList)*/}
            {weekList?.length > 0 ? (<>
                <ul className="small-week-cards-list">
                    {weekList.map((item, index: number) => (
                        <li key={index} className="small-week-cards-item">
                            <button
                                type="button"
                                onClick={() => handleWeekClick(item.week)}
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