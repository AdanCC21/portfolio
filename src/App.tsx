// import React from 'react'
import Header from "./components/Header"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import line from './assets/decoration/line.svg';
import line2 from './assets/decoration/line2.svg';
import { easeInOut, motion } from 'framer-motion';

export default function App() {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">

      <Header />
      <Home />
      
      <img src={line} className="px-[15vw] my-5" />
      <Skills />

      <img src={line2} className="px-[10vw] my-5" />
      <Projects />
      
      <img src={line} className="px-[15vw] my-5" />
      <motion.div
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
