

export function Item({ theme, tag, children, level }) {
    return (
        <div className={`one-item ${theme}`}>
            <img src={`lenguage/${children}.svg`} />
            <h3>{tag}</h3>
            <h1>% {level}</h1>
        </div>
    );
}