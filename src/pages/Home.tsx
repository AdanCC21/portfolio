import lineTopDown from '../assets/decoration/lineTopDown.svg'
import lineBottom from '../assets/decoration/profileDec.svg';
import goDown from '../assets/decoration/goDown.svg';
import { easeInOut, motion } from 'framer-motion';

type Prompts = {
    skillsRef: any,
    goTo: (ref: any) => void
}

export default function Home({ skillsRef, goTo }: Prompts) {
    const isDarkTheme = localStorage.theme === 'dark';
    return (
        <main className="flex md:flex-row flex-col w-screen h-(--home-height) overflow-hidden">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.020, ease: easeInOut }}
                src='draws/Celular.png'
                className='md:h-[80px] h-[40px] w-fit absolute right-1 md:right-5 top-1 md:top-5 ' />
            <motion.div
                className='m-auto h-[250px] md:h-3/4 relative'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.020, ease: easeInOut }}>
                <img src="Draw.png" alt="dibujo" className="h-full object-cover m-auto " />
                <img src={lineBottom} alt='decoration' className={`${isDarkTheme? 'invert' : ''} w-5/6 mx-auto`} />
            </motion.div>
            <motion.article
                className="flex flex-col z-10 h-1/2 md:w-1/2 mt-5 md:my-auto mx-[10vw] md:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: easeInOut }}>
                <div className="flex flex-col w-fit md:relative">
                    <img src='draws/Neutral.png'
                        className='h-[50px] md:h-[100px] top-0 md:top-[-100px] opacity-50 md:opacity-100 w-fit absolute right-0' />
                    <h2 className="ml-auto -my-5">{"</>"}</h2>
                    <h1>Adan Gonzalez Ceseña</h1>
                </div>
                <h4><strong>Software Engineer</strong> and <strong>Video Editor</strong></h4>
                <br />
                <p>UABC Student, Frontend, Backend, Video Editor</p>
                <div className='h-[20px]'>
                    <img src={goDown} alt='go down' className={`${isDarkTheme && 'invert'} h-[90%] hover:h-full mx-auto mt-5 cursor-pointer
                        transition-all ease-in-out duration-300`}
                        onClick={() => { goTo(skillsRef) }} />
                </div>
            </motion.article>
            <article className="md:w-30 w-[80px] h-fit absolute right-0 bottom-0 overflow-hidden z-1">
                <img src={lineTopDown} alt="decoration 1" className={`${isDarkTheme? 'invert' : ''} ml-5`} />
            </article>
        </main>
    )
}
