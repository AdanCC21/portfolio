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
                <img alt='Profile Image' className='home-picture ' src="traje.png" />
                <div className={`line ${whiteOrDark()} `}></div>

                <h1 className='mobile-title'><strong>Adan Gonzalez</strong></h1>
                <h1 className='pc-title font-medium'>Hola, soy <strong>Adan Gonzalez</strong></h1>
                <p >Ingeniero en Software y Editor de Videos</p>
                <img alt='go down' onClick={goDown} src={`icon/${whiteOrDark()}/arrowDown.png`} className='arrow' />
                <section className='social-media-home  '>
                    <a href='https://www.instagram.com/adan_gcm' target='blank'>
                        <img alt='instagram' src={theme ? `social/white/instagram.png` : `social/dark/instagram.png`}></img>
                    </a>
                    <a href='https://github.com/AdanCC21' target='blank'>
                        <img alt='github' src={theme ? `social/white/github.png` : `social/dark/github.png`}></img>
                    </a>
                    <a href='mailto:adancorp.gemial@gmail.com'>
                        <img alt='Gmail' src={theme ? `social/white/gmail.png` : `social/dark/gmail.png`}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338/' target='blank'>
                        <img alt='linkedin' src={theme ? `social/white/linkedin.png` : `social/dark/linkedin.png`}></img>
                    </a>

                </section>
            </main>

            <section ref={target} className='pp-father'>
                <section>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h2>Proyectos</h2>
                </section>
                <PrevProject imageName={'wolfForest'} title={"Wolf Forest"} description={"Una página web donde puedes jugar a un juego similar a los juegos del hambre."} goTo={setProject} />
                <PrevProject imageName={'cookingHub'} title={"Cooking Hub"} description={"Una aplicación móvil que te genera recetas mediante la IA de Open IA."} goTo={setProject} />
                <PrevProject imageName={'petCare'} title={"Pet Care"} description={"Una página web dedicada al cuidado de las mascotas, apoyando al dueño con un registro diario.."} goTo={setProject} />
                <PrevProject imageName={'pooyecto'} title={"Pooyecto"} description={"El juego de las serpientes y esclareas, en una aplicación de escritorio."} goTo={setProject} />
            </section>

            <section className='exp-father'>
                <section>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h2>Experiencia</h2>
                </section>
                <ExperienceItem first={true} imageName={"page"} strong={"Frontend"} description={"El mejor rol en el que me desempeño, ya que en el 80% de los proyectos que he realizado dentro de la universidad, mi principal responsabilidad ha sido diseñar el Frontend de los mismos."} />

                <ExperienceItem imageName={"iphone"} strong={"Desarrollo móvil"} description={"Junto a un equipo de mi salón, desarrollamos una aplicación móvil funcional en solo dos meses. En este proyecto, mi rol principal fue el de Frontend y diseño, aunque también participé como auxiliar en el Backend, en la planeacion de funcionalidades futuras y levantamiento de requerimientos."} />

                <ExperienceItem imageName={"settings"} strong={"Backend"} description={"Quiero aprender más sobre este campo, ya que solo he desarrollado una página con Spring Boot y he sido auxiliar en el Backend de varios proyectos. Sin embargo, siento que puedo adquirir mucho más conocimiento y experiencia"} />

            </section>

            <section className={`tools ${whiteOrDark()}`}>
                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h2 className=''>Lenguajes</h2>
                </header>

                <section className='items'>
                    <Item tag={"C"}  theme={whiteOrDark()}>c</Item>
                    <Item tag={"C++"}  theme={whiteOrDark()}>cpp</Item>
                    <Item tag={"Dart"}  theme={whiteOrDark()}>dart</Item>
                    <Item tag={"Python"}  theme={whiteOrDark()}>python</Item>
                    <Item tag={"Java"}  theme={whiteOrDark()}>java</Item>
                    <Item tag={"JavaScript"}  theme={whiteOrDark()}>javascript</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h2>Frameworks / Librerias</h2>
                </header>

                <section className='items'>
                    <Item tag={"Flutter"}  theme={whiteOrDark()}>flutter</Item>
                    <Item tag={"React"}  theme={whiteOrDark()}>react</Item>
                    <Item tag={"Tailwind"}  theme={whiteOrDark()}>tailwind</Item>
                    <Item tag={"Raylib"}  theme={whiteOrDark()}>raylib</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h2>Softwares / Herramientas</h2>
                </header>

                <section className='items'>
                    <SoftwareItem  tag={"Git"} theme={whiteOrDark()}>git</SoftwareItem>
                    <SoftwareItem  tag={"GitHub"} theme={whiteOrDark()}>github</SoftwareItem>
                    <SoftwareItem  tag={"IntelliJ"} theme={whiteOrDark()}>intellij</SoftwareItem>
                    <SoftwareItem  tag={"Android Studio"} theme={whiteOrDark()}>androidStudio</SoftwareItem>
                    <SoftwareItem  tag={"Vs Code"} theme={whiteOrDark()}>visualStudioCode</SoftwareItem>
                    <SoftwareItem  tag={"VS"} theme={whiteOrDark()}>visualStudio</SoftwareItem>
                    <SoftwareItem  tag={"Premiere"} theme={whiteOrDark()}>premiere</SoftwareItem>
                    <SoftwareItem  tag={"Photoshop"} theme={whiteOrDark()}>photoshop</SoftwareItem>
                    <SoftwareItem  tag={"Figma"} theme={whiteOrDark()}>figma</SoftwareItem>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    <h2>Otros</h2>
                </header>

                <section className='items'>
                    <Item tag={"Html"}  theme={whiteOrDark()}>html</Item>
                    <Item tag={"Css"} theme={whiteOrDark()}>css</Item>
                </section>
            </section>

            <section className='ma-father'>
                <img className='ma-profile' alt='Draw' src="Draw.png" />
                <h2 className='font-semibold'>+ Sobre mi</h2>
                <section className='social-media-home  '>
                    <a href='https://www.instagram.com/adan_gcm' target='blank'>
                        <img alt='instagram' src={theme ? `social/white/instagram.png` : `social/dark/instagram.png`}></img>
                    </a>
                    <a href='https://github.com/AdanCC21' target='blank'>
                        <img alt='github' src={theme ? `social/white/github.png` : `social/dark/github.png`}></img>
                    </a>
                    <a href='mailto:adancorp.gemial@gmail.com'>
                        <img alt='gmail' src={theme ? `social/white/gmail.png` : `social/dark/gmail.png`}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338/' target='blank'>
                        <img alt='linkedin' src={theme ? `social/white/linkedin.png` : `social/dark/linkedin.png`}></img>
                    </a>

                </section>
                <p >
                    Soy un estudiante de la <strong>Universidad Autónoma de Baja California</strong>, estoy estudiando la carrera de Ingeniero en Software y Tecnologías Emergentes, planeo graduarme en 2026 y pienso enfocarme en campos como <strong>Fronted, Backend y Aplicaciones móviles.</strong>
                    <br/>
                    <br/>
                    Me considero como un desarrollador <strong>entusiasmado a aprender</strong>, me gusta expandir mis conocimientos con nuevos Lenguajes, Frameworks, Proyectos, etc.
                </p>

            </section>

            <footer className={`footer ${whiteOrDark()}`}>
                <section>
                    <span>© 2025 Adan Gonzalez Ceseña <br /><br />Correo de contacto adancorp.gemial@gmail.com</span>

                    <span>Este sitio fue diseñado con los iconos de la pagina <a href='https://www.flaticon.es'>Flaticon</a> con su respectiva licencia gratis para uso personal o comercial</span>
                </section>
            </footer>
        </div>
    )
}