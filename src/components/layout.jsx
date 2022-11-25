import React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="">
      <div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
