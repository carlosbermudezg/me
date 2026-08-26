import '/src/assets/css/SkillsCards.css'
import useHover from '../hooks/useHover'

const SkillCards = ({ tool, background, icon, rotate }) => {
    const [hoverRef, isHovered] = useHover();

    const animation = rotate === true ? 'rotateIcon 7s linear infinite' : '';

    const dynamicStyle = isHovered
        ? {
            borderColor: background,
            boxShadow: `0 4px 12px ${background}20`,
            background: `linear-gradient(135deg, ${background}25 0%, rgba(255, 255, 255, 0.08) 100%)`,
        }
        : {};

    return (
        <div className="tool-card" ref={hoverRef} style={dynamicStyle}>
            <div className="tool-card__glow-dot" style={{ backgroundColor: background }}></div>
            <div className="tool-card__icon-wrapper" style={{ color: isHovered ? '#ffffff' : background }}>
                <i className={icon} style={{ animation }}></i>
            </div>
            <span className="tool__name">{tool}</span>
        </div>
    );
};

export default SkillCards;