import React from "react"
import ArticleCard from "./article-card"

const ArticlesGrid = ({ articles }) => {
  return (
    <div className="">
      {articles.map((article, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </div>
  )
}

export default ArticlesGrid
