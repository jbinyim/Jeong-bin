import * as React from "react"

import Layout from "../components/layout/layout.jsx"
import Seo from "../components/layout/seo.jsx"
import Home from "../components/home/Home.jsx"

const IndexPage = () => (
  <Layout>
    <Home />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="임정빈" />

export default IndexPage
