import { employees } from './../data/employees';
export type Data = { status: true; data: Record<string, unknown> }
export type Error = { status: false; error: string }
export type Result = Data | Error

export type day =
  | 'Mandag'
  | 'Tirsdag'
  | 'Onsdag'
  | 'Torsdag'
  | 'Fredag'
  | 'Lørdag'
  | 'Søndag'


export type weekData = {
  

}

export type employee = {
    
}

