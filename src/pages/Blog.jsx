import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/layout/layout"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("/api/velog?username=jbinyim12")
      .then(res => res.json())
      .then(data => {
        setPosts(data?.data?.posts || [])
        setLoading(false)
      })
      .catch(() => {
        setError("포스트를 불러오지 못했습니다.")
        setLoading(false)
      })
  }, [])

  return (
    <Layout>
      <main className="max-w-200 mx-auto py-8 px-2">
        {loading && (
          <p className="text-center text-13-normal text-[#8a8a8a]">
            불러오는 중...
          </p>
        )}
        {error && (
          <p className="text-center text-13-normal text-[#8a8a8a]">{error}</p>
        )}
        {!loading && !error && (
          <>
            <p className="text-center text-20-bold mb-4">
              ({posts.length}) Blogs
            </p>
            <div className="flex flex-col gap-4">
              {posts.map(post => (
                <Link key={post.id} to={`/Blog/${post.url_slug}`}>
                  <figure className="p-1 hover:bg-[#f7f8fa] rounded-sm flex flex-col gap-2">
                    <p className="text-18-bold">{post.title}</p>
                    <p className="text-13-normal text-[#8a8a8a]">
                      {post.short_description}
                    </p>
                    <p className="text-13-normal text-[#b5b6ba]">
                      {post.released_at?.slice(0, 10)}
                    </p>
                  </figure>
                </Link>
              ))}
            </div>
          </>
        )}
      </main>
    </Layout>
  )
}
