import './css/home.css'
import { Item } from './components/item';
import { SoftwareItem } from './components/SoftwareItem';


export function Home({theme}){
    return(
        <div>
            <main className={`home ${theme}`}>
                <img src="portfolio/io-icon.png"/>
                <div className={`line ${theme}`}></div>
                <h1>Hi, i'm Adan Gonzalez</h1>
                <h3>Software Engineer And Video Editor</h3>
            </main>
            
            <section className={`roles ${theme}`}>
                <h1>Roles</h1>
                <section className='roles-item'>
                    <p>El mejor rol en el que me desempeño es <strong>Frontend</strong>, debido a que el casi 80% de los proyectos que he realizado dentro de la universidad, mi rol principal siempre ha sido diseñar el <strong>Frontend</strong> de nuestro proyecto.</p>
                    <div className={`rol ${theme}`}>
                        <img src='portfolio/icon/page.png'></img>
                        <h1>Frontend</h1>
                    </div>
                </section>
                
                <section className='roles-item left'>
                    <p>Dentro del <strong>Backend</strong> no tengo mucha experiencia, pero he sido auxiliar de este rol dentro de varios proyectos.</p>
                    <div className={`rol ${theme}`}>
                        <img src='portfolio/icon/settings.png'></img>
                        <h1>Backend</h1>
                    </div>
                </section>
                
                <section className='roles-item'>
                    <p>Junto a un equipo de mi salon hemos desarrollado una aplicación móvil bastante funcional en 2 meses, yo fui principalmente <strong>Frontend</strong>, y auxiliar de <strong>Backend y Data Base</strong></p>
                    <div className={`rol ${theme}`}>
                        <img src='portfolio/icon/iphone.png'></img>
                        <h1>Mobile</h1>
                    </div>
                </section>
            </section>
            
            <section className={`tools ${theme}`}>
                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Lenguages</h1>
                </header>

                <section className='items'>
                    <Item theme={theme}>c</Item>
                    <Item theme={theme}>cpp</Item>
                    <Item theme={theme}>dart</Item>
                    <Item theme={theme}>python</Item>
                    <Item theme={theme}>java</Item>
                    <Item theme={theme}>javascript</Item>
                    <Item theme={theme}>html</Item>
                    <Item theme={theme}>css</Item>
                </section>
                
                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>FrameWorks</h1>
                </header>

                <section className='items'>
                    <Item theme={theme}>raylib</Item>
                    <Item theme={theme}>flutter</Item>
                    <Item theme={theme}>react</Item>
                </section>

                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Software</h1>
                </header>

                <section className='items'>
                    <SoftwareItem theme={theme}>git</SoftwareItem>
                    <SoftwareItem theme={theme}>github</SoftwareItem>
                    <SoftwareItem theme={theme}>intellij</SoftwareItem>
                    <SoftwareItem theme={theme}>visualStudioCode</SoftwareItem>
                    <SoftwareItem theme={theme}>visualStudio</SoftwareItem>
                    <SoftwareItem theme={theme}>premiere</SoftwareItem>
                    <SoftwareItem theme={theme}>photoshop</SoftwareItem>
                </section>
            </section>
        </div>
    );
}