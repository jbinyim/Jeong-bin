import React, { useMemo } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/layout/layout"
import { parsePortfolioFiles } from "../utils/portfolio"

export default function Project() {
  const projects = useMemo(() => parsePortfolioFiles(), [])

  return (
    <Layout>
      <main className="max-w-200 mx-auto py-8">
        <p className="text-center text-20-bold">Projeect</p>
        <article className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 px-4">
          {projects.map(project => (
            <figure
              key={project.slug}
              className="h-85 rounded-4xl overflow-hidden shadow"
            >
              <img
                src={project.thumbnail || "https://placehold.co/600x400"}
                alt="프로젝트 썸네일"
                className="w-full md:w-100 h-52.5 object-top object-cover"
              />
              <div className="bg-[#f7f8fa] px-4 py-2 h-32.5">
                <ul className="pb-1">
                  {project.tech?.map((t, _idx) => (
                    <li
                      key={_idx}
                      className="inline-block text-12-normal text-white bg-black px-1 py-0.5 rounded-sm mr-1"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="block text-16-bold">{project.title}</span>
                <span className="text-14-normal">{project.oneLine}</span>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-12-normal hover:underline">
                    <Link to={`/Project/${project.slug}`}>See More</Link>
                  </span>
                  <span className="text-12-normal hover:underline">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Link
                    </a>
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
