import React from "react"
import { Routes, Route } from "react-router-dom"
import IndexPage from "./pages/index"
import Blog from "./pages/Blog"
import BlogPost from "./pages/BlogPost"
import Project from "./pages/Project"
import ProjectPost from "./pages/ProjectPost"
import Introduce from "./pages/Introduce"
import Skill from "./pages/Skill"
import NotFound from "./pages/404"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Blog/:slug" element={<BlogPost />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Project/:slug" element={<ProjectPost />} />
      <Route path="/Introduce" element={<Introduce />} />
      <Route path="/Skill" element={<Skill />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
