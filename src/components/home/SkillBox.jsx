import * as React from "react"
import { Link } from "gatsby"

export default function SkillBox() {
  return (
    <Link to="/Skill">
      <div className="hidden h-85 rounded-2xl text-white lg:flex flex-col justify-between cursor-pointer relative overflow-hidden group">
        <img
          src="https://jbinyim12.cafe24.com/skillimg.jpg"
          alt="기술 스택 이미지"
          className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-1500 ease-in-out
          scale-150 group-hover:scale-100 transform-origin-bottom-left"
        />
        <div className="relative z-10 h-full p-6 flex flex-col justify-between">
          <div>
            <p className="text-20-bold mb-3">기술</p>
            <p className="text-13-normal">
              개발자로서 보유한
              <br />
              핵심 기술 스택
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
