// portfolio markdown 파일을 파싱하는 유틸리티
// gray-matter 대신 간단한 파서로 frontmatter 처리

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)/)
  if (!match) return { data: {}, content: raw }

  const yamlStr = match[1]
  const content = match[2]
  const data = {}

  yamlStr.split("\n").forEach(line => {
    const colonIdx = line.indexOf(":")
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    let value = line.slice(colonIdx + 1).trim()

    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    }

    if (value.startsWith("[") && value.endsWith("]")) {
      value = value
        .slice(1, -1)
        .split(",")
        .map(v => v.trim().replace(/^"|"$/g, ""))
        .filter(Boolean)
    }

    data[key] = value
  })

  return { data, content }
}

function filenameToSlug(path) {
  return path
    .split("/")
    .pop()
    .replace(/\.md$/, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
}

export function parsePortfolioFiles() {
  const files = import.meta.glob(
    "../../content/portfolio/*.md",
    { query: "?raw", import: "default", eager: true }
  )

  return Object.entries(files)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw)
      const slug = filenameToSlug(path)
      return { ...data, body: content, slug }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
