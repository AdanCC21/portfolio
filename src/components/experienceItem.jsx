export function ExperienceItem({ imageName, first=false, description, strong }) {
    return (
        <section className='exp-item'>
            <div className={`exp-line ${first ? 'first' : ''}`}></div>
            <img src={`icon/${imageName}.png`}></img>
            <p><strong>{strong}</strong> {description}</p>
        </section>
    )
}