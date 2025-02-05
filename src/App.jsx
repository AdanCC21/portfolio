import { useEffect, useState } from "react";
// import { TopBar } from "./components/TopBar";
// import { Theme } from "./components/Theme";
// import { Home } from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./Projects";
import { AboutMe } from "./AboutMe";

import { NewHome } from "./AllOnePage";

let theme = 'dark';
export function App({}){
    // white mode?
    let [theme, setTheme] = useState(false);
    let [project, setProject] = useState('cookingHub')

    return(
        <Router>
            <Routes>
                <Route path="/" element={<NewHome theme={theme} setTheme={setTheme} setProject={setProject}/>}/>
                <Route path="/projects" element={<Projects theme={theme} setTheme={setTheme} current={project}/>}/>
            </Routes>
        </Router>
    )
    // let [currentPage, setCurrentPage] = useState(0);
    // let [whiteMode, setWhiteMode] = useState(false);
    
    // if (whiteMode){
    //     theme = 'white';
    // }else{
    //     theme = 'dark';
    // }

    // useEffect(()=>{
    //     document.body.className = whiteMode ? 'white-mode':'dark-mode';
    // })

    // const page = ()=>{
    //     switch (currentPage){
    //         case 0:
    //             return <Home theme={theme}/>
    //         case 1:
    //             return <Projects theme={theme}/>
    //         case 2:
    //             return <AboutMe theme={theme}/>
    //         default:
    //             return <Home theme={theme}/>
    //     }
    // }
    
    // return (
    //     <div>
    //         <TopBar theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    //         <Theme currentMode={whiteMode} setCurrentMode={setWhiteMode}></Theme>
    //         {page()}
    //     </div>
    // );
}