import { Link, NavLink } from "react-router-dom"

import logo from "../assets/logo/wealth-health.png"

export function Header() {
  return (
    <header>
      <nav className="nav">
        <Link className="nav--logo" to="/">
          <img src={logo} alt="HRnet logo" />
        </Link>

        <div className="nav--link">
          <NavLink className="" to="/employees">
            <i className="fa-solid fa-users"></i>
            <span>Current Employees</span>
          </NavLink>

          <NavLink className="" to="/employees/create">
            <i className="fa-solid fa-user-plus"></i>
            <span>Create Employee</span>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
