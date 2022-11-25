import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <header className="">
      <nav className="">
        <Link to="/" className="">
          Blog
        </Link>
        <div className="">
          <Link className="" to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
