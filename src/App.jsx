import Navbar from './components/Nav'
import Home from './components/Home'
import Social from './components/Social'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import projects from './data/projects'
import './App.css'
import { useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useTheme } from './context/ThemeContext'

function App() {
    const { theme } = useTheme();
    const [selectedProject, setSelectedProject] = useState(null);

    // ParticlesJS
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <div className="App">
            <Navbar></Navbar>
            <section className='main'>
                {/* <Social></Social> */}
                <Home></Home>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "grab",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                                grab: {
                                    distance: 150,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: theme === 'dark' ? "#fff" : "#748798ff",
                            },
                            links: {
                                color: theme === 'dark' ? "#888" : "#9eb2c7ff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: true,
                            },
                            move: {
                                directions: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 0.7,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 600,
                                },
                                value: 150,
                            },
                            opacity: {
                                value: 0.3,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                >
                </Particles>
            </section>

            <section className='projects__main' id="projects">
                <h2 className="projects__title-heading">Projects</h2>
                <div className='projects-slider-container'>
                    <div className='projects-track'>
                        <div className='projects-group'>
                            {projects.map((element, index) => (
                                <ProjectCard
                                    key={`project-1-${index}`}
                                    {...element}
                                    onClick={() => setSelectedProject(element)}
                                />
                            ))}
                        </div>
                        <div className='projects-group' aria-hidden="true">
                            {projects.map((element, index) => (
                                <ProjectCard
                                    key={`project-2-${index}`}
                                    {...element}
                                    onClick={() => setSelectedProject(element)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    )
}

export default App
