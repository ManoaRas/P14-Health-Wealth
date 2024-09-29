import { EmployeeForm } from "../components/EmployeeForm"

import { departments } from "../data/departments"
import { states } from "../data/states"

import { employeeSchema } from "../utils/validationsMessage"

export function Home() {
  return (
    <main className="home">
      <section className="home--content">
        <h1 className="home--content__title">Create Employee</h1>

        <EmployeeForm
          departments={departments}
          employeeSchema={employeeSchema}
          states={states}
        />
      </section>
    </main>
  )
}
