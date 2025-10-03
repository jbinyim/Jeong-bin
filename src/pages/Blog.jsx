import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/layout/seo"

export default function Blog({ data }) {
  const posts = data?.allMarkdownRemark.nodes

  console.log(posts)
  return (
    <Layout>
      {posts?.map(post => (
        <div>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
        }
        fields {
          slug
        }
      }
    }
  }
`

export const Head = () => <Seo title="임정빈" description="Blog" />
