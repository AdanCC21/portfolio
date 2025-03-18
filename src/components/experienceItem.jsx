export function ExperienceItem({ imageName, first=false, description, strong }) {
    return (
        <section className='exp-item'>
            <div className={`exp-line ${first ? 'first' : ''}`}></div>
            <img src={`icon/${imageName}.png`}></img>
            <div className="flex flex-col my-2">
                <h5>{strong}</h5>
                <p> {description}</p>
            </div>
        </section>
    )
}