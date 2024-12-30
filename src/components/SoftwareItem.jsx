export function SoftwareItem({theme, tag,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`software/${children}.svg`} />
            <h3>{tag}</h3>
        </div>
    );
}