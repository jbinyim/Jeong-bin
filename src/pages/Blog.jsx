import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/layout/seo"

export default function Blog({ data }) {
  const posts = data?.allMarkdownRemark.nodes

  return (
    <Layout>
      <main className="max-w-200 mx-auto py-8 px-2">
        <p className="text-center text-20-bold mb-4">({posts.length}) Blogs</p>
        <div className="flex flex-col gap-4">
          {posts?.map(post => (
            <Link key={post.fields.slug} to={post.fields.slug}>
              <figure className="p-1 hover:bg-[#f7f8fa] rounded-sm flex flex-col gap-2">
                <p className="text-18-bold">{post.frontmatter.title}</p>
                <p className="text-13-normal text-[#8a8a8a]">{post.excerpt}</p>
                <p className="text-13-normal text-[#b5b6ba]">
                  {post.frontmatter.date}
                </p>
              </figure>
            </Link>
          ))}
        </div>
      </main>
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
          category
        }
        excerpt(pruneLength: 240)
        fields {
          slug
        }
      }
    }
  }
`

export const Head = () => <Seo title="블로그" description="Blog" />
