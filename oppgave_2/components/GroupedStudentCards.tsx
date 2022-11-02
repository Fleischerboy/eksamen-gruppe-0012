import { Method, StudentData } from "../types";
import GroupedStudentCard from "./GroupedStudentCard";
import { v4 as uuidv4 } from 'uuid';

type StudentProps = {
    data: Map<any, any>
    sortType: Method
}

const GroupedStudentCards = ({ data, sortType }: StudentProps) => {

    return (
        <>
            <div>
                {
                    [...data].map((entry) => {
                        const key = entry[0]
                        const value = entry[1]
                        return <GroupedStudentCard key={uuidv4()} objectKey={key} data={value} sortType={sortType} />

                    })
                }
            </div>
        </>


    )
}

export default GroupedStudentCards;