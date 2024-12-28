

export function Item({theme,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`lenguage/${children}.svg`} />
        </div>
    );
}