import './css/projects.css'
import { ProjectItem } from './components/ProjectItem';

export function Projects({ theme }) {
    return (
        <div className={`generic-container ${theme}`}>
            <h1>Proyectos</h1>
            <div className={`line ${theme}`}></div>
            <section className='projects-list'>
                <ProjectItem theme={theme} imageName={"cookingHub"} title={"Cooking Hub"} >Una aplicacion de cocina con un chatbot para recibir recetas mediante IA, hecha con Flutter, Mongo DB, Google Cloud y Open IA.</ProjectItem>
                
                <ProjectItem theme={theme} imageName={"pooyecto"} title={"Pooyecto"} >El juego de serpientes y escaleras hecho para pc, con un maximo de 4 jugadores y proximamente multijugador, hecha con C++ y Raylib</ProjectItem>
                
                <ProjectItem theme={theme} imageName={"petCare"} title={"Pet Care"} >Una pagina web dedicada al cuidado de nuestras mascotas, llevando a cabo un registro diario de las actividades de estas mismas, hecha con Html, Css, Asp.net y Bootstrap</ProjectItem>
            </section>
        </div>
    );
}