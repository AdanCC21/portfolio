

export function Item({ theme, tag, children, level }) {
    return (
        <div className={`one-item ${theme}`}>
            <img src={`lenguage/${children}.svg`} alt={tag} />
            <h3>{tag}</h3>
        </div>
    );
}