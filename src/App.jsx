import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { Home } from "./Home";

export function App({}){
    let [currentPage, setCurrentPage] = useState(0);
    
    return (
        <div>
            <TopBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Home/>
        </div>
    );
}