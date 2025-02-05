import { useNavigate } from 'react-router-dom'
import '../css/PrevProject.css'

export function PrevProject({ imageName, title, description, goTo }) {
    const navigator = useNavigate();
    return (
        <div className='pp-container' onClick={() => { goTo(imageName); navigator('/projects') }}>
            <img src={`project/preview/${imageName}.png`} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}