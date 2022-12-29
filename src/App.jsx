import Navbar from './components/Nav'
import Home from './components/Home'
import Social from './components/Social'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'
import './App.css'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function App() {

    // ParticlesJS
  const particlesInit = useCallback(async engine => {
      //console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async container => {
      //await console.log(container);
  }, []);



  return (
    <div className="App">
      <Navbar></Navbar>
      <section className='main'>
        <Social></Social>
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
                            enable: true,
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
                        value: "#fff",
                    },
                    links: {
                        color: "#888",
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
                        speed: 0.5,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 600,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
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
      <section className='projects__main'>
        <h1>Projects</h1>
        <div className='projects__container'>
            {
                projects.map((element, index)=>{
                    return <ProjectCard key={ `project-card-${index}` } {...element} />
                })
            }
        </div>
      </section>
    </div>
  )
}

export default App
