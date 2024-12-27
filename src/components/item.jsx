export function Item({theme,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`public/lenguage/${children}.svg`} />
        </div>
    );
}