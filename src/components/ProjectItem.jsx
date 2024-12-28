export function ProjectItem({ imageName, title, children, theme, link }) {
    return (
        <a className={`project-card ${theme}`} href={link} target="blank">
            <img src={`project/${imageName}.png`} />
            <h1>{title}</h1>
            <p>{children}</p>
        </a>
    );
}