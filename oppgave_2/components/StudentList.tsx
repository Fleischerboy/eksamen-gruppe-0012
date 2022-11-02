import { Method, StudentData } from "../types";

type StudentProp = {
    data: StudentData[]
}

const StudentList = ({ data }: StudentProp) => {
    return (
        <>
            <ul className="student-list">
                {data.map((student, index) => (
                    <li key={index} className="student-list-item">
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
            </ul>
        </>
    )
}

export default StudentList;