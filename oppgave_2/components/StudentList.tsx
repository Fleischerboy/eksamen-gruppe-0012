import { StudentData } from "../types";

type studentProp = {
    data: StudentData[]
}

const StudentList = ({ data }: studentProp) => {
    console.log(data)

    return (
        <>
            <h1>Student list</h1>
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