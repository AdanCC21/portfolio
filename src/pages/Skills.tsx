import LanguageItem from '../components/LanguageItem'

export default function Skills() {
    return (
        <section className='mx-[10vw] py-[10vh] h-screen overflow-hidden'>
            <h1>Skills</h1>
            <p className='mb-5'>Around my 3 years on the university, and by my self, i learn to use this languages, frameworks, libraries etc. </p>
            <section className='grid grid-cols-[repeat(auto-fit,_minmax(50px,_100px))] gap-10'>
                <LanguageItem key={`s-js`} imageSource='./icons/languages/javascript.svg' title='JavaScript' />
                <LanguageItem key={`s-ts`} imageSource='./icons/languages/typescript.svg' title='TypeScript' />
                <LanguageItem key={`s-jsx`} imageSource='./icons/languages/react.svg' title='React' />
                <LanguageItem key={`s-nest`} imageSource='./icons/languages/nestjs.svg' title='NestJS' />
                <LanguageItem key={`s-tailwind`} imageSource='./icons/languages/tailwindcss.svg' title='Tailwindcss' />
                <LanguageItem key={`s-c`} imageSource='./icons/languages/c.svg' title='C' />
                <LanguageItem key={`s-cpp`} imageSource='./icons/languages/cpp.svg' title='C++' />
                <LanguageItem key={`s-py`} imageSource='./icons/languages/python.svg' title='Python' />
                <LanguageItem key={`s-dart`} imageSource='./icons/languages/dart.svg' title='Dart' />
                <LanguageItem key={`s-flutter`} imageSource='./icons/languages/flutter.svg' title='Flutter' />
                <LanguageItem key={`s-html`} imageSource='./icons/languages/html.svg' title='HTML' />
                <LanguageItem key={`s-css`} imageSource='./icons/languages/css.svg' title='CSS' />
            </section>
        </section>
    )
}
