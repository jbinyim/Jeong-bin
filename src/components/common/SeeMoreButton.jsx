import { Link } from "gatsby"
import * as React from "react"

export default function SeeMoreButton({ text, link }) {
  return (
    <div className="mt-14 flex items-center justify-center">
      <Link
        to={`/${link}`}
        className="relative overflow-hidden border py-3.5 px-9 rounded-full group"
      >
        <span className="relative z-10 duration-500 group-hover:text-white">
          {text}
        </span>
        <span className="absolute left-0 top-0 h-full w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
      </Link>
    </div>
  )
}
