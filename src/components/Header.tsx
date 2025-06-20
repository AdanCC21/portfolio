import { easeInOut, motion } from 'framer-motion';

type Prompts = {
  projectRef: any,
  skillRef: any,
  aboutRef: any,
  goTo: (ref: any) => void
}

export default function Header({ projectRef, skillRef, aboutRef, goTo }: Prompts) {
  return (
    <header className='flex w-screen justify-center items-center h-(--header-height)'>
      <div className='flex w-2/6 justify-between'>
        <motion.p
          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: easeInOut }}
          whileHover={{ scale: 1.2 }}
          className='cursor-pointer'
          onClick={() => { goTo(skillRef) }}>Skills</motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, ease: easeInOut }}
          whileHover={{ scale: 1.2 }}
          className='cursor-pointer'
          onClick={() => { goTo(projectRef) }}
        >Projects</motion.p>
        <motion.p
          initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: easeInOut }}
          whileHover={{ scale: 1.2 }}
          className='cursor-pointer'
          onClick={() => { goTo(aboutRef) }}>About Me</motion.p>
      </div>
    </header>
  )
}
