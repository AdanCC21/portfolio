import './css/home.css'
import { Item } from './components/item';
import { SoftwareItem } from './components/SoftwareItem';


export function Home({}){
    return(
        <div>
            <main className="home">
                <img src="public/io-icon.png"/>
                <div className="line"></div>
                <h1>Hi, i'm Adan Gonzalez</h1>
                <h3>Software Engineer And Video Editor</h3>
            </main>
            <section className='roles'>
                <h1>Roles</h1>
                <section className='roles-item'>
                    <p>El mejor rol en el que me desempeño es <strong>Frontend</strong>, debido a que el casi 80% de los proyectos que he realizado dentro de la universidad, mi rol principal siempre ha sido diseñar el <strong>Frontend</strong> de nuestro proyecto.</p>
                    <div className='rol'>
                        <img src='public/icon/page.png'></img>
                        <h1>Frontend</h1>
                    </div>
                </section>
                
                <section className='roles-item left'>
                    <p>Dentro del <strong>Backend</strong> no tengo mucha experiencia, pero he sido auxiliar de este rol dentro de varios proyectos.</p>
                    <div className='rol'>
                        <img src='public/icon/settings.png'></img>
                        <h1>Backend</h1>
                    </div>
                </section>
                
                <section className='roles-item'>
                    <p>Junto a un equipo de mi salon hemos desarrollado una aplicación móvil bastante funcional en 2 meses, yo fui principalmente <strong>Frontend</strong>, y auxiliar de <strong>Backend y Data Base</strong></p>
                    <div className='rol'>
                        <img src='public/icon/iphone.png'></img>
                        <h1>Mobile</h1>
                    </div>
                </section>
            </section>
            
            <section className='tools'>
                <header className='tools-head'>
                    <div className='vertical-line'></div>
                    <h1>Lenguages</h1>
                </header>

                <section className='items'>
                    <Item>c</Item>
                    <Item>cpp</Item>
                    <Item>dart</Item>
                    <Item>python</Item>
                    <Item>java</Item>
                    <Item>javascript</Item>
                    <Item>html</Item>
                    <Item>css</Item>
                </section>
                
                <header className='tools-head'>
                    <div className='vertical-line'></div>
                    <h1>FrameWorks</h1>
                </header>

                <section className='items'>
                    <Item>raylib</Item>
                    <Item>flutter</Item>
                    <Item>react</Item>
                </section>

                <header className='tools-head'>
                    <div className='vertical-line'></div>
                    <h1>Software</h1>
                </header>

                <section className='items'>
                    <SoftwareItem>git</SoftwareItem>
                    <SoftwareItem>github</SoftwareItem>
                    <SoftwareItem>intellij</SoftwareItem>
                    <SoftwareItem>visualStudioCode</SoftwareItem>
                    <SoftwareItem>visualStudio</SoftwareItem>
                    <SoftwareItem>premiere</SoftwareItem>
                    <SoftwareItem>photoshop</SoftwareItem>
                </section>
            </section>
        </div>
    );
}