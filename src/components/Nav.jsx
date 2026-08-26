import '/src/assets/css/Nav.css'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    return (
        <section className='navbar-container'>
            <nav className="navbar">
                <div className='logo'>
                    <a href="#">CB</a>
                </div>
                <div className={`menu`}>
                    <a href="https://www.linkedin.com/in/carlosbermudezgarcia" className='socialIcon' target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/carlosbermudezg" className='socialIcon' target="_blank"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.instagram.com/cbermudez7/" className='socialIcon' target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="mailto:cbermudezg7@gmail.com" className='socialIcon'><i className="fa-solid fa-envelope"></i></a>
                    <button
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                        title={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
                    >
                        {theme === 'dark' ? (
                            <i className="fa-solid fa-sun"></i>
                        ) : (
                            <i className="fa-solid fa-moon"></i>
                        )}
                    </button>
                </div>
            </nav>
        </section>
    )
}

export default Navbar