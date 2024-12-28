export function SoftwareItem({theme,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`software/${children}.svg`} />
        </div>
    );
}