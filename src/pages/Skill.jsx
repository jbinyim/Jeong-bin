import * as React from "react"
import { skillImg } from "../utils/skillImg"
import SkillCard from "../components/skill/SkillCard"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"

export default function Skill() {
  return (
    <Layout>
      <main className="max-w-[1078px] w-full mx-auto py-16 px-4 lg:px-0">
        <article className="mt-8">
          <ul className="list-[square] ml-6 flex flex-col gap-10">
            <li className="text-20-bold lg:text-25-bold">
              <p>FrontEnd</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {skillImg.front.map((icon, _idx) => (
                  <SkillCard key={_idx} text={icon.name} img={icon.img} />
                ))}
              </div>
            </li>
            <li className="text-20-bold lg:text-25-bold">
              <p>BackEnd</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {skillImg.back.map((icon, _idx) => (
                  <SkillCard key={_idx} text={icon.name} img={icon.img} />
                ))}
              </div>
            </li>
            <li className="text-20-bold lg:text-25-bold">
              <p>Deployment</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {skillImg.deployment.map((icon, _idx) => (
                  <SkillCard key={_idx} text={icon.name} img={icon.img} />
                ))}
              </div>
            </li>
            <li className="text-20-bold lg:text-25-bold">
              <p>Etc</p>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                {skillImg.etc.map((icon, _idx) => (
                  <SkillCard key={_idx} text={icon.name} img={icon.img} />
                ))}
              </div>
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  )
}

export const Head = () => <Seo title="기술" />
