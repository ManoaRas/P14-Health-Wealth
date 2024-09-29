import { EmployeeForm } from "../components/EmployeeForm"

import { departments } from "../data/departments"
import { states } from "../data/states"

import { employeeSchema } from "../utils/validationsMessage"

export function Home() {
  return (
    <main className="home">
      <section className="home--content">
        <EmployeeForm
          departments={departments}
          employeeSchema={employeeSchema}
          states={states}
        />
      </section>
    </main>
  )
}
