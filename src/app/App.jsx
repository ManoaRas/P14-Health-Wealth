import { createTheme, ThemeProvider } from "@mui/material/styles"

import { Provider } from "react-redux"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PersistGate } from "redux-persist/integration/react"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { Home } from "../pages/Home"
import { Employee } from "../pages/Employee"

import { persistor, store } from "../redux/services/store"

export function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#23CF37' },
      secondary: { main: '#dc30c8' },
      black: { main: '#000' },
      white: { main: '#fff' }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Header />

            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Employee />} path="/employees" />
            </Routes>

            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  )
}
