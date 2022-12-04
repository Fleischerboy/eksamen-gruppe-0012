import { useRouter } from 'next/router'
import { useAxios } from '../../../hooks/useAxios'
import { getWeek } from '../../../api/weeks'
import { Day, Result } from '../../../types'
import Layout from '../../../components/Layout'
import Modal from '../../../components/Modal'
import { overrideEmployee } from '../../../api/day'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Week = () => {
  const router = useRouter()

  const id =
    router.query.id instanceof Array
      ? router.query.id.find((x) => x.includes('id'))
      : router.query.id

  const [loading, data, error, request] = useAxios<Result>(
    getWeek(id, {}),
    false
  )

  const [editEmployee, setEditEmployee] = useState<number | null>(null)
  const [overridedEmployeeId, setOverridedEmployeeId] = useState<number>()
  const [dayId, setDayId] = useState<string>()
  const [day, setDay] = useState<string>();
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    if (router.isReady) {
      request()
    }
  }, [router.isReady])





  const onClose = () => {
    setOpenModal(false)
    setEditEmployee(null)
  }

  const handleRadioChange = (employeeId: number) => {
    setEditEmployee(employeeId)
  }

  const handleOverrideInput = async () => {
    if (!(editEmployee && day && dayId && overridedEmployeeId)) return
    await axios(overrideEmployee(id, day, {
      data: {
        dayId: dayId,
        employeeId: editEmployee,
        overridedEmployeeId: overridedEmployeeId
      }
    })).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
    request();
    onClose()
  }


  if (loading)
    return (
      <main>
        <h1>Henter week data...</h1>
      </main>
    )

  if (error)
    return (
      <main>
        <h1>Noe gikk galt...</h1> <h3>Error: {JSON.stringify(error)}</h3>
      </main>
    )

  if (data) {
    const weekData: Day[] = data.data.week.days
    return (
      <>
        <Layout>
          <>

            <ul className="one-week-list">
              <h1>Uke: {id}</h1>
              {weekData.map((day: Day, index: number) => (
                <li className="one-week-item" key={index}>
                  <span>{day.name}</span>
                  {day.employee != null ? <>
                    <span>
                      {day.overrides.length > 0 ? (
                        <>
                          {day.overrides.map((ele, index) => (
                            <span key={index}>{ele.employee.name}</span>
                          ))}
                        </>
                      ) : (
                        <span>{day.employee?.name}</span>
                      )}
                    </span>
                    <button
                      data-testid="edit-lunch-btn"
                      className="primary-btn"
                      onClick={() => { setOpenModal(!openModal); setDay(day.name); setDayId(day.id); setOverridedEmployeeId(day.employee?.id) }}
                    >
                      rediger
                    </button>
                  </> : (<p className="fri">Fri</p>)}
                </li>
              ))}
            </ul>
            <Modal
              open={openModal}
              onClose={onClose}
              day={day}
              handleOverrideInput={handleOverrideInput}
              handleRadioChange={handleRadioChange}

            />
          </>
        </Layout>
      </>
    )
  }

  return (
    <main>
      <h1>data var null</h1>
    </main>
  )
}

export default Week
