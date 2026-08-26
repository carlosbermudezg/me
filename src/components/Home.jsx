import '/src/assets/css/Home.css'
import { useState, useEffect } from 'react'
import SkillCards from './SkillsCards'
import skills from '/src/data/skills'
import photo from '/src/assets/img/me.png'

const Home = () => {
    //Info a mostrar
    const allInfo = [
        'FullStack Web Developer',
        'github.com/carlosbermudezg',
        'linkedin.com/in/carlosbermudezgarcia',
        'instagram.com/cbermudez7',
        'cbermudezg7@gmail.com'
    ]

    //Setea la info y el indice de cada letra a mostrar en cada blink
    const [indexInfo, setIndexInfo] = useState(0)
    const [indexLetter, setIndexLetter] = useState(0)
    const [spanInfo, setSpanInfo] = useState('')

    //Define la direccion del blink
    const [direction, setDirection] = useState('right')

    //Función para escribir la info
    const blinkRight = () => {
        if (indexLetter === 0 || indexLetter <= allInfo[indexInfo].length - 1) {
            setSpanInfo(spanInfo + allInfo[indexInfo][indexLetter])
            indexLetter === allInfo[indexInfo].length - 1 ? (setTimeout(() => { setDirection('left'), setIndexInfo(indexInfo + 1) }, 2000)) : setIndexLetter(indexLetter + 1)
        }
    }
    //Función para borrar la info
    const blinkLeft = () => {
        indexInfo === allInfo.length ? setIndexInfo(0) : false
        indexLetter === 0 ? setDirection('right') : setIndexLetter(indexLetter - 1)
        setSpanInfo(spanInfo.slice(0, indexLetter))
    }

    useEffect(() => {
        setTimeout(() => {
            direction === 'right' ? blinkRight() : blinkLeft()
        }, 50)
    }, [indexLetter, indexInfo, direction])


    return (
        <section className="home">
            <section className='home__container'>
                <div className='home__top'>
                    <div className='me'>
                        <img className='photo' src={photo} alt="me" />
                    </div>
                    <div className='introduction'>
                        <h1 className='h1'>Hey👋, I’m Carlos</h1>
                        {/* <span className='blink'> {spanInfo}</span> */}
                        <p>
                            Software developer &
                            Network builder.
                            Focused on robust systems and interfaces that feel seamless, scalable, and quietly fast.<br />
                        </p>
                    </div>
                </div>
                <div className='home__bottom'>
                    <div className='btn-info'>
                        <a className='btn' href="#"><i className="fa-solid fa-arrow-down"></i> Download CV</a>
                    </div>
                    <div className='tecno-slider-container'>
                        <div className='tecno-track'>
                            <div className='tecno-group'>
                                {skills.map((element, index) => (
                                    <SkillCards key={`tool-1-${index}`} {...element} />
                                ))}
                            </div>
                            <div className='tecno-group' aria-hidden="true">
                                {skills.map((element, index) => (
                                    <SkillCards key={`tool-2-${index}`} {...element} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home