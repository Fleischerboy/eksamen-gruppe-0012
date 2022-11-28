import * as  repoDays from '../days/days.repository'

export const overrideLunchDay = async (weekId: string, dayId: string, employeId: string) => {
    
    //TODO CHECK IF DAYID EXIST & SAME ON EMPLOYEID



    const createOverride = await repoDays.overrideLunch(weekId, dayId, employeId)

    if(!createOverride.status) return {status: false, error: createOverride.error}

    return {status: true, data: createOverride.data}
}
