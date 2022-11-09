export type Data = { status: true; data: Record<string, unknown> }
export type Error = { status: false; error: string }
export type Result = Data | Error

export type Week = {
  Mandag: Day | null
  Tirsdag: Day | null
  Onsdag: Day | null
  Torsdag: Day | null
  Fredag: Day | null
}

export interface Year {
  week: Week[]
}
export interface Day {
  employee: Employee
}

export type Employee = {
  id: number
  name: string
  rules: string
}
