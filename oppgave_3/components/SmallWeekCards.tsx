import { Week } from "../types"

type SmallWeekCardsProps = {
    weekList: Week[]
    handleWeekClick: (weekNumber: number) => void

}

const SmallWeekCards = ({ weekList, handleWeekClick }: SmallWeekCardsProps) => {
    return (
        <>
            <div className="small-week-cards" data-testid="small-week-cards">
                {weekList?.length > 0 ? (<>
                    <ul className="small-week-cards-list" data-testid="small-week-cards-list">
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
            </div>
        </>

    )
}

export default SmallWeekCards