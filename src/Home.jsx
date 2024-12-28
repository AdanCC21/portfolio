import './css/home.css'
import { Item } from './components/item';
import { SoftwareItem } from './components/SoftwareItem';


export function Home({theme}){
    return(
        <div>
            <main className={`home ${theme}`}>
                <img src="io-icon.png"/>
                <div className={`line ${theme}`}></div>
                <h1>Hola, soy Adan Gonzalez</h1>
                <h3>Ingeniero en Software y Editor de Videos</h3>
            </main>
            
            <section className={`roles ${theme}`}>
                <h1>Experiencia</h1>
                <section className='roles-item'>
                    <p>El mejor rol en el que me desempeño es <strong>Frontend</strong>, debido a que el casi 80% de los proyectos que he realizado dentro de la universidad mi rol principal siempre ha sido diseñar el <strong>Frontend</strong> de nuestro proyecto.</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/page.png'></img>
                        <h1>Frontend</h1>
                    </div>
                </section>
                
                <section className='roles-item left'>
                    <p>Dentro del <strong>Backend</strong> no tengo mucha experiencia, pero he sido auxiliar de <strong>Backend</strong> dentro de varios proyectos, e hice todo el backend de una página de ventas usando spring boot.</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/settings.png'></img>
                        <h1>Backend</h1>
                    </div>
                </section>
                
                <section className='roles-item'>
                    <p>Junto a un equipo de mi salon, hemos desarrollado una aplicación móvil bastante funcional en 2 meses, yo fui principalmente <strong>Frontend</strong>, y auxiliar de <strong>Backend</strong> haciendo no solo el diseño de como se verian las cosas, si no tambien la logica de como se incorporara el contenido a la pantalla</p>
                    <div className={`rol ${theme}`}>
                        <img src='icon/iphone.png'></img>
                        <h1>Móvile</h1>
                    </div>
                </section>
            </section>
            
            <section className={`tools ${theme}`}>
                <header className='tools-head'>
                    <div className={`vertical-line ${theme}`}></div>
                    <h1>Lenguajes</h1>
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
                    <SoftwareItem theme={theme}>figma</SoftwareItem>
                </section>
            </section>
        </div>
    );
}