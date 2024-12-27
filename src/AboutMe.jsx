import './css/about.css'

const socialRouteDark = 'portfolio/social/dark/';
const socialRouteWhite = 'portfolio/social/white/';
export function AboutMe({ theme }) {
    return (
        <div className={`generic-container row ${theme}`}>
            <section className='ab-info'>
                <header>
                    <h1>About Me</h1>
                    <div className={`line ${theme}`}></div>
                </header>
                <p>
                    Soy un estudiante universitario de UABC, estoy estudiando una carrera de ingenieria en Software y Tecnologias Emergentes, planeo graduarme en 2026 y conseguir un trabajo enfocado en la programacion, ya sea diseño web, programacion de apps moviles, programas para computadora etc.<br/><br/>

                    Respecto a la edicion, es un hobbie que me gusta mucho, pero a menudo se vuelve tedioso y cansado, por eso suelo aceptar trabajos medianamente ligeros, no me niego a aceptar un trabajo pesado bien pagado, pero para todos mis pedidos me tomo mi tiempo. la creatividad y sobre todo las ganas o motivacion de editar no son algo que se pueda forzar.</p>
            </section>
            <img src='portfolio/io-cat.png' className='ab-image'></img>
            <section className='social-media'>
                <img src={theme==='dark'? `${socialRouteDark}instagram.png`:`${socialRouteWhite}instagram.png` }></img>
                <img src={theme==='dark'? `${socialRouteDark}github.png`:`${socialRouteWhite}github.png` }></img>
                <img src={theme==='dark'? `${socialRouteDark}gmail.png`:`${socialRouteWhite}gmail.png` }></img>
                <img src={theme==='dark'? `${socialRouteDark}linkedin.png`:`${socialRouteWhite}linkedin.png` }></img>
                
            </section>
        </div>
    );
}