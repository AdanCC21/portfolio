import './css/projects.css'
import { ProjectItem } from './components/ProjectItem';

export function Projects({ theme }) {
    return (
        <div className={`generic-container ${theme}`}>
            <h1>Projects</h1>
            <div className={`line ${theme}`}></div>
            <section className='projects-list'>
                <ProjectItem theme={theme} imageName={"cookingHub"} title={"Cooking Hub"} >Una aplicacion de cocina rapida y sencilla</ProjectItem>
                
                <ProjectItem theme={theme} imageName={"pooyecto"} title={"Pooyecto"} >El juego de serpientes y escaleras hecho para pc, con un maximo de 4 jugadores y proximamente multijugador</ProjectItem>
                
                <ProjectItem theme={theme} imageName={"petCare"} title={"Pet Care"} >Una aplicacion dedicada al cuidado de nuestras mascotas, cuenta con una aplicacion para escritorio y una pagina web</ProjectItem>
            </section>
        </div>
    );
}