import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// 로컬 개발용: Vite dev 서버에서 /api/velog 처리 (Vercel 환경과 동일 동작)
function velogApiPlugin() {
  return {
    name: "velog-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url.startsWith("/api/velog")) return next()

        const urlObj = new URL(req.url, "http://localhost")
        const username = urlObj.searchParams.get("username")
        const slug = urlObj.searchParams.get("slug")
        const cursor = urlObj.searchParams.get("cursor")

        if (!username) {
          res.statusCode = 400
          res.setHeader("Content-Type", "application/json")
          return res.end(JSON.stringify({ error: "username is required" }))
        }

        try {
          const graphqlBody = slug
            ? JSON.stringify({
                query: `query Post($username: String, $url_slug: String) {
                  post(username: $username, url_slug: $url_slug) {
                    id title body tags released_at thumbnail
                  }
                }`,
                variables: { username, url_slug: slug },
              })
            : JSON.stringify({
                query: `query Posts($username: String, $cursor: ID, $limit: Int) {
                  posts(username: $username, cursor: $cursor, limit: $limit) {
                    id title short_description url_slug tags released_at thumbnail
                  }
                }`,
                variables: { username, cursor: cursor || null, limit: 20 },
              })

          const response = await fetch("https://v2.velog.io/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: graphqlBody,
          })
          const data = await response.json()
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify(data))
        } catch {
          res.statusCode = 500
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ error: "Velog API 호출 실패" }))
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), velogApiPlugin()],
  publicDir: "static",
})
