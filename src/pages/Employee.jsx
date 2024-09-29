import { EmployeeList } from "../components/EmployeeList"

export function Employee() {
  return (
    <main className="layout">
      <section className="layout--content">
        <h1 className="layout--content__title">Current Employees</h1>

        <EmployeeList />
      </section>
    </main>
  )
}
