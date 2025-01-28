export function ProjectPreview({theme, imageName, projectName, description, tools = [] }) {
    const getTools = () => {
        return (
            <div className="mp-tools">
                {tools.map((current, index) => (
                    <img src={`lenguage/${current}.svg`} key={index} />
                ))}
            </div>
        )
    }

    return (
        <section className={`mp-item ${theme}`}>
            <img className="mp-image" src={`project/${imageName}.png`} />
            <h1>{projectName}</h1>
            <p>{description}</p>
            {getTools()}
        </section>
    )
}