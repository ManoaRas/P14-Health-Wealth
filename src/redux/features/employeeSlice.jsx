import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  employees: JSON.parse(localStorage.getItem('employees')) || [],
  currentEmployee: {
    firstName: null,
    lastName: null,
    dateOfBirth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null
  }
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    addEmployee: (state, { payload }) => {
      state.employees.push(payload)
      localStorage.setItem('employees', JSON.stringify(state.employees))
    },
    removeAllEmployees: (state) => {
      state.employees = []
      localStorage.removeItem('employees')
    }
  }
})

export const { addEmployee, removeAllEmployees } = employeeSlice.actions
export default employeeSlice.reducer
