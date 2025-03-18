

export function Item({ theme, tag, children, level }) {
    return (
        <div className={`one-item ${theme}`}>
            <img src={`lenguage/${children}.svg`} alt={tag} />
            <span>{tag}</span>
        </div>
    );
}