import { easeInOut, motion } from 'framer-motion'

export default function AboutMe() {
    return (
        <div className="flex h-screen justify-between py-[10vh] mx-[10vw] relative">
            <div className=" w-2/3 relative">
                <img src='draws/Proud.png' className='h-[100px] w-fit absolute top-0 right-[-140px]' />
                <h1 className="mb-3">More About Me</h1>
                <p>I am a student at the <strong>Universidad Autónoma de Baja California</strong>, studying a degree in <strong>Ingeniería en Software y Tecnologías Emergentes.</strong> I plan to graduate in 2026 and intend to focus on fields like <strong>Frontend</strong> and <strong>Backend</strong> web development.</p>
                <br />
                <p>I really enjoy listening to all kinds of music, developing frontend, learning new languages/frameworks related to web development, and coffee :). </p>
                <br />
                <p>Regarding <strong>editing</strong>, it’s a hobby I really like. For all my projects, I take my time because creativity and motivation to edit are not things that can be forced. At the moment, I'm taking a break because I want to focus on my career.</p>
                <br />
                <p>I'm from Baja California and was born here in 2004.</p>
                <br />
                <section className="flex h-[35px] w-fit">
                    <a className="h-full flex" href="https://www.instagram.com/adan_gcm">
                        <motion.img whileHover={{scale:1.2}} transition={{duration:0.3, ease:easeInOut}} className="mr-3" src="icons/social/instagram.png" alt="instagram" />
                    </a>
                    <a className="h-full flex" href="https://github.com/AdanCC21">
                        <motion.img whileHover={{scale:1.2}} transition={{duration:0.3, ease:easeInOut}} className="mx-3" src="icons/social/github.png" alt="github" />
                    </a>
                    <a className="h-full flex" href="https://www.linkedin.com/in/adan-gonzalez-cese%C3%B1a-584411338/">
                        <motion.img whileHover={{scale:1.2}} transition={{duration:0.3, ease:easeInOut}} className="mx-3" src="icons/social/linkedin.png" alt="linkedin" />
                    </a>
                </section>
            </div>
            <img className="h-1/2 my-auto rounded-full" src="informal.png" alt="Adan" />

            <img src='draws/Music2.png' className='h-[110px] w-fit absolute bottom-10 right-0' />
        </div>
    )
}
