// import React from 'react'
import Header from "./components/Header"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <Home />
      <Skills />
      <Projects />
      <AboutMe />
    </div>
  )
}
