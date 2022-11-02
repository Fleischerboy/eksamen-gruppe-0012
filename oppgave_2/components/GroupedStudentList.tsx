import { should } from "vitest";
import { Method, StudentData } from "../types";
import GroupedStudentCards from "./GroupedStudentCards";
import StudentList from "./StudentList";

type GroupedStudentListProps = {
    sortType: Method
    sortStudentsByAlphabeticalOrder: () => StudentData[]
    sortStudentsByAge: () => StudentData[]
    sortStudentsByGender: () => StudentData[]
    sortStudentsByFieldOfStudy: () => StudentData[]
    groupByStudentProperty: (data: StudentData[], keyGetter: any) => Map<any, any>
}

const GroupedStudentList = ({ sortType, sortStudentsByAlphabeticalOrder, sortStudentsByAge, sortStudentsByGender, sortStudentsByFieldOfStudy, groupByStudentProperty }: GroupedStudentListProps) => {
    switch (sortType) {
        case 'Ingen': {
            return <StudentList data={sortStudentsByAlphabeticalOrder()} />

        }
        case 'Alder': {
            const groupByAge = groupByStudentProperty(sortStudentsByAge(), (student: StudentData) => student.age)
            return <GroupedStudentCards data={groupByAge} sortType={sortType} />
        }
        case 'Kjønn': {

            const groupByGender = groupByStudentProperty(sortStudentsByGender(), (student: StudentData) => student.gender)
            return <GroupedStudentCards data={groupByGender} sortType={sortType} />
        }
        case 'Klasse': {
            const groupByFieldOfStudy = groupByStudentProperty(sortStudentsByFieldOfStudy(), (student: StudentData) => student.group)
            return <GroupedStudentCards data={groupByFieldOfStudy} sortType={sortType} />
        }
        default:
            return null;
    }




}

export default GroupedStudentList;