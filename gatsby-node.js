/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    console.log("✅ Markdown node found:", node.fileAbsolutePath)
    const slug = createFilePath({ node, getNode, basePath: `content/blog` })
    console.log("➡️ Generated slug:", slug)

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.jsx`)

  const result = await graphql(`
    {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
