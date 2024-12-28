import './css/projects.css'
import { ProjectItem } from './components/ProjectItem';

export function Projects({ theme }) {
    return (
        <div className={`generic-container ${theme}`}>
            <h1>Proyectos</h1>
            <div className={`line ${theme}`}></div>
            <section className='projects-list'>
                <ProjectItem theme={theme} imageName={"cookingHub"} title={"Cooking Hub"} link={"https://github.com/diegovq12/CookingHub"} >Una aplicación de cocina con un chatbot para recibir recetas mediante IA, hecha con Flutter, Mongo DB, Google Cloud y Open IA.</ProjectItem>
                
                <ProjectItem theme={theme} imageName={"pooyecto"} title={"Pooyecto"} link={"https://github.com/Anrago/POOyecto"}>El juego de serpientes y escaleras hecho para pc, con un máximo de 4 jugadores y próximamente multijugador, hecha con C++ y Raylib</ProjectItem>
                
                <ProjectItem theme={theme} imageName={"petCare"} title={"Pet Care"} >Una página web dedicada al cuidado de nuestras mascotas, llevando a cabo un registro diario de las actividades de estas mismas, hecha con Html, Css, Asp.net y Bootstrap</ProjectItem>
            </section>
        </div>
    );
}