export function SoftwareItem({children}){
    return(
        <div>
            <img src={`public/software/${children}.svg`} />
        </div>
    );
}