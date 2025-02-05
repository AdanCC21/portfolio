import { useEffect, useState } from 'react';
import './css/projects.css'
import { useNavigate } from 'react-router-dom';

const cookingHub = ['cookingHub', 'Cooking Hub',
    'Una aplicación de cocina para dispositivos móviles cuya función más destacada es la generación de recetas mediante inteligencia artificial. Al proporcionar una lista de ingredientes, recibirás una receta personalizada que utiliza esos mismos ingredientes. Además, incluye otras funcionalidades, como guardar recetas, acceder a tutoriales de cocina, marcar ingredientes favoritos y más.',
    ['dart', 'flutter', 'openIa'], 6]

const pooyecto = ['pooyecto', 'Pooyecto',
    'El juego de serpientes y escaleras para computadora es un proyecto universitario diseñado para practicar el paradigma de la Programación Orientada a Objetos (POO). Como de costumbre, me encargué de diseñar el Frontend y colaboré en la programación de la lógica detrás de la selección de personajes, los turnos y la determinación del ganador.',
    ['cpp', 'raylib'], 3];

const petCare = ['petCare', 'PetCare',
    'Una página web diseñada para el cuidado de mascotas, donde los usuarios pueden llevar un registro detallado de cada una de ellas. La plataforma incluye secciones como historial médico, actividades diarias y registro de vacunas. Además, permite que cada usuario administre múltiples mascotas de forma sencilla.',
    ['asp.net', 'html', 'css'], 1]

const wolf = ['wolfForest', 'Wolf Forest',
    'Una página web que presenta un juego por rondas, donde los jugadores que definamos se enfrentan entre sí para alcanzar el podio. Cada movimiento es crucial, y la fuerza, la inteligencia y la suerte desempeñan un papel fundamental en cada ronda. Durante el día, los jugadores recolectan recursos y se preparan, durante la noche, se refugian en sus bases y se defienden de otros participantes para sobrevivir.',
    ['react', 'html', 'css'], 1]


export function Projects({ theme, current = cookingHub }) {

    let [spawn, setSpawn] = useState('');
    let [project, setProject] = useState(cookingHub);
    let [selected, setSel] = useState([false, false, false, false]);

    const navigate = useNavigate();

    useEffect(() => {
        switch (current) {
            case 'cookingHub':
                setSel([true, false, false, false])
                setProject(cookingHub);
                break;
            case 'pooyecto':
                setSel([false, true, false, false])
                setProject(pooyecto);
                break;
            case 'wolfForest':
                setSel([false, false, false, true])
                setProject(wolf);
                break;
            case 'petCare':
                setSel([false, false, true, false])
                setProject(petCare);
                break;
            default:
                setSel([true, false, false, false])
                setProject(cookingHub);
                break;
        }
    }, [])

    const changeImage = (index) => {
        setSpawn('')
        setTimeout(() => {
            switch (index) {
                case 1:
                    setSel([true, false, false, false])
                    setProject(cookingHub);
                    break;
                case 2:
                    setSel([false, true, false, false])
                    setProject(pooyecto);
                    break;
                case 3:
                    setSel([false, false, true, false])
                    setProject(petCare);
                    break;
                case 4:
                    setSel([false, false, false, true])
                    setProject(wolf);
                    break;
                default:
                    setSel([true, false, false, false])
                    setProject(cookingHub);
                    break;
            }
            setSpawn('fade-out')
        }, 10)
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
            <div className={`p-evidence ${whiteOrDark()}`}>
                {array.map((current, index) => (
                    <img src={`project/${project[0] + current}.png`}></img>
                ))}
            </div>
        )
    }

    function whiteOrDark() {
        if (theme) {
            return 'white'
        }
        return 'dark'
    }

    return (
        <div className={`p-container dark-mode`}>
            
            <img className='go-back' src={`icon/${whiteOrDark()}/arrowDown.png`} onClick={()=>{
                navigate('/');
            }}></img>

            <section className='p-list'>
                <h1>Proyectos</h1>
                <article className={`p-list-item ${whiteOrDark()} ${selected[0] ? 'current' : ''}`} onClick={() => changeImage(1)}>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>Cooking Hub
                </article>
                <article className={`p-list-item ${whiteOrDark()} ${selected[3] ? 'current' : ''}`} onClick={() => changeImage(4)}>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    Wolf Forest
                </article>
                <article className={`p-list-item ${whiteOrDark()} ${selected[1] ? 'current' : ''}`} onClick={() => changeImage(2)}>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    Pooyecto
                </article>
                <article className={`p-list-item ${whiteOrDark()} ${selected[2] ? 'current' : ''}`} onClick={() => changeImage(3)}>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
                    Pet Care
                </article>

            </section>
            <section className={`p-selected ${spawn}`}>
                <div className='p-title'>
                    <div className={`vertical-line ${whiteOrDark()}`}></div>
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
