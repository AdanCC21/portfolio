export function EditorDetails({ theme ,title,imageName,children}) {
    return (
        <section className={`details ${theme}`}>
            <header>
                <div className='details-title'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h2>{title}</h2>
                </div>
                <img src={theme === 'dark' ? `portfolio/icon/dark/${imageName}.png` : `portfolio/icon/white/${imageName}.png`}/>
            </header>
            <data className='details-info'>
                <div className={`vertical-line ${theme}`}></div>
                <p>{children}</p>
            </data>
        </section>
    );
}