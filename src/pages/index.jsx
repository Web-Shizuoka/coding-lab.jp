import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from 'linaria'
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"

const testClass = css`
  color: green;
  
  &:after{
    content: "aaaaaaaaaaaa";
  }
`

const IndexPage = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        <h1 className={testClass}>aaa</h1>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage
