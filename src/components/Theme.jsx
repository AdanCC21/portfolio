export function Theme({currentMode, setCurrentMode}){
    // SET DARK MODE
    let mode = '';
    if(currentMode === false){
        mode='darkMode'
    }else{
        mode = 'whiteMode'
    }
    return(
        <div className="theme">
            <img src={`portfolio/icon/${mode}.png`} onClick={()=> setCurrentMode(!currentMode)}></img>
        </div>
    );
}