import '/src/assets/css/ProjectsCards.css'
import useHover from '../hooks/useHover'

const ProjectCard = ({ project, background, img, onClick }) => {
    const [hoverRef, isHovered] = useHover();

    const isFontAwesome = typeof img === 'string' && img.startsWith('fa-');

    const dynamicStyle = isHovered
        ? {
            borderColor: background,
            boxShadow: `0 10px 30px ${background}35, inset 0 0 15px ${background}15`,
            background: `linear-gradient(135deg, ${background}25 0%, rgba(255, 255, 255, 0.08) 100%)`,
        }
        : {};

    return (
        <div
            className="project-card"
            ref={hoverRef}
            style={dynamicStyle}
            onClick={onClick}
            role="button"
            tabIndex={0}
        >
            <div className="project-card__glow-dot" style={{ backgroundColor: background }}></div>
            <div className="project-card__icon-wrapper" style={{ color: isHovered ? '#ffffff' : background }}>
                {isFontAwesome ? <i className={img}></i> : <img src={img} alt={project} />}
            </div>
            <span className="project-card__name">{project}</span>
        </div>
    );
};

export default ProjectCard;