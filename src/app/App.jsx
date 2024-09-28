import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

import { Home } from "../pages/Home"
// import { EmployeeList } from "../pages/EmployeeList"

export function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" />
        {/* <Route element={<EmployeeList />} path="/employees" /> */}
      </Routes>

      <Footer />
    </>
  )
}
