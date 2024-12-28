export function SoftwareItem({theme,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`portfolio/software/${children}.svg`} />
        </div>
    );
}