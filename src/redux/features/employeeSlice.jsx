import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage
}

const initialState = {
  employees: [],
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
  initialState,
  reducers: {
    addEmployee: (state, { payload }) => {
      state.employees.push(payload)
    },
    removeAllEmployees: (state) => {
      state.employees = []
    }
  }
})

const persistedReducer = persistReducer(persistConfig, employeeSlice.reducer)

export const { addEmployee, removeAllEmployees } = employeeSlice.actions
export default persistedReducer
