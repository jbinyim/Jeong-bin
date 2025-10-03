import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const blog = data?.markdownRemark
  return (
    <Layout>
      <h1>{blog?.frontmatter.title}</h1>
      <div
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: blog?.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
      }
    }
  }
`
