import { NavLink } from "react-router-dom"

import logo from "../assets/HRnet.png"

export function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <img className="header--logo__img" src={logo} alt="HRnet logo" />
        <p className="header--logo__text">HRnet</p>
      </div>

      <nav className="header--nav">
        <div className="header--nav--link">
          <NavLink to="/">Home</NavLink>
        </div>

        <div className="header--nav--link">
          <NavLink to="/employees">Employees</NavLink>
        </div>
      </nav>
    </header>
  )
}
