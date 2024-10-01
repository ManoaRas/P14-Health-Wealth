import { configureStore } from "@reduxjs/toolkit"
import { persistStore } from "redux-persist"

import employeeReducer from '../features/employeeSlice'

/**
 * configureStore simplifies the creation and configuration of the Redux store
 * by automatically integrating essential middleware
 */
export const store = configureStore({
  reducer: {
    employee: employeeReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"], // Ignore l'action persist/PERSIST
    }
  }),
  devTools: process.env.NODE_ENV !== 'production' // Redux devTools extension
})

export const persistor = persistStore(store)
