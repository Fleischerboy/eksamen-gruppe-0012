// https://dev.to/salehmubashar/search-bar-in-react-js-545l used for creating search part of this component

import { Day, Employee, Week } from '../types'
import { MouseEventHandler, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'


type EmployeeProps = {
  employeesData: any
  handleOnClick: (employeeId: string) => void
}

const EmployeesView = ({ employeesData, handleOnClick }: EmployeeProps) => {
  const [inputText, setInputText] = useState('')
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  const filteredData = employeesData.filter((employee) => {
    //if no input the return the original
    if (inputText === '') {
      return employee
    }
    //return the item which contains the user input
    else {
      return employee.name.toLowerCase().includes(inputText)
    }
  })

  return (
    <>
      <h1 className="employee-header">Alle ansatte:</h1>
      <div className="search-bar">
        <h2>Søk blant ansatte:</h2>
        <div className="search">
          <TextField
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
        {filteredData.length > 0 ? (
          <ul className="employee-overview">
            {filteredData.map((employee: any, index: number) => (
              <li key={index} className="employee-list">
                <h3>Navn: {employee.name}</h3>
                <button
                  onClick={() => {
                    handleOnClick(employee.id)
                  }}
                >
                  Se mer
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h1>❌ Ingen ansatte med dette navnet</h1>
        )}
      </div>
    </>
  )
}

export default EmployeesView
