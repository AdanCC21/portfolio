import { useState } from "react";
import Tab from "../components/Tab";
import LanguageItem from "../components/LanguageItem";

import index1 from '../assets/decoration/index1.svg';
import index2 from '../assets/decoration/index2.svg';
import index3 from '../assets/decoration/index3.svg';

import code from '../assets/decoration/itemShortBottom.svg';
import goTo from '../assets/decoration/itemMediumBottom.svg';

interface project {
    title: string,
    imageName: string,
    date: string,
    description: string,
    whatIDo: string,
    tools: Array<string>,
    examplesCount: number,
    likedLevel: number
}

const wolfForest: project = {
    title: "Wolf Forest",
    imageName: "wolfforest",
    date: "10-28-25",
    description: "Es una pagina web donde puedes colocar a tus personajes fictisios y ponerlos a luchar en una batalla campal. Habra varios dias y noches con eventos especiales como muertes, asesinatos, recoleccion de items, etc.",
    whatIDo: "Yo lleve a cabo todo este proyecto, fue un proyecto de vacaciones para aprender JavaScript y para ser mi primera pagina web, no esta mal. Estoy pensando en refactorizar este codigo y pasarlo a TypeScript.",
    tools: ['React', 'JavaScript'],
    examplesCount: 3,
    likedLevel: 2
}

const actOne: project = {
    title: "Act One",
    imageName: "actone",
    date: "20-01-25",
    description: "Una red social donde puedes compartir historias y/o chismes, esta pagina surgio de 2 ideas principales, 1ra es que los usuarios puedan compartir sus anectodas en un formato de actos, y la 2da es facilitar a los creadores de contenido con un modo 'concentracion', que este muestra la historia parrafo por parrafo sin distracciones alrededor.",
    whatIDo: "Yo lleve a cabo todo el proyecto, desde la idea, la planeacion, diseño, backend, frontend y base de datos",
    tools: ['React', 'JavaScript', 'TypeScript', 'tailwindcss', 'NestJS'],
    examplesCount: 3,
    likedLevel: 3
}

const cookingHub: project = {
    title: "Cooking Hub",
    imageName: "cookinghub",
    date: "05-12-24",
    description: "Una aplicación de cocina para dispositivos móviles cuya función más destacada es la generación de recetas mediante inteligencia artificial. Al proporcionar una lista de ingredientes, recibirás una receta personalizada que utiliza esos mismos ingredientes. Además, incluye otras funcionalidades, como guardar recetas, acceder a tutoriales de cocina, marcar ingredientes favoritos y más.",
    whatIDo: "Fui el encargado del Diseño y Frontend, ademas fui auxiliar en Backend y en la planeacion del proyecto.",
    tools: ['Dart', 'Flutter'],
    examplesCount: 3,
    likedLevel: 1
}

export default function Projects() {
    let [currentProject, setCurrentProject] = useState<project>(wolfForest);
    let [currentExample, setExample] = useState(1);

    const getIndex = () => {
        let items: number[] = [];
        for (let i = 1; i <= currentProject.examplesCount; i++) {
            items.push(i);
        }

        return (
            <div className="flex mt-3">
                {items.map((current) => {
                    let image = index1;
                    if (current === 2) image = index2;
                    if (currentExample === current) {
                        return (
                            <img src={index3} alt="index" className="mx-1 cursor-pointer"
                                onClick={() => { setExample(current) }} />
                        );
                    }
                    return (
                        <img src={image} alt="index" className="mx-1 cursor-pointer"
                            onClick={() => { setExample(current) }} />
                    );
                })}
            </div>)
    }

    return (
        <div className="mx-[10vw] h-screen py-[5vh] overflow-hidden">
            <div className="relative">
                <h1 className="mb-3">Projects</h1>
                <img src='draws/Laptop.png' className='h-[180px] w-fit absolute top-0 right-0' />
                <section className="flex pl-2 h-200px border-b-2 border-black">
                    <Tab imageName={wolfForest.imageName} title={wolfForest.title} isActive={currentProject === wolfForest} click={() => { setCurrentProject(wolfForest) }} />
                    <Tab imageName={actOne.imageName} title={actOne.title} isActive={currentProject === actOne} click={() => { setCurrentProject(actOne) }} />
                    <Tab imageName={cookingHub.imageName} title={cookingHub.title} isActive={currentProject === cookingHub} click={() => { setCurrentProject(cookingHub) }} />

                </section>
            </div>
            <section className="flex w-full h-full pb-[10vh]">
                <div className="flex flex-col w-2/3 h-full mt-3">
                    <div>
                        <h2>{currentProject.title}</h2>
                        <span className="text-[#838383]">{currentProject.date}</span>
                    </div>
                    <div className="mb-3">
                        <p className="mb-3"><strong>Project description: </strong>{currentProject.description}</p>
                        <p className="mt-3"><strong>My role: </strong>{currentProject.whatIDo}</p>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(30px,_70px))] gap-5">
                        {currentProject.tools.map((current, index) => {
                            let image = current.toLowerCase();
                            return (<LanguageItem key={`p-${index}`} imageSource={`./icons/languages/${image}.svg`} small={true} title={current} />)
                        })}
                    </div>
                </div>

                <div className="flex flex-col w-1/2 h-full items-center justify-center relative">
                    <div className="flex flex-col items-center justify-center h-full pl-4 ">
                        <img className="rounded-md max-h-full max-w-full w-fit h-fit" src={`examples/${currentProject.imageName.toLowerCase()}/${currentExample}.jpg`} />
                        {getIndex()}
                        <div className="flex ml-auto mt-5">
                            <div className="mr-5 cursor-pointer">
                                <p>Code</p>
                                <img className="mx-auto" src={code} alt="decoration" />
                            </div>
                            <div className="cursor-pointer">
                                <p>Go To {'- >'}</p>
                                <img className="w-fit" src={goTo} alt="decoration" />
                            </div>
                        </div>
                    </div>
                    {currentProject.likedLevel === 1 ? (
                        <img src='draws/Nojado.png' className='h-[100px] w-fit absolute bottom-20 left-0' />) :
                        (<> {currentProject.likedLevel === 2 ?
                            (<img src='draws/Like.png' className='h-[100px] w-fit absolute bottom-20 left-0' />)
                            : (<img src='draws/Cafe.png' className='h-[110px] w-fit absolute bottom-20 left-0' />)}
                        </>)}
                </div>

            </section>
        </div>
    )
}
