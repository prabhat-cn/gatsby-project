/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import FullPage from "../pages/FullPage"
// eslint-disable-next-line react/prop-types
export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.site.siteMetadata

  return (
    <>
      {/* <Header /> */}
      <Layout>
        {data.site && <FullPage pageData={data.site.SiteInfo}/>}
        {/* <p>
          {title} - {description}
        </p> */}
      </Layout>
      {/* <Footer /> */}
    </>
  )
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        author
        copyright
        description
        title
      }
    }
  }
`
