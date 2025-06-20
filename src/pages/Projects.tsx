import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from 'framer-motion';
import Tab from "../components/Tab";
import LanguageItem from "../components/LanguageItem";

import index1 from '../assets/decoration/index1.svg';
import index2 from '../assets/decoration/index2.svg';
import index3 from '../assets/decoration/index3.svg';

import code from '../assets/decoration/itemShortBottom.svg';
import goTo from '../assets/decoration/itemMediumBottom.svg';
import { useNavigate } from "react-router";

interface project {
    title: string,
    imageName: string,
    date: string,
    description: string,
    whatIDo: string,
    tools: Array<string>,
    examplesCount: number,
    likedLevel: number,
    repo: string,
    page: string
}

const wolfForest: project = {
    title: "Wolf Forest",
    imageName: "wolfforest",
    date: "02-02-2025",
    description: "It is a website where you can update your fictional characters to face off in a battle royale. Over several days and nights, special events such as deaths, murders, temporary alliances, and item collection take place, creating a dynamic and surprise-filled narrative.",
    whatIDo: "I carried out this entire project, developing it during vacations to learn JavaScript.",
    tools: ['React', 'JavaScript'],
    examplesCount: 3,
    likedLevel: 2,
    repo: "",
    page: '',
}

const actOne: project = {
    title: "Act One",
    imageName: "actone",
    date: "28-05-2025",
    description: "A social network designed to share stories and gossip, where users can tell their anecdotes in a format divided by acts. The platform also includes a 'focus mode' intended for content creators, which allows reading stories paragraph by paragraph, eliminating distractions for a more immersive experience.",
    whatIDo: "I carried out the entire project, from the idea, planning, design, backend, frontend, and database.",
    tools: ['React', 'JavaScript', 'TypeScript', 'tailwindcss', 'NestJS', 'Prisma'],
    examplesCount: 7,
    likedLevel: 3,
    repo: '',
    page: '',
}

const cookingHub: project = {
    title: "Cooking Hub",
    imageName: "cookinghub",
    date: "05-12-2024",
    description: "A mobile cooking app whose main feature is recipe generation through artificial intelligence. By providing a list of ingredients, you receive a personalized recipe that uses those same ingredients. It also includes other features such as saving recipes, accessing cooking tutorials, marking favorite ingredients, and more.",
    whatIDo: "I was in charge of the design and frontend development, and also assisted with backend and project planning.",
    tools: ['Dart', 'Flutter', 'MongoDB'],
    examplesCount: 6,
    likedLevel: 1,
    repo: 'https://github.com/diegovq12/CookingHub',
    page: ''
}


export default function Projects() {
    let [currentProject, setCurrentProject] = useState<project>(actOne);
    let [currentExample, setExample] = useState(1);
    const navigator = useNavigate();
    const [fullscreenOpen, setFullscreenOpen] = useState(false);


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

    const move = (moveToRight: boolean) => {
        if (moveToRight) {
            if (currentExample < currentProject.examplesCount) setExample(prev => prev + 1)
            else setExample(1);
        } else {
            if (currentExample > currentProject.examplesCount) setExample(prev => prev - 1)
            else setExample(currentProject.examplesCount);
        }
    }

    return (
        <div className="mx-[10vw] h-screen py-[5vh] overflow-hidden">
            <motion.section className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.45, once: true }}
                transition={{ ease: easeInOut, duration: 0.3 }}
            >
                <h1 className="mb-3">Projects</h1>
                <img src='draws/Laptop.png' className='h-[180px] -z-1 w-fit absolute top-0 right-0' />
                <section className="flex pl-2 h-[50px] border-b-2 border-black">
                    <Tab imageName={actOne.imageName} title={actOne.title} isActive={currentProject === actOne} click={() => { setCurrentProject(actOne); setExample(1) }} />
                    <Tab imageName={wolfForest.imageName} title={wolfForest.title} isActive={currentProject === wolfForest} click={() => { setCurrentProject(wolfForest); setExample(1) }} />
                    <Tab imageName={cookingHub.imageName} title={cookingHub.title} isActive={currentProject === cookingHub} click={() => { setCurrentProject(cookingHub); setExample(1) }} />
                </section>
            </motion.section>

            <motion.section className="flex w-full h-full pb-[10vh]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.30, once: true }}
                transition={{ ease: easeInOut, duration: 0.3 }}
            >
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
                        <div className="flex h-1/2 w-full">
                            <button className="mr-2" onClick={() => { move(false) }}>
                                <h3 className="">{"<"}</h3>
                            </button>
                            <img
                                className="rounded-md max-w-8/10 h-fit max-h-5/6 my-auto mx-auto cursor-pointer"
                                src={`examples/${currentProject.imageName.toLowerCase()}/${currentExample}.jpg`}
                                onClick={() => setFullscreenOpen(true)}
                            />

                            <button className="ml-2" onClick={() => { move(true) }}>
                                <h3 className="">{">"}</h3>
                            </button>
                        </div>

                        {getIndex()}

                        <div className="flex ml-auto mt-5">
                            {currentProject.repo ? (
                                <a className="mr-5 cursor-pointer" href={currentProject.repo}>
                                    <p>Code</p>
                                    <img className="mx-auto" src={code} alt="decoration" />
                                </a>
                            ) : (
                                <div className="mr-5 cursor-pointer" onClick={() => { navigator('/404') }}>
                                    <p className="text-[#838383]">Code</p>
                                </div>
                            )}

                            {currentProject.page ? (
                                <a className="cursor-pointer" href={currentProject.page}>
                                    <p >Go To {'- >'}</p>
                                    <img className="w-fit" src={goTo} alt="decoration" />
                                </a>
                            ) : (
                                <div className="cursor-pointer" onClick={() => { navigator('/404') }}>
                                    <p className="text-[#838383]">Go To {'- >'}</p>
                                </div>

                            )}


                        </div>
                    </div>
                    {currentProject.likedLevel === 1 ? (
                        <img src='draws/Nojado.png' className='h-[100px] -z-1 w-fit absolute bottom-20 left-0' />) :
                        (<> {currentProject.likedLevel === 2 ?
                            (<img src='draws/Like.png' className='h-[100px] -z-1 w-fit absolute bottom-20 left-0' />)
                            : (<img src='draws/Cafe.png' className='h-[110px] -z-1 w-fit absolute bottom-20 left-0' />)}
                        </>)}
                </div>

            </motion.section>
            <AnimatePresence>
                {fullscreenOpen && (
                    <motion.div
                        key="fullscreen-modal"
                        className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.8)] bg-opacity-90 flex items-center justify-center z-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: easeInOut }}
                    >
                        <img src={`examples/${currentProject.imageName.toLowerCase()}/${currentExample}.jpg`}
                            className="max-w-[90%] max-h-[90%] rounded shadow-lg"
                            alt="fullscreen" />

                        <button className="absolute top-4 right-6 text-white text-3xl font-bold"
                            onClick={() => setFullscreenOpen(false)} >
                            X
                        </button>
                        <button className="absolute left-6 text-white text-4xl"
                            onClick={() => setExample((prev) => prev === 1 ? currentProject.examplesCount : prev - 1)}>
                            {"<"}
                        </button>
                        <button className="absolute right-6 text-white text-4xl"
                            onClick={() => setExample((prev) => prev === currentProject.examplesCount ? 1 : prev + 1)} >
                            {">"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>

    )

}
