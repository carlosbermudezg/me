import '/src/assets/css/ProjectsCards.css'
import useHover from '../hooks/useHover'

const ProjectCard = ({project, background, img})=>{

    const [hoverRef, isHovered] = useHover()

    return(
        <div className='project__card' ref={ hoverRef } style={ isHovered ? {backgroundColor:background}:{backgroundColor: '#999999'} }>
            <h3> { project } </h3>
            <img src={ img } alt="img_project" />
        </div>
    )
}

export default ProjectCard