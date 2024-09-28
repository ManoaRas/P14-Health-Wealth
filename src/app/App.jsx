import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { store } from '../redux/services/store'

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { Home } from "../pages/Home"

// import { EmployeeList } from "../pages/EmployeeList"

export function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#23CF37'
      },
      secondary: {
        main: '#dc30c8'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <Header />

          <Routes>
            <Route element={<Home />} path="/" />
            {/* <Route element={<EmployeeList />} path="/employees" /> */}
          </Routes>

          <Footer />
        </Router>
      </Provider>
    </ThemeProvider>
  )
}
