import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

export const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    setEmployee: (state, { payload }) => {
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.dateOfBirth = payload.dateOfBirth
      state.startDate = payload.startDate
      state.street = payload.street
      state.city = payload.city
      state.state = payload.state
      state.zipCode = payload.zipCode
      state.department = payload.department
    }
  }
})

export const { setEmployee } = employeeSlice.actions
export default employeeSlice.reducer
