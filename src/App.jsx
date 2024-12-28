import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Theme } from "./components/Theme";
import { Home } from "./Home";
import { Projects } from "./Projects";
import { Editor } from "./Editor";
import { AboutMe } from "./AboutMe";

let theme = 'dark';
export function App({}){
    let [currentPage, setCurrentPage] = useState(0);
    let [whiteMode, setWhiteMode] = useState(false);
    
    if (whiteMode){
        theme = 'white';
    }else{
        theme = 'dark';
    }

    const page = ()=>{
        switch (currentPage){
            case 0:
                return <Home theme={theme}/>
            case 1:
                return <Projects theme={theme}/>
            case 2:
                return <Editor theme={theme}/>
            case 3:
                return <AboutMe theme={theme}/>
            default:
                return <Home theme={theme}/>
        }
    }
    
    return (
        <div>
            <TopBar theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Theme currentMode={whiteMode} setCurrentMode={setWhiteMode}></Theme>
            {page()}
        </div>
    );
}