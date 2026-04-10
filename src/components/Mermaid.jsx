import React, { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
})

let idCounter = 0

export default function Mermaid({ chart }) {
  const ref = useRef(null)
  const [svg, setSvg] = useState("")

  useEffect(() => {
    const id = `mermaid-${idCounter++}`
    mermaid.render(id, chart).then(({ svg }) => {
      setSvg(svg)
    })
  }, [chart])

  return (
    <div
      ref={ref}
      className="my-4 overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
