import { Method, StudentData } from "../types";

type CardProps = {
    data: StudentData[]
    sortType: Method
    objectKey: any
}

const GroupedStudentCard = ({ data, objectKey, sortType }: CardProps) => {

    return (
        <>
            <h1>Gruppering etter {sortType === 'Klasse' ? 'studieretning' : sortType.toLowerCase()}: {objectKey}</h1>
            {data.map((student: StudentData, index: number) => (
                <li key={index}>
                    <span>
                        {student.id}
                    </span>
                    <span>
                        {student.name}
                    </span>
                    <span>
                        {student.age}
                    </span>
                    <span>
                        {student.gender}
                    </span>
                    <span>
                        {student.group}
                    </span>
                </li>
            ))}
            <h1 className="count">Antall: {data.length}</h1>
        </>
    )

}

export default GroupedStudentCard;