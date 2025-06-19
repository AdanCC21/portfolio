// import React from 'react'
import Header from "./components/Header"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import line from './assets/decoration/line.svg';
import line2 from './assets/decoration/line2.svg';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Home />
      <img src={line} className="px-[15vw] my-5"/>
      <Skills />
      <img src={line2} className="px-[10vw] my-5"/>
      <Projects />
      <img src={line} className="px-[15vw] my-5"/>
      <AboutMe />
    </div>
  )
}
