import axios from 'axios'
import { useEffect, useState } from 'react'
import { getEmployee, updateEmployee } from '../api/employee'
import TextField from './TextField'

type UpdateFormCardPropsType = {
  refreshData?: () => void
  id?: number
}

const UpdateFormCard = ({
  refreshData,
  id: employeeId,
}: UpdateFormCardPropsType) => {
  const [id, setId] = useState(employeeId || 1)
  const [form, setForm] = useState({ id: '', name: '', rules: '' })
  const [show, setShow] = useState(false)

  const setEmployeeData = async () => {
    if (id && id > 0) {
      const {
        data: {
          data: { employee },
        },
      } = await axios(getEmployee(id.toString(), {}))
      if (employee) {
        setForm({ id: employee.id, name: employee.name, rules: employee.rules })
        console.log(employee)
        console.log(form)
      }
    } else setForm({ id: '', name: '', rules: '' })
  }

  const handleIdSubmit = async (e: any) => {
    e.preventDefault()
    setEmployeeData()
  }

  const handleNameSubmit = async (e: any) => {
    e.preventDefault()
    await axios(updateEmployee(id.toString(), { data: form }))
    console.log(form)
    refreshData?.()
  }

  useEffect(() => {
    if (employeeId) setEmployeeData()
  }, [employeeId])

  return (
    <ul className="week-list">
      <li className="week-list-item">
        <h1>Oppdater ansatt</h1>
        {show && (
          <>
            {!employeeId && (
              <form className="form" onSubmit={handleIdSubmit}>
                <TextField
                  name="id"
                  placeholder="1"
                  value={id}
                  onChange={(e: any) => setId(e.target.value)}
                />
                <button type="submit">Get Employee Name</button>
              </form>
            )}
            <form className="form" onSubmit={handleNameSubmit}>
              <TextField
                prefix="Oppdater"
                name="navn"
                placeholder="Lars"
                value={form.name}
                onChange={(e: any) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              <button type="submit">Send inn</button>
            </form>
          </>
        )}
        <button type="button" onClick={() => setShow(!show)}>
          Oppdater en ansatt
        </button>
      </li>
    </ul>
  )
}

export default UpdateFormCard
