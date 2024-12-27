export function ProjectItem({ imageName, title, children, theme }) {
    return (
        <div className={`project-card ${theme}`}>
            <img src={`portfolio/project/${imageName}.png`} />
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    );
}