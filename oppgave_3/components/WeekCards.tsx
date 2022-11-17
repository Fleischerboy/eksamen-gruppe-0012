import { useLunchContext } from "../context/LunchContext"



const WeekCards = () => {
    // fetch weeks med api hooket
    const {
        LunchData,
    } = useLunchContext()


    if (!LunchData) return <h1>no data provided</h1>





    return <h1>{JSON.stringify(LunchData)}</h1>
}

export default WeekCards