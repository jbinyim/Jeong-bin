export default async function handler(req, res) {
  const { username, slug } = req.query

  if (!username) {
    return res.status(400).json({ error: "username is required" })
  }

  try {
    if (slug) {
      // 단일 포스트 조회
      const response = await fetch("https://v2.velog.io/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query Post($username: String, $url_slug: String) {
              post(username: $username, url_slug: $url_slug) {
                id
                title
                body
                tags
                released_at
                thumbnail
              }
            }
          `,
          variables: { username, url_slug: slug },
        }),
      })
      const data = await response.json()
      return res.json(data)
    } else {
      // 포스트 목록 조회
      const { cursor } = req.query
      const response = await fetch("https://v2.velog.io/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `
            query Posts($username: String, $cursor: ID, $limit: Int) {
              posts(username: $username, cursor: $cursor, limit: $limit) {
                id
                title
                short_description
                url_slug
                tags
                released_at
                thumbnail
              }
            }
          `,
          variables: { username, cursor: cursor || null, limit: 20 },
        }),
      })
      const data = await response.json()
      return res.json(data)
    }
  } catch (error) {
    return res.status(500).json({ error: "Velog API 호출 실패" })
  }
}
