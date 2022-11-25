import React from "react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="">
      <div className="">
        <p>Copyright {currentYear}</p>
      </div>
    </footer>
  )
}

export default Footer
