import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav>
      <ul>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"about"}>About</NavLink></li>
        <li><NavLink to={"contact"}>Contact</NavLink></li>
      </ul>
    </nav>
    <main>
        <Outlet/>
    </main>
    </div>
  )
}
