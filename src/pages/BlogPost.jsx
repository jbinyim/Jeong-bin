import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import Layout from "../components/layout/layout"

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`/api/velog?username=jbinyim12&slug=${slug}`)
      .then(res => res.json())
      .then(data => {
        setPost(data?.data?.post || null)
        setLoading(false)
      })
      .catch(() => {
        setError("포스트를 불러오지 못했습니다.")
        setLoading(false)
      })
  }, [slug])

  return (
    <Layout>
      <main className="max-w-200 mx-auto pb-4 px-4">
        <Link
          to="/Blog"
          className="inline-block mb-6 text-13-normal text-[#8a8a8a] hover:underline"
        >
          ← 목록으로
        </Link>
        {loading && (
          <p className="text-13-normal text-[#8a8a8a]">불러오는 중...</p>
        )}
        {error && <p className="text-13-normal text-[#8a8a8a]">{error}</p>}
        {!loading && !error && post && (
          <div className="blog-post">
            <h1>{post.title}</h1>
            <p className="text-13-normal text-[#b5b6ba] mb-8">
              {post.released_at?.slice(0, 10)}
            </p>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "")
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
              }}
            >
              {post.body}
            </ReactMarkdown>
          </div>
        )}
      </main>
    </Layout>
  )
}
