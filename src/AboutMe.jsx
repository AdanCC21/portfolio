import './css/about.css'

export function AboutMe({ theme }) {

    return (
        <div className={`about-container`}>
            <section className='about-c2'>
                <section className='ab-info'>
                    <header>
                        <h1>Sobre Mi</h1>
                        <div className={`line ${theme}`}></div>
                    </header>
                    <p>
                        Soy un estudiante universitario de la Universidad Autónoma de Baja California, estoy estudiando la carrera de ingeniería en Software y Tecnologías Emergentes, planeo graduarme en 2026 y pienso enfocarme en campos como Fronted, Backend, desarrollo de aplicaciones móviles y la creación de Software.<br /><br />

                        Respecto a la edición, es un hobby que me gusta mucho, para todos mis pedidos me tomo mi tiempo, debido a que la creatividad y sobre todo las ganas o motivación de editar no son algo que se pueda forzar.</p>
                </section>
                <img src='informal.jpg' className='ab-image'></img>
            </section>
            
            <section className='social-media'>
                <a href='https://www.instagram.com/adan_gcm' target='blank'>
                    <img src={theme === 'dark' ? `social/dark/instagram.png` : `social/white/instagram.png`}></img>
                </a>
                <a href='https://github.com/AdanCC21' target='blank'>
                    <img src={theme === 'dark' ? `social/dark/github.png` : `social/white/github.png`}></img>
                </a>
                <a href='mailto:adangzcs.gemial@gmail.com'>
                    <img src={theme === 'dark' ? `social/dark/gmail.png` : `social/white/gmail.png`}></img>
                </a>
                <a href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338/' target='blank'>
                    <img src={theme === 'dark' ? `social/dark/linkedin.png` : `social/white/linkedin.png`}></img>
                </a>

            </section>
        </div>
    );
}