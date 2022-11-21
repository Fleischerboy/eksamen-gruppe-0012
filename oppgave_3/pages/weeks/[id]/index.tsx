import { useRouter } from "next/router";
import { useAxios } from "../../../hooks/useAxios";
import { getWeek } from '../../../api/weeks'
import { useEffect } from "react";
import { Result } from "../../../types";


const Week = () => {
    const router = useRouter()
    const id = router.query.id instanceof Array ?
        router.query.id.find((x) => x.includes('id'))
        : router.query.id

    const [loading, data, error, request] = useAxios<Result>(getWeek(id, {}), false);

    useEffect(() => {
        if (router.isReady) {
            request()

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.isReady])


    if (loading) return <main><h1>Henter week data...</h1></main>

    if (error) return (
        <main><h1>Noe gikk galt...</h1> <h3>Error: {JSON.stringify(error)}</h3></main>
    )

    return (<>
        <h1>week: {id}</h1>
        <h1>{JSON.stringify(data)}</h1>
    </>
    )
}

export default Week;