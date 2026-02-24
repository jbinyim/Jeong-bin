import React, { useMemo } from "react"
import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import Layout from "../components/layout/layout"
import { parsePortfolioFiles } from "../utils/portfolio"

export default function ProjectPost() {
  const { slug } = useParams()
  const projects = useMemo(() => parsePortfolioFiles(), [])
  const project = projects.find(p => p.slug === slug)

  return (
    <Layout>
      <main className="max-w-200 mx-auto pb-4 px-4">
        <Link
          to="/Project"
          className="inline-block mb-6 text-13-normal text-[#8a8a8a] hover:underline"
        >
          ← 목록으로
        </Link>
        {!project ? (
          <p className="text-13-normal text-[#8a8a8a]">
            프로젝트를 찾을 수 없습니다.
          </p>
        ) : (
          <div className="blog-post">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  if (!inline) {
                    return (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match ? match[1] : "text"}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    )
                  }
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {project.body}
            </ReactMarkdown>
          </div>
        )}
      </main>
    </Layout>
  )
}
