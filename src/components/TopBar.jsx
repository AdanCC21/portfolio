import '../css/topbar.css'

export function TopBar({currentPage, setCurrentPage}){
    return (
        <div className='top-bar'>
            {console.log(currentPage)}
            <a className={currentPage === 0 ? 'selected' : ''} onClick={() => setCurrentPage(0)}>Home</a>
            <a className={currentPage === 1 ? 'selected' : ''}  onClick={() => setCurrentPage(1)}>Projects</a>
            <a className={currentPage === 2 ? 'selected' : ''}  onClick={() => setCurrentPage(2)}>Editor</a>
            <a className={currentPage === 3 ? 'selected' : ''}  onClick={() => setCurrentPage(3)}>About Me</a>
        </div>
    );
}