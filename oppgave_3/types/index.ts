export type Data = { status: true; data: Record<string, unknown> }
export type Error = { status: false; error: string }
export type Result = Data | Error

export type Year = {
  week: Week[]
}

export type Week = {
  week: number
  day: Day[]
}

export type Day = {
  name: string
  employee: Employee | null
}

export type Employee = {
  id: number
  name: string
  rules: string
}
