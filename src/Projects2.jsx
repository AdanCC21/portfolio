import { useEffect, useState } from 'react';
import './css/projects2.css'

const cookingHub = ['cookingHub', 'Cooking Hub',
    'Una aplicación de cocina para dispositivos móviles cuya función más destacada es la generación de recetas mediante inteligencia artificial. Al proporcionar una lista de ingredientes, recibirás una receta personalizada que utiliza esos mismos ingredientes. Además, incluye otras funcionalidades, como guardar recetas, acceder a tutoriales de cocina, marcar ingredientes favoritos y más.',
    ['dart', 'flutter', 'openIa'], 6]

const pooyecto = ['pooyecto', 'Pooyecto',
    'El juego de serpientes y escaleras para computadora es un proyecto universitario diseñado para practicar el paradigma de la Programación Orientada a Objetos (POO). Como de costumbre, me encargué de diseñar el Frontend y colaboré en la programación de la lógica detrás de la selección de personajes, los turnos y la determinación del ganador.',
    ['cpp', 'raylib'], 3];

const petCare = ['petCare', 'PetCare',
    'Una página web diseñada para el cuidado de mascotas, donde los usuarios pueden llevar un registro detallado de cada una de ellas. La plataforma incluye secciones como historial médico, actividades diarias y registro de vacunas. Además, permite que cada usuario administre múltiples mascotas de forma sencilla.',
    ['asp.net', 'html', 'css'], 1]

export function Projects2({ theme }) {

    let [spawn, setSpawn] = useState('');
    let [project, setProject] = useState(cookingHub);
    let [selected, setSel] = useState([true, false, false]);

    const changeImage = (index) => {
        switch (index) {
            case 1:
                setSpawn('hide')
                setSel([true, false, false])
                setTimeout(() => {
                    setSpawn('show')
                    setProject(cookingHub);
                }, 100);
                break;
            case 2:
                setSpawn('hide')
                setSel([false, true, false])
                setTimeout(() => {
                    setSpawn('show')
                    setProject(pooyecto);
                }, 100);
                break;
            case 3:
                setSpawn('hide')
                setSel([false, false, true])

                setTimeout(() => {
                    setSpawn('show')

                    setProject(petCare);
                }, 100);
                break;
            default:
                setSpawn('hide')
                setSel([true, false, false])
                setTimeout(() => {
                    setSpawn('show')
                    setProject(cookingHub);
                }, 100);
                break;
        }
    }

    const setImages = () => {
        return (
            <div className='p-tools'>
                {project[3].map(
                    (current, index) => (
                        <img src={`lenguage/${project[3][index]}.svg`} alt={`${current}`} />
                    ))
                }
            </div>
        );
    }

    const getExamples = () => {
        let array = [];
        for (let i = 1; i <= project[4]; i++) {
            array.push(i);
        }
        return (
            <div className={`p-evidence ${theme}`}>
                {array.map((current, index) => (
                    <img src={`project/${project[0]+current}.png`}></img>
                ))}
            </div>
        )
    }

    return (
        <div className={`p-container ${theme}`}>
            <section className='p-list'>
                <h1>Proyectos</h1>
                <article className={`p-list-item ${theme} ${selected[0] ? 'current' : ''}`} onClick={() => changeImage(1)}>
                    <div className={`vertical-line ${theme}`}></div>Cooking Hub
                </article>
                <article className={`p-list-item ${theme} ${selected[1] ? 'current' : ''}`} onClick={() => changeImage(2)}>
                    <div className={`vertical-line ${theme}`}></div>
                    Pooyecto
                </article>
                <article className={`p-list-item ${theme} ${selected[2] ? 'current' : ''}`} onClick={() => changeImage(3)}>
                    <div className={`vertical-line ${theme}`}></div>
                    Pet Care
                </article>
                {console.log(selected)}
            </section>
            <section className={`p-selected ${spawn}`}>
                <div className='p-title'>
                    <div className={`vertical-line ${theme}`}></div>
                    <img src={`project/${project[0]}.png`} />
                    <h1>{project[1]}</h1>
                    {setImages()}
                </div>
                <p>{project[2]}</p>
                {getExamples()}
            </section>

        </div>
    );
}
