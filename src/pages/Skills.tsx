import React from 'react'
import LanguageItem from '../components/LanguageItem'

export default function Skills() {
    return (
        <section className='mx-[10vw]'>
            <h2>Skills</h2>
            <p>Around my 3 years on the university, and by my self, i learn to use this languages, frameworks, libraries etc. </p>
            <section className='grid grid-cols-[repeat(auto-fit,_minmax(100px,_150px))] gap-3'>
                <LanguageItem imageSource='draw.png' title='prueba' alt='prueba'/>
                <LanguageItem imageSource='draw.png' title='prueba' alt='prueba'/>
                <LanguageItem imageSource='draw.png' title='prueba' alt='prueba'/>
                <LanguageItem imageSource='draw.png' title='prueba' alt='prueba'/>
                <LanguageItem imageSource='draw.png' title='prueba' alt='prueba'/>
                <LanguageItem imageSource='draw.png' title='prueba' alt='prueba'/>
                <LanguageItem imageSource='draw.png' title='prueba' alt='prueba'/>
            </section>
        </section>
    )
}
