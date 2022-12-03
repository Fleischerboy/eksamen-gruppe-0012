// https://dev.to/salehmubashar/search-bar-in-react-js-545l used for creating serch part of this component

import { Day, Employee, Week } from '../types'
import { React, useState } from 'react'
import TextField from '@mui/material/TextField'

type EmployeeProps = {
  employeesData: any
}

const EmployeesView = ({ employeesData }: EmployeeProps) => {
  const [inputText, setInputText] = useState('')
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  const filteredData = employeesData.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
      return el
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputText)
    }
  })

  return (
    <>
      <h1 className="employee-header">Alle ansatte:</h1>
      <div className="search-bar">
        <h2>Søk blant ansatte:</h2>
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        <ul className="employee-overview">
          {filteredData.map((employee: any, index: number) => (
            <li key={index} className="employee-list">
              <h3>Navn: {employee.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default EmployeesView
