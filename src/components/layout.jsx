import React, { useEffect } from "react"
import Footer from "./footer"
import Navbar from "./navbar"

import "../scss/reset.scss"
import "../scss/websStandard.scss"

const Layout = ({ children }) => {
  
  useEffect(() => {
    // イベントリスナーを登録
    window.addEventListener('beforeunload', () => {
      
    });
  }, []);
  
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
