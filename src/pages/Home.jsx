import { CreateEmployeeForm } from "../components/CreateEmployeeForm"

import { departments } from "../data/departments"
import { states } from "../data/states"

import { employeeSchema } from "../utils/validationsMessage"

export function Home() {
  return (
    <main className="layout">
      <section className="layout--content">
        <h1 className="layout--content__title">Create Employee</h1>

        <CreateEmployeeForm
          departments={departments}
          employeeSchema={employeeSchema}
          states={states}
        />
      </section>
    </main>
  )
}
