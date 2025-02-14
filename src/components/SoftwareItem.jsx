export function SoftwareItem({ theme, tag, children, level }) {
    return (
        <div className={`one-item ${theme}`}>
            <img src={`software/${children}.svg`} alt={tag}/>
            <h3>{tag}</h3>
        </div>
    );
}