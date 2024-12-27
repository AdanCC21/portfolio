import '../css/topbar.css'

export function TopBar({currentPage, setCurrentPage,theme}){
    return (
        <div className='top-bar'>
            <a className={currentPage === 0 ? `selected ${theme}` : ''} onClick={() => setCurrentPage(0)}>Home</a>
            <a className={currentPage === 1 ? `selected ${theme}` : ''}  onClick={() => setCurrentPage(1)}>Projects</a>
            <a className={currentPage === 2 ? `selected ${theme}` : ''}  onClick={() => setCurrentPage(2)}>Editor</a>
            <a className={currentPage === 3 ? `selected ${theme}` : ''}  onClick={() => setCurrentPage(3)}>About Me</a>
        </div>
    );
}