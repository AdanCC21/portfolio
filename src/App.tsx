// import React from 'react'
import Header from "./components/Header"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import line from './assets/decoration/line.svg';
import line2 from './assets/decoration/line2.svg';
import { easeInOut, motion } from 'framer-motion';
import { useRef } from "react"

export default function App() {
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollTo = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden">

      <Header projectRef={projectRef} skillRef={skillsRef} aboutRef={aboutRef} goTo={scrollTo} />
      <Home skillsRef={skillsRef} goTo={scrollTo} />

      <img src={line} className="px-[15vw] my-5" />
      <div ref={skillsRef}>
        <Skills />
      </div>

      <img src={line2} className="px-[10vw] my-5" />
      <div ref={projectRef}>
        <Projects />
      </div>

      <img src={line} className="px-[15vw] my-5" />

      <motion.div ref={aboutRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeInOut }}
        viewport={{ amount: 0.25, once: true }}
      >
        <AboutMe />
      </motion.div>
    </div>
  )
}
