import React from "react"
import Layout from "../components/layout/layout"
import { graphql, Link } from "gatsby"

export default function Project({ data }) {
  const projects = data?.allMarkdownRemark.nodes

  console.log(projects)
  return (
    <Layout>
      <main className="max-w-200 mx-auto py-8">
        <span>Projeect</span>
        <article className="grid grid-cols-2 gap-4 mt-8">
          {projects.map(project => (
            <Link key={project.fields.slug} to={project.fields.slug}>
              <figure className="h-[340px] rounded-4xl overflow-hidden">
                <img
                  src="https://placehold.co/600x400"
                  alt="프로젝트 썸네일"
                  className="w-[400px] h-[210px] object-cover"
                />
                <div className="bg-[#f7f8fa] px-4 py-2 h-[130px]">
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
                      <Link
                        to="https://github.com/jbinyim/6th-Moving-4Team-FE"
                        target="blank"
                      >
                        github
                      </Link>
                    </span>
                    <span className="text-12-normal hover:underline">
                      <Link to="https://moving-web.site/ko" target="blank">
                        Link
                      </Link>
                    </span>
                  </div>
                </div>
              </figure>
            </Link>
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
