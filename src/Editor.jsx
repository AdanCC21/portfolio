
import './css/editor.css'
import { EditorDetails } from './components/EditorDetails'

export function Editor({ theme }) {

    return (
        <div className={`generic-container ${theme}`}>
            <h1 className='title'>Editor</h1>
            <div className={`line ${theme}`}></div>
            <EditorDetails theme={theme} title={"Mi estilo"} imageName={'lapiz'}>
                Mi estilo de edicion es rapido, trato de no dejar espacios en blanco o en silencio, usando imagenes y movimientos de camara para retener el publico, suelo utilizar musica de videojuegos de fondo y efectos de sonido de memes.
            </EditorDetails>

            <EditorDetails theme={theme} title={"Precios"} imageName={'signo-de-dolar'}>
                Depende de varios factores:<br />
                - Duración<br />
                - Complejidad (edicion tranquila, animada, rapida)<br />
                - Subtítulos<br />
                - Formato (Para Youtube o Tiktok)<br />
                - Cambios despues de la entrega<br />
                Pero para dar un promedio, arriba de $200mx en adelante
            </EditorDetails>

            <EditorDetails theme={theme} title={"Que edito"} imageName={'ayuda'}>
                - Gameplays<br/>
                - Edits<br/>
                - Clips para TikTok o Instagram<br/>
                - Trailers de twitch<br/>
                - Animaciones sencillas con imagenes<br/>
                - Video reacciones
            </EditorDetails>

        </div>
    );
}