import * as React from "react"

function Seo({ description, title }) {
  const defaultTitle = "임정빈"
  const metaDescription = description || "개발자 임정빈 포트폴리오"
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
    </>
  )
}

export default Seo
