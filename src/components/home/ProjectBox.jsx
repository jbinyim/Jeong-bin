import { Link } from "gatsby"
import * as React from "react"

export default function ProjectBox() {
  return (
    <>
      {/* lg size */}
      <Link to="/Project">
        <div className="hidden lg:block h-100 bg-[#e0e0e0] rounded-2xl cursor-pointer relative overflow-hidden group">
          <img
            src="https://jbinyim12.cafe24.com/projectImg.jpg"
            alt="프로젝트 이미지"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-800 ease-in-out group-hover:scale-130"
          />
          <div className="relative z-10 h-full p-6 text-white flex flex-col justify-between">
            <div>
              <p className="text-20-bold mb-3">프로젝트</p>
              <p className="text-13-normal">
                개발 역량을 강화하기 위해 <br />
                끊임없이 고민하고 발전시킨 프로젝트
              </p>
            </div>
          </div>
        </div>
      </Link>
      {/* sm size */}
      <div className="lg:hidden order-2 w-full h-46.5 flex justify-between gap-4">
        <Link
          to="/project"
          className="block w-full h-hull project-img rounded-2xl p-4 text-white cursor-pointer"
        >
          <p className="text-16-bold mb-3">프로젝트</p>
          <p className="text-12-normal">
            개발 역량을 강화하기 위해
            <br />
            끊임없이 고민하고 발전시킨 프로젝트
          </p>
        </Link>
        <Link
          to="/skill"
          className="w-full skill-img rounded-2xl p-4 text-white"
        >
          <p className="text-16-bold mb-3">기술</p>
          <p className="text-12-normal">
            개발자로서 보유한
            <br />
            핵심 기술 스택
          </p>
        </Link>
      </div>
    </>
  )
}
