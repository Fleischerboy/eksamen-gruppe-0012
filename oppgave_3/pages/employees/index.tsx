import { useLunchContext } from "../../context/LunchContext"

const Employees = () => {
    const {
        LunchData,
    } = useLunchContext()

    return <h1>{JSON.stringify({ LunchData })}</h1>
}

export default Employees