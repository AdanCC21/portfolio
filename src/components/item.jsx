

export function Item({theme,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`portfolio/lenguage/${children}.svg`} />
        </div>
    );
}