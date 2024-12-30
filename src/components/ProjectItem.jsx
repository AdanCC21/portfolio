export function ProjectItem({ imageName, title, children, theme, link, array = [] }) {
    const things = () => {
        if (!Array.isArray(array) || array.length === 0) {
            return null; // No hay elementos que renderizar
        }

        return (
            <section className="project-card-tools">
                {array.map((current, index) => (
                    <img 
                        src={`lenguage/${current}.svg`} 
                        alt={current} 
                        key={index} 
                    />
                ))}
            </section>
        );
    };

    return (
        <a className={`project-card ${theme}`} href={link} target="_blank" rel="noopener noreferrer">
            <img className="icon" src={`project/${imageName}.png`} alt={title} />
            <h1>{title}</h1>
            {things()}
            <p>{children}</p>
        </a>
    );
}
