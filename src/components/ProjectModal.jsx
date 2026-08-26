import { useEffect } from 'react';
import '/src/assets/css/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!project) return null;

    const { project: title, description, tags = [], background, img, github, demo } = project;
    const isFontAwesome = typeof img === 'string' && img.startsWith('fa-');

    return (
        <div className="project-modal__overlay" onClick={onClose} aria-modal="true" role="dialog">
            <div className="project-modal__content" onClick={(e) => e.stopPropagation()}>
                <button
                    className="project-modal__close-btn"
                    onClick={onClose}
                    aria-label="Cerrar modal"
                    title="Cerrar"
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div
                    className="project-modal__banner"
                    style={{
                        background: `linear-gradient(135deg, ${background}44 0%, rgba(18,22,24,0.85) 100%)`,
                        borderColor: background
                    }}
                >
                    <div className="project-modal__icon" style={{ color: background }}>
                        {isFontAwesome ? <i className={img}></i> : <img src={img} alt={title} />}
                    </div>
                </div>

                <div className="project-modal__body">
                    <h2 className="project-modal__title">{title}</h2>

                    {tags.length > 0 && (
                        <div className="project-modal__tags">
                            {tags.map((tag, i) => (
                                <span key={i} className="project-modal__tag" style={{ borderColor: `${background}55` }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <p className="project-modal__description">
                        {description || 'Sin descripción disponible.'}
                    </p>

                    <div className="project-modal__actions">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-modal__btn project-modal__btn--github"
                            >
                                <i className="fa-brands fa-github"></i>
                                <span>Ver Código</span>
                            </a>
                        )}
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-modal__btn project-modal__btn--demo"
                                style={{ background: background, color: '#120F17' }}
                            >
                                <span>Ver Proyecto</span>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
