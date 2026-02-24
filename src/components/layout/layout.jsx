import * as React from "react"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Jeong-bin" />
      <div className="mt-20">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
