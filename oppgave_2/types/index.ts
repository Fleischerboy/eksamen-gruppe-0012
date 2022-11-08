export type Data = { success: true; data: Record<string, unknown> }
export type Error = { success: false; error: string }
export type Result = Data | Error

export type Status = 'loading' | 'idle' | 'error' | 'success'
export type StudentData = {
  id: string
  name: string
  gender: string
  age: number
  group: string
}
export type Method = 'Ingen' | 'Alder' | 'Kjønn' | 'Klasse'
