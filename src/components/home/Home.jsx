import React, { useEffect, useState } from "react"
import SkillBox from "./SkillBox"
import ProjectBox from "./ProjectBox"
import IntroduceBox from "./IntroduceBox"
import EducationBox from "./EducationBox"
import GithubBox from "./GithubBox"
import HomeTitle from "./HomeTitle"
import Mystory from "./Mystory"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = e => {
      const x = (e.clientX - window.innerWidth / 2) / window.innerWidth
      const y = (e.clientY - window.innerHeight / 2) / window.innerHeight

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  return (
    <div>
      <section className="-mt-18.5 lg:sticky top-0 left-0 z-0 min-h-screen">
        <div className="min-h-screen relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
            style={{
              backgroundImage: "url(https://jbinyim12.cafe24.com/hero-bg.jpg)",
              transform: `translate(${mousePosition.x * 60}px, ${
                mousePosition.y * 20
              }px) scale(1.05)`,
            }}
          />
          <div className="relative flex flex-col gap-10 lg:gap-30 items-center pt-25 px-4 lg:pt-40 lg:px-0">
            <HomeTitle text="Introduce Myself" isHome={true} />
            <div className="w-full lg:w-269.5 grid grid-rows-1 lg:grid-cols-5 gap-2.5 lg:items-center lg:justify-center">
              <SkillBox />
              <ProjectBox />
              <IntroduceBox />
              <EducationBox />
              <GithubBox />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-white relative z-10">
        <Mystory />
      </section>
    </div>
  )
}
