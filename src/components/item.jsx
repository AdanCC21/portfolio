export function Item({children}){
    return(
        <div>
            <img src={`public/lenguage/${children}.svg`} />
        </div>
    );
}