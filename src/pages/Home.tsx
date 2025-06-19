import lineTopDown from '../assets/decoration/lineTopDown.svg'
import lineBottom from '../assets/decoration/profileDec.svg';
import goDown from '../assets/decoration/goDown.svg';

export default function Home() {
    return (
        <main className="flex w-screen h-(--home-height) overflow-hidden">
            <div className='m-auto h-3/4'>
                <img src="draw.png" alt="Dibujo de yuta" className="h-full object-cover m-auto" />
                <img src={lineBottom} alt='decoration' className='w-5/6 mx-auto' />
            </div>
            <article className="flex flex-col w-1/2 my-auto">
                <div className='w-fit'>
                    <div className="flex flex-col w-fit">
                        <h2 className="ml-auto -my-5">{"</>"}</h2>
                        <h1>Adan Gonzalez Ceseña</h1>
                    </div>
                    <h4><strong>Software Engineer</strong> and <strong>Video Editor</strong></h4>
                    <br />
                    <p>UABC Student, Frontend, Backend, Video Editor</p>
                    <div className='h-[20px]'>
                        <img src={goDown} alt='go down' className='h-[90%] hover:h-full mx-auto mt-5 cursor-pointer
                        transition-all ease-in-out duration-300' />
                    </div>
                </div>
            </article>
            <article className="w-30 h-fit absolute right-0 bottom-0 flex overflow-hidden">
                <img src={lineTopDown} alt="decoration 1" className="ml-5" />
            </article>
        </main>
    )
}
