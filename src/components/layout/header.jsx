import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="fixed top-0 left-0 z-30 w-full h-18.5 flex items-center justify-center backdrop-blur-sm bg-white/30 px-4 lg:px-0 border-b-2 border-gray-100">
    <div className="w-269.5 h-full flex items-center justify-between">
      <Link to="/" className="text-24-normal">
        Jeong-bin
      </Link>
      <ul className="flex items-center gap-4">
        <li className="hover:underline">
          <Link to="/Introduce">소개</Link>
        </li>
        <li>
          <Link to="/Blog">블로그</Link>
        </li>
        <li>
          <Link to="/Project">프로젝트</Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
