import React from "react"

const BlockRichText = ({ data }) => {
  return (
    <div className="">
      <div
        dangerouslySetInnerHTML={{
          __html: data.richTextBody.data.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default BlockRichText
