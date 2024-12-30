import '../css/topbar.css'

export function TopBar({currentPage, setCurrentPage,theme}){
    return (
        <div className='top-bar'>
            <section>
                <a className={currentPage === 0 ? `selected ${theme}` : ''} onClick={() => setCurrentPage(0)}>Inicio</a>
                <a className={currentPage === 1 ? `selected ${theme}` : ''}  onClick={() => setCurrentPage(1)}>Proyectos</a>
                <a className={currentPage === 2 ? `selected ${theme}` : ''}  onClick={() => setCurrentPage(2)}>Sobre Mi</a>
            </section>
        </div>
    );
}