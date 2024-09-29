import { EmployeeList } from "../components/EmployeeList"

export function Employee() {
  return (
    <main className="employees">
      <section className="employee--content">
        <h1 className="employee--content__title">Current Employees</h1>

        <EmployeeList />
      </section>
    </main>
  )
}
