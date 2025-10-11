import React from "react"
import Layout from "../components/layout/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const blog = data?.markdownRemark
  return (
    <Layout>
      <main className="max-w-200 mx-auto pb-4 px-4">
        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: blog?.html }}
        />
      </main>
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
