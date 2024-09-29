import { NavLink } from "react-router-dom"

import logo from "../assets/HRnet.webp"

export function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <img
          className="header--logo__img"
          src={logo}
          alt="HRnet logo"
        />
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
