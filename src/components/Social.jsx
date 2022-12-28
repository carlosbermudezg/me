import '/src/assets/css/Social.css'
const showIcons = ()=>{
    const icons = document.getElementsByClassName('socialIcon')
    for(let i = 0; i <= icons.length - 1; i++){
        icons[i].classList.toggle('show')
    }
}
const Social = ()=>{
    return (
        <div className="social-container">
            <div className="social">
                <a href="https://www.linkedin.com/in/carlosbermudezgarcia" className='socialIcon' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/carlosbermudezg" className='socialIcon' target="_blank"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.instagram.com/cbermudez7/" className='socialIcon' target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="mailto:cbermudezg7@gmail.com" className='socialIcon'><i className="fa-solid fa-envelope"></i></a>
                <a className='openSocial' onClick={ ()=> showIcons() }><i className="fa-solid fa-share-nodes"></i></a>
            </div>
        </div>
    )
}

export default Social