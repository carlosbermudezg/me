import '/src/assets/css/Nav.css'

const Navbar = ()=> {
    return(
        <section className='navbar-container'>
            <nav className="navbar">
                <div className='logo'>
                    <a href="#">Carlos Bermúdez García</a>
                </div>
                <div className='navbar__mobile'>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className='menu'>
                    <a href="#Home" className='menu__item menu__active'>About me</a>
                    <a href="#Home" className='menu__item'>Projects</a>
                    <a href="#Home" className='menu__item'>Contact</a>
                </div>
            </nav>
        </section>
    )
}

export default Navbar