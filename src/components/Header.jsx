import { NavLink } from "react-router-dom"

export function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <p className="header--logo__text">HRnet</p>
      </div>

      <nav className="header--nav">
        <NavLink className="header--nav--link" to="/">
          Home
        </NavLink>

        <NavLink className="header--nav--link" to="/employees">
          Employees
        </NavLink>
      </nav>
    </header>
  )
}
