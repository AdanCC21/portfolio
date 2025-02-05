import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./Projects";

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
}