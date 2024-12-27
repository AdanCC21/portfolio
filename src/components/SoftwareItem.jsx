export function SoftwareItem({theme,children}){
    return(
        <div className={`one-item ${theme}`}>
            <img src={`public/software/${children}.svg`} />
        </div>
    );
}