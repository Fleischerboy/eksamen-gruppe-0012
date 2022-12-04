export type Data = { status: true; data: Record<string, unknown> }
export type Error = { status: false; error: string }
export type Result = Data | Error

export type Year = {
  weeks: Week[]
}

export type Week = {
  week: number
  days: Day[]
}

export type Day = {
  id: string
  name: string
  lunch: string
  employee: Employee | null
  overrides: Employee[]
}

export type Employee = {
  employee: Employee
  id: number
  name: string
  rules: string
  days: Day[]
}

export type WeekDay = {
  name: 'mandag' | 'trisdag' | 'onsdag' | 'torsdag' | 'fredag'
}
