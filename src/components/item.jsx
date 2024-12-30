

export function Item({theme,tag,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`lenguage/${children}.svg`} />
            <h3>{tag}</h3>
        </div>
    );
}