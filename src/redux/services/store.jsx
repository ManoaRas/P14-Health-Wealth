import { configureStore } from "@reduxjs/toolkit"

import employeeReducer from '../features/employeeSlice'

/**
 * configureStore simplifies the creation and configuration of the Redux store
 * by automatically integrating essential middleware
 */
export const store = configureStore({
  reducer: {
    employee: employeeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production' // Redux devTools extension
})
