import { useState } from 'react';
import LanguageItem from '../components/LanguageItem'
import { easeInOut, motion } from 'framer-motion';
export default function Skills() {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div className='min-h-screen w-screen '>
            <section className='mx-[10vw] py-[5vh] min-h-screen flex flex-col'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: easeInOut }}
                    viewport={{ amount: 0.20, once: true }}>
                    <h1>Skills</h1>
                    <p className='mb-5'>Around my 3 years at university, and on my own, I learned these languages, frameworks, libraries, etc.</p>
                </motion.div>
                <motion.section
                    className="grid gap-6 
                    grid-cols-[repeat(auto-fit,minmax(50px,1fr))]
                    sm:grid-cols-[repeat(auto-fit,minmax(60px,1fr))]
                    lg:grid-cols-[repeat(auto-fit,minmax(100px,1fr))]
                    "
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: easeInOut }}
                    viewport={{ amount: 0.20, once: true }}
                >
                    <LanguageItem key={`s-js`} imageSource='./icons/languages/javascript.svg' title='JavaScript' />
                    <LanguageItem key={`s-ts`} imageSource='./icons/languages/typescript.svg' title='TypeScript' />
                    <LanguageItem key={`s-jsx`} imageSource='./icons/languages/react.svg' title='React' />
                    <LanguageItem key={`s-nest`} imageSource='./icons/languages/nestjs.svg' title='NestJS' />
                    <LanguageItem key={`s-prisma`} imageSource='./icons/languages/prisma.svg' title='Prisma' />
                    <LanguageItem key={`s-mongo`} imageSource='./icons/languages/mongodb.svg' title='MongoDB' />
                    <LanguageItem key={`s-tailwind`} imageSource='./icons/languages/tailwindcss.svg' title='Tailwindcss' />
                    <LanguageItem key={`s-c`} imageSource='./icons/languages/c.svg' title='C' />
                    <LanguageItem key={`s-cpp`} imageSource='./icons/languages/cpp.svg' title='C++' />
                    <LanguageItem key={`s-dart`} imageSource='./icons/languages/dart.svg' title='Dart' />
                    <LanguageItem key={`s-flutter`} imageSource='./icons/languages/flutter.svg' title='Flutter' />
                    <LanguageItem key={`s-py`} imageSource='./icons/languages/python.svg' title='Python' />
                    <LanguageItem key={`s-html`} imageSource='./icons/languages/html.svg' title='HTML' />
                    <LanguageItem key={`s-css`} imageSource='./icons/languages/css.svg' title='CSS' />
                </motion.section>
                
                <motion.img
                    src="draws/DeHecho.png"
                    className="h-[100px] md:h-[100px] lg:h-[150px] w-fit ml-auto mt-auto"
                    onHoverStart={() => setIsHovering(true)}
                    onHoverEnd={() => setIsHovering(false)}
                    animate={isHovering ? {
                        rotateX: [0, 20, 0],
                        transition: {
                            duration: 0.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    } : {
                        rotateX: 0,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    }}
                />
            </section>
        </div>
    )
}
