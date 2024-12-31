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
                
                <h1 className='mobile-title'><strong>Adan Gonzalez</strong></h1>
                <h1 className='pc-title'>Hola, soy <strong>Adan Gonzalez</strong></h1>
                <h3>Ingeniero en Software y Editor de Videos</h3>
                <img onClick={goDown} src={`icon/${theme}/arrowDown.png`} className='arrow' />
                <section className='social-media-home'>
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
            </main>

            <section
                ref={target}
                className={`roles ${theme}`}>
                <h1>Experiencia</h1>
                <section className='roles-item'>
                    <p>El mejor rol en el que me desempeño es el de <strong>Frontend</strong>, ya que en el 80% de los proyectos que he realizado dentro de la universidad, mi principal responsabilidad ha sido diseñar el <strong>Frontend</strong> de los mismos.</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/page.png'></img>
                        <h1>Frontend</h1>
                    </div>
                </section>

                <section className='roles-item left'>
                    <p>Quiero aprender más sobre este campo, ya que solo he desarrollado una página con <strong>Spring Boot</strong> y he sido auxiliar en el <strong>Backend</strong> de varios proyectos. Sin embargo, siento que puedo adquirir mucho más conocimiento y experiencia.</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/settings.png'></img>
                        <h1>Backend</h1>
                    </div>
                </section>

                <section className='roles-item'>
                    <p>Junto a un equipo de mi salón, desarrollamos una <strong>aplicación móvil</strong> funcional en solo dos meses. En este proyecto, mi rol principal fue el de <strong>Frontend</strong>, aunque también participé como auxiliar en el <strong>Backend</strong>.</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/iphone.png'></img>
                        <h1>Desarrollo móvil</h1>
                    </div>
                </section>
            </section>

            <section className={`tools ${theme}`}>
                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Lenguajes</h1>
                </header>

                <section className='items'>
                    <Item tag={"C"} theme={theme}>c</Item>
                    <Item tag={"C++"} theme={theme}>cpp</Item>
                    <Item tag={"Dart"} theme={theme}>dart</Item>
                    <Item tag={"Python"} theme={theme}>python</Item>
                    <Item tag={"Java"} theme={theme}>java</Item>
                    <Item tag={"JavaScript"} theme={theme}>javascript</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Frameworks</h1>
                </header>

                <section className='items'>
                    <Item tag={"Flutter"} theme={theme}>flutter</Item>
                    <Item tag={"React"} theme={theme}>react</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Softwares</h1>
                </header>

                <section className='items'>
                    <SoftwareItem tag={"Git"} theme={theme}>git</SoftwareItem>
                    <SoftwareItem tag={"GitHub"} theme={theme}>github</SoftwareItem>
                    <SoftwareItem tag={"IntelliJ"} theme={theme}>intellij</SoftwareItem>
                    <SoftwareItem tag={"Vs Code"} theme={theme}>visualStudioCode</SoftwareItem>
                    <SoftwareItem tag={"VS"} theme={theme}>visualStudio</SoftwareItem>
                    <SoftwareItem tag={"Premiere"} theme={theme}>premiere</SoftwareItem>
                    <SoftwareItem tag={"Photoshop"} theme={theme}>photoshop</SoftwareItem>
                    <SoftwareItem tag={"Figma"} theme={theme}>figma</SoftwareItem>
                </section>
                
                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Otros</h1>
                </header>

                <section className='items'>
                <Item tag={"Raylib"} theme={theme}>raylib</Item>
                <Item tag={"Html"} theme={theme}>html</Item>
                <Item tag={"Css"} theme={theme}>css</Item>
                </section>
            </section>

            <footer className={`footer ${theme}`}>
                <section>
                    <h4>© 2024 Adan Gonzalez Ceseña <br/><br/>Correo de contacto adancorp.gemial@gmail.com</h4>

                    <h4>Este sitio fue diseñado con los iconos de la pagina <a href='https://www.flaticon.es'>Flaticon</a> con su respectiva licencia gratis para uso personal o comercial</h4>
                </section>

            </footer>
        </div>

    );
}