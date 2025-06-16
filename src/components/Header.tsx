import React from 'react'

export default function Header() {
  return (
    <header className='flex w-screen justify-center items-center min-h-[8vh]'>
        <div className='flex w-2/6 justify-between'>
            <p className='cursor-pointer opacity-50 hover:opacity-100 transition-all ease-in-out duration-300' >Projects</p>
            <p className='cursor-pointer opacity-50 hover:opacity-100 transition-all ease-in-out duration-300' >Skills</p>
            <p className='cursor-pointer opacity-50 hover:opacity-100 transition-all ease-in-out duration-300' >About Me</p>
        </div>
    </header>
  )
}
