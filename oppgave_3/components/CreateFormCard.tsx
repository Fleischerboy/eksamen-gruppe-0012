import axios from 'axios'
import { useState } from 'react'
import { createEmployee } from '../api/employee'
import TextField from './TextField'

const CreateFormCard = () => {
  const [form, setForm] = useState({ id: '', name: '', rules: '' })
  const [show, setShow] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await axios(createEmployee({ data: form }))
  }
  return (
    <ul className="week-list">
      <li className="week-list-item">
        <h1>Opprett ansatt</h1>
        {show && (
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              name="navn"
              placeholder="Lars"
              value={form.name}
              onChange={(e: any) => setForm({ ...form, name: e.target.value })}
            />
            <TextField
              name="rules"
              placeholder="dager:*"
              value={form.rules}
              onChange={(e: any) => setForm({ ...form, rules: e.target.value })}
            />
            <button type="submit">Send inn</button>
          </form>
        )}
        <button type="button" onClick={() => setShow(!show)}>
          Opprett en ansatt
        </button>
      </li>
    </ul>
  )
}

export default CreateFormCard
