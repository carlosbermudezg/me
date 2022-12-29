import '/src/assets/css/SkillsCards.css'
import useHover from '../hooks/useHover'

const SkillCards = ({tool,background,icon,rotate})=>{

    const [hoverRef, isHovered] = useHover();

    let animation = ''

    rotate === true ? animation = 'rotateIcon 7s linear infinite': ''

    return(
        <div className='tool-card' ref={hoverRef} style={ isHovered ? {background: background } : {background: '#2C2C2C' } }>
            <small className='tool__name'>{ tool }</small>
            <i className={ icon } style={ !isHovered ? {color: background, animation: animation } : {color: 'aliceblue', animation: animation } }></i>
        </div>
    )
}

export default SkillCards