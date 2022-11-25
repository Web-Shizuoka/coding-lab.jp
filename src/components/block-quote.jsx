import React from "react"

const BlockQuote = ({ data }) => {
  return (
    <div className="">
      <blockquote className="">
        <p className="">{data.quoteBody}</p>
        <cite className="">
          {data.title}
        </cite>
      </blockquote>
    </div>
  )
}

export default BlockQuote
