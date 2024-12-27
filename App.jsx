import { useState, useTransition } from "react";
import { TopBar } from "./components/TopBar";
import { Home } from "./Home";
import { Theme } from "./components/Theme";

let theme = 'dark';
export function App({}){
    let [currentPage, setCurrentPage] = useState(0);
    let [whiteMode, setWhiteMode] = useState(false);
    
    if (whiteMode){
        theme = 'white';
    }else{
        theme = 'dark'
    }
    
    return (
        <div>
            <TopBar theme={theme} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Theme currentMode={whiteMode} setCurrentMode={setWhiteMode}></Theme>
            <Home theme={theme}/>
        </div>
    );
}