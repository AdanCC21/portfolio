import './css/about.css'

const socialRouteDark = 'portfolio/social/dark/';
const socialRouteWhite = 'portfolio/social/white/';

export function AboutMe({ theme }) {

    return (
        <div className={`generic-container row ${theme}`}>
            <section className='ab-info'>
                <header>
                    <h1>Sobre Mi</h1>
                    <div className={`line ${theme}`}></div>
                </header>
                <p>
                    Soy un estudiante universitario de UABC, estoy estudiando una carrera de ingeniería en Software y Tecnologías Emergentes, planeo graduarme en 2026 y conseguir un trabajo enfocado en la programación, ya sea diseño web, programación de apps móviles, programas para computadora etc.<br /><br />

                    Respecto a la edición, es un hobbie que me gusta mucho, pero a menudo se vuelve tedioso y cansado, por eso suelo aceptar trabajos medianamente ligeros, no me niego a aceptar un trabajo pesado bien pagado, pero para todos mis pedidos me tomo mi tiempo. la creatividad y sobre todo las ganas o motivación de editar no son algo que se pueda forzar.</p>
            </section>
            <img src='portfolio/informal.jpg' className='ab-image'></img>
            
            <section className='social-media'>
                <a href='https://www.instagram.com/adan_gcm' target='blank'>
                    <img src={theme === 'dark' ? `${socialRouteDark}instagram.png` : `${socialRouteWhite}instagram.png`}></img>
                </a>
                <a href='https://github.com/AdanCC21' target='blank'>
                    <img src={theme === 'dark' ? `${socialRouteDark}github.png` : `${socialRouteWhite}github.png`}></img>
                </a>
                <a href='mailto:adangzcs.gemial@gmail.com'>
                    <img src={theme === 'dark' ? `${socialRouteDark}gmail.png` : `${socialRouteWhite}gmail.png`}></img>
                </a>
                <a href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338/' target='blank'>
                    <img src={theme === 'dark' ? `${socialRouteDark}linkedin.png` : `${socialRouteWhite}linkedin.png`}></img>
                </a>

            </section>
        </div>
    );
}