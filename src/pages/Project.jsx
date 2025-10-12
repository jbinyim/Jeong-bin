import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/layout/seo"

export default function Project({ data }) {
  const projects = data?.allMarkdownRemark.nodes

  return (
    <Layout>
      <main className="max-w-200 mx-auto py-8">
        <p className="text-center text-20-bold">Projeect</p>
        <article className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 px-4">
          {projects.map(project => (
            <figure
              key={project.fields.slug}
              className="h-85 rounded-4xl overflow-hidden shadow"
            >
              <img
                src={
                  project.frontmatter.thumbnail ||
                  "https://placehold.co/600x400"
                }
                alt="프로젝트 썸네일"
                className="w-full md:w-100 h-52.5 object-top object-cover"
              />
              <div className="bg-[#f7f8fa] px-4 py-2 h-32.5">
                <ul className="pb-1">
                  {project.frontmatter.tech?.map((t, _idx) => (
                    <li
                      key={_idx}
                      className="inline-block text-12-normal text-white bg-black px-1 py-0.5 rounded-sm mr-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="block text-16-bold">
                  {project.frontmatter.title}
                </span>
                <span className="text-14-normal">
                  {project.frontmatter.oneLine}
                </span>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-12-normal hover:underline">
                    <Link to={project.fields.slug} target="blank">
                      See More
                    </Link>
                  </span>
                  <span className="text-12-normal hover:underline">
                    <Link to={project.frontmatter.link} target="blank">
                      Link
                    </Link>
                  </span>
                </div>
              </div>
            </figure>
          ))}
        </article>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/portfolio/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          oneLine
          tech
          link
          thumbnail
        }
        fields {
          slug
        }
      }
    }
  }
`

export const Head = () => <Seo title="프로젝트" />
