import './css/home.css'
import { Item } from './components/item';
import { SoftwareItem } from './components/SoftwareItem';
import { useRef } from 'react';

export function Home({ theme }) {

    const target = useRef(null);

    const goDown = () => {
        target.current.scrollIntoView({ behavior: 'smooth' });

    }

    return (
        <div>
            <main className={`home ${theme}`}>
                <img className='home-picture' src="traje.png" />
                <div className={`line ${theme}`}></div>
                <h1>Hola, soy Adan Gonzalez</h1>
                <h3>Ingeniero en Software y Editor de Videos</h3>
                <img onClick={goDown} src={`icon/${theme}/arrowDown.png`} className='arrow' />
            </main>

            <section
                ref={target}
                className={`roles ${theme}`}>
                <h1>Experiencia</h1>
                <section className='roles-item'>
                    <p>El mejor rol en el que me desempeño es <strong>Frontend</strong>, debido a que el casi 80% de los proyectos que he realizado dentro de la universidad mi rol principal siempre ha sido diseñar el <strong>Frontend</strong> de nuestro proyecto.</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/page.png'></img>
                        <h1>Frontend</h1>
                    </div>
                </section>

                <section className='roles-item left'>
                    <p>Dentro del <strong>Backend</strong> no tengo mucha experiencia, pero he sido auxiliar de <strong>Backend</strong> dentro de varios proyectos, e hice todo el backend de una página de ventas usando spring boot.</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/settings.png'></img>
                        <h1>Backend</h1>
                    </div>
                </section>

                <section className='roles-item'>
                    <p>Junto a un equipo de mi salon, hemos desarrollado una aplicación móvil bastante funcional en 2 meses, yo fui principalmente <strong>Frontend</strong>, y auxiliar de <strong>Backend</strong> haciendo no solo el diseño de como se verian las cosas, si no tambien la logica de como se incorporara el contenido a la pantalla</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/iphone.png'></img>
                        <h1>Móvile</h1>
                    </div>
                </section>
            </section>

            <section className={`tools ${theme}`}>
                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Lenguajes</h1>
                </header>

                <section className='items'>
                    <Item theme={theme}>c</Item>
                    <Item theme={theme}>cpp</Item>
                    <Item theme={theme}>dart</Item>
                    <Item theme={theme}>python</Item>
                    <Item theme={theme}>java</Item>
                    <Item theme={theme}>javascript</Item>
                    <Item theme={theme}>html</Item>
                    <Item theme={theme}>css</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>FrameWorks</h1>
                </header>

                <section className='items'>
                    <Item theme={theme}>raylib</Item>
                    <Item theme={theme}>flutter</Item>
                    <Item theme={theme}>react</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Software</h1>
                </header>

                <section className='items'>
                    <SoftwareItem theme={theme}>git</SoftwareItem>
                    <SoftwareItem theme={theme}>github</SoftwareItem>
                    <SoftwareItem theme={theme}>intellij</SoftwareItem>
                    <SoftwareItem theme={theme}>visualStudioCode</SoftwareItem>
                    <SoftwareItem theme={theme}>visualStudio</SoftwareItem>
                    <SoftwareItem theme={theme}>premiere</SoftwareItem>
                    <SoftwareItem theme={theme}>photoshop</SoftwareItem>
                    <SoftwareItem theme={theme}>figma</SoftwareItem>
                </section>
            </section>
            <footer className={`footer ${theme}`}>
                
                <div className={`line ${theme}`}></div>
                <div className='footerCop'>
                    <h4>© 2024 Adan Gonzalez Ceseña</h4>
                    <p>Este sitio fue diseñado y desarrollado por Adan Gonzalez Ceseña utilizando React y las herramientas que este proporciona.
                    </p>
                </div>
                
                <div className={`line ${theme}`}></div>
                <section>
                    <h3>Este sitio fue diseñado con los iconos de la pagina <a href='https://www.flaticon.es'>Flaticon</a> con su respectiva licencia gratis para uso personal o comercial con atribución</h3>
                    
                    <a href="https://www.flaticon.es/iconos-gratis/flecha" title="flecha iconos">Flecha iconos creados por Freepik - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/figma" title="figma iconos">Figma iconos creados por Freepik - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/gmail" title="gmail iconos">Gmail iconos creados por Laisa Islam Ani - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/github" title="github iconos">Github iconos creados por Pixel perfect - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/logotipo-de-instagram" title="logotipo de instagram iconos">Logotipo de instagram iconos creados por Freepik - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/objeto" title="objeto iconos">Objeto iconos creados por Illustraly - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/dinero" title="dinero iconos">Dinero iconos creados por kosonicon - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/acerca-de" title="acerca de iconos">Acerca de iconos creados por Anggara - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/modo-de-luz" title="modo de luz iconos">Modo de luz iconos creados por Fantasyou - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/modo" title="modo iconos">Modo iconos creados por Yogs144 - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/iphone" title="iphone iconos">Iphone iconos creados por Freepik - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/monitor" title="monitor iconos">Monitor iconos creados por Freepik - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/ajustes" title="ajustes iconos">Ajustes iconos creados por Pixel perfect - Flaticon</a>
                    <a href="https://www.flaticon.es/iconos-gratis/linkedin" title="linkedin iconos">Linkedin iconos creados por Google - Flaticon</a>
                </section>
            </footer>
        </div>

    );
}