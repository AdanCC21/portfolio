export function SoftwareItem({ theme, tag, children, level }) {
    return (
        <div className={`one-item ${theme}`}>
            <img src={`software/${children}.svg`} alt={tag}/>
            <span>{tag}</span>
        </div>
    );
}