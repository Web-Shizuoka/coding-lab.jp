import React from "react"

const Headings = ({ title, description }) => {
  return (
    <header className="">
      <h1 className="">{title}</h1>
      {description && (
        <p className="">{description}</p>
      )}
    </header>
  )
}

export default Headings
