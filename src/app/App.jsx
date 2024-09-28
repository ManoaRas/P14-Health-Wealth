import { Route, Routes } from "react-router-dom";

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Employee />} path="/employee" />
      </Routes>

      <Footer />
    </>
  )
}
