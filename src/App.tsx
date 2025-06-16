// import React from 'react'
import Header from "./components/Header"
import lineTopDown from './assets/decoration/lineTopDown.svg'
import Skills from "./pages/Skills"

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      <main className="flex w-screen h-screen">
        <img src="draw.png" alt="Dibujo de yuta" className="h-3/4 object-cover my-auto mx-auto" />
        <article className="flex flex-col w-1/2 my-auto">
          <div className="flex flex-col w-fit">
            <h2 className="ml-auto -my-5">{"</>"}</h2>
            <h1>Adan Gonzalez Ceseña</h1>
          </div>
          <h4><strong>Software Engineer</strong> and <strong>Video Editor</strong></h4>
          <br />
          <p>UABC Student, Frontend Dev, Backend Dev, Video Editor with 4 years experience</p>
        </article>
        <article className="w-30 h-fit absolute right-0 bottom-0 flex overflow-hidden">
          <img src={lineTopDown} alt="decoration 1" className="ml-5" />
        </article>
      </main>

      <Skills />
    </div>
  )
}
