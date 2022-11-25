import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.slug}`}
      className=""
    >
      <GatsbyImage
        image={getImage(article.cover?.localFile)}
        alt={article.cover?.alternativeText}
      />
      <div className="">
        <h3 className="">{article.title}</h3>
        <p className="">
          {article.description}
        </p>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`

export default ArticleCard
