import './css/projects.css'
import { ProjectItem } from './components/ProjectItem';

export function Projects({ theme }) {
    return (
        <div className={`projects-container ${theme}`}>
            <h1>Proyectos</h1>
            <div className={`line ${theme}`}></div>
            <section className='projects-list'>
                <ProjectItem array={["dart","flutter","openia"]} theme={theme} imageName={"cookingHub"} title={"Cooking Hub"} link={"https://github.com/diegovq12/CookingHub"} >Una aplicación de cocina con un chatbot para recibir recetas mediante IA.</ProjectItem>
                
                <ProjectItem array={["cpp","raylib"]} theme={theme} imageName={"pooyecto"} title={"Pooyecto"} link={"https://github.com/Anrago/POOyecto"}>El juego de serpientes y escaleras hecho para pc, con un máximo de 4 jugadores y próximamente multijugador.</ProjectItem>
                
                <ProjectItem array={["asp.net"]} theme={theme} imageName={"petCare"} title={"Pet Care"} >Una página web dedicada al cuidado de nuestras mascotas, llevando a cabo un registro diario de las actividades de estas mismas.</ProjectItem>
            </section>
        </div>
    );
}