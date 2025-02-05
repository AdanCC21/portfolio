import './css/home.css'
import './css/experience.css'
import './css/moreAboutMe.css'

import { Item } from './components/Item';
import { SoftwareItem } from './components/SoftwareItem';
import { useRef } from 'react';
import { PrevProject } from './components/PrevProject';
import { ExperienceItem } from './components/ExperienceItem';

export function NewHome({ theme, setTheme, setProject }) {
    const target = useRef(null);

    const goDown = () => {
        target.current.scrollIntoView({ behavior: 'smooth' });

    }

    function whiteOrDark() {
        if (theme) {
            return 'white'
        }
        return 'dark'
    }

    return (
        <div className='dark-mode'>
            <main className={`home ${whiteOrDark()}`}>
                <img className='home-picture ' src="traje.png" />
                <div className={`line ${whiteOrDark()} `}></div>

                <h1 className='mobile-title'><strong>Adan Gonzalez</strong></h1>
                <h1 className='pc-title'>Hola, soy <strong>Adan Gonzalez</strong></h1>
                <h3 >Ingeniero en Software y Editor de Videos</h3>
                <img onClick={goDown} src={`icon/${whiteOrDark()}/arrowDown.png`} className='arrow' />
                <section className='social-media-home  '>
                    <a href='https://www.instagram.com/adan_gcm' target='blank'>
                        <img src={theme ? `social/white/instagram.png` : `social/dark/instagram.png`}></img>
                    </a>
                    <a href='https://github.com/AdanCC21' target='blank'>
                        <img src={theme ? `social/white/github.png` : `social/dark/github.png`}></img>
                    </a>
                    <a href='mailto:adancorp.gemial@gmail.com'>
                        <img src={theme ? `social/white/gmail.png` : `social/dark/gmail.png`}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338/' target='blank'>
                        <img src={theme ? `social/white/linkedin.png` : `social/dark/linkedin.png`}></img>
                    </a>

                </section>
            </main>

            <section ref={target} className='pp-father'>
                <section>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h1>Proyectos</h1>
                </section>
                <PrevProject imageName={'wolfForest'} title={"Wolf Forest"} description={"Una página web donde puedes jugar a un juego similar a los juegos del hambre."} goTo={setProject} />
                <PrevProject imageName={'cookingHub'} title={"Cooking Hub"} description={"Una aplicación móvil que te genera recetas mediante la IA de Open IA."} goTo={setProject} />
                <PrevProject imageName={'petCare'} title={"Pet Care"} description={"Una página web dedicada al cuidado de las mascotas, apoyando al dueño con un registro diario.."} goTo={setProject} />
                <PrevProject imageName={'pooyecto'} title={"Pooyecto"} description={"El juego de las serpientes y esclareas, en una aplicación de escritorio."} goTo={setProject} />
            </section>

            <section className='exp-father'>
                <section>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h1>Experiencia</h1>
                </section>
                <ExperienceItem first={true} imageName={"page"} strong={"Frontend"} description={"El mejor rol en el que me desempeño, ya que en el 80% de los proyectos que he realizado dentro de la universidad, mi principal responsabilidad ha sido diseñar el Frontend de los mismos."} />

                <ExperienceItem imageName={"iphone"} strong={"Desarrollo móvil"} description={"Junto a un equipo de mi salón, desarrollamos una aplicación móvil funcional en solo dos meses. En este proyecto, mi rol principal fue el de Frontend y diseño, aunque también participé como auxiliar en el Backend, en la planeacion de funcionalidades futuras y levantamiento de requerimientos."} />

                <ExperienceItem imageName={"settings"} strong={"Backend"} description={"Quiero aprender más sobre este campo, ya que solo he desarrollado una página con Spring Boot y he sido auxiliar en el Backend de varios proyectos. Sin embargo, siento que puedo adquirir mucho más conocimiento y experiencia"} />

            </section>

            <section className={`tools ${whiteOrDark()}`}>
                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h1>Lenguajes</h1>
                </header>

                <section className='items'>
                    <Item tag={"C"} theme={whiteOrDark()}>c</Item>
                    <Item tag={"C++"} theme={whiteOrDark()}>cpp</Item>
                    <Item tag={"Dart"} theme={whiteOrDark()}>dart</Item>
                    <Item tag={"Python"} theme={whiteOrDark()}>python</Item>
                    <Item tag={"Java"} theme={whiteOrDark()}>java</Item>
                    <Item tag={"JavaScript"} theme={whiteOrDark()}>javascript</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h1>Frameworks / Librerias</h1>
                </header>

                <section className='items'>
                    <Item tag={"Flutter"} theme={whiteOrDark()}>flutter</Item>
                    <Item tag={"React"} theme={whiteOrDark()}>react</Item>
                    <Item tag={"Raylib"} theme={whiteOrDark()}>raylib</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h1>Softwares / Herramientas</h1>
                </header>

                <section className='items'>
                    <SoftwareItem tag={"Git"} theme={whiteOrDark()}>git</SoftwareItem>
                    <SoftwareItem tag={"GitHub"} theme={whiteOrDark()}>github</SoftwareItem>
                    <SoftwareItem tag={"IntelliJ"} theme={whiteOrDark()}>intellij</SoftwareItem>
                    <SoftwareItem tag={"Vs Code"} theme={whiteOrDark()}>visualStudioCode</SoftwareItem>
                    <SoftwareItem tag={"VS"} theme={whiteOrDark()}>visualStudio</SoftwareItem>
                    <SoftwareItem tag={"Premiere"} theme={whiteOrDark()}>premiere</SoftwareItem>
                    <SoftwareItem tag={"Photoshop"} theme={whiteOrDark()}>photoshop</SoftwareItem>
                    <SoftwareItem tag={"Figma"} theme={whiteOrDark()}>figma</SoftwareItem>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h1>Otros</h1>
                </header>

                <section className='items'>
                    <Item tag={"Html"} theme={whiteOrDark()}>html</Item>
                    <Item tag={"Css"} theme={whiteOrDark()}>css</Item>
                </section>
            </section>

            <section className='ma-father'>
                <img className='ma-profile' src="io-lentes.png" />
                <h1>+ Sobre mi</h1>
                <section className='social-media-home  '>
                    <a href='https://www.instagram.com/adan_gcm' target='blank'>
                        <img src={theme ? `social/white/instagram.png` : `social/dark/instagram.png`}></img>
                    </a>
                    <a href='https://github.com/AdanCC21' target='blank'>
                        <img src={theme ? `social/white/github.png` : `social/dark/github.png`}></img>
                    </a>
                    <a href='mailto:adancorp.gemial@gmail.com'>
                        <img src={theme ? `social/white/gmail.png` : `social/dark/gmail.png`}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338/' target='blank'>
                        <img src={theme ? `social/white/linkedin.png` : `social/dark/linkedin.png`}></img>
                    </a>

                </section>
                <p>
                    Soy un estudiante universitario de la Universidad Autónoma de Baja California, estoy estudiando la carrera de ingeniería en Software y Tecnologías Emergentes, planeo graduarme en 2026 y pienso enfocarme en campos como Fronted, Backend, desarrollo de aplicaciones móviles y la creación de Software.
                </p>
                <p>
                    Respecto a la edición, es un hobby que me gusta mucho, para todos mis pedidos me tomo mi tiempo, debido a que la creatividad y las ganas o motivación de editar no son algo que se pueda forzar.
                </p>

            </section>

            <footer className={`footer ${whiteOrDark()}`}>
                <section>
                    <h4>© 2025 Adan Gonzalez Ceseña <br /><br />Correo de contacto adancorp.gemial@gmail.com</h4>

                    <h4>Este sitio fue diseñado con los iconos de la pagina <a href='https://www.flaticon.es'>Flaticon</a> con su respectiva licencia gratis para uso personal o comercial</h4>
                </section>

            </footer>
        </div>
    )
}