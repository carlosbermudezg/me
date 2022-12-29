import '/src/assets/css/Home.css'
import { useState, useEffect } from 'react'
import SkillCards from './SkillsCards'
import skills from '/src/data/skills'
import photo from '/src/assets/img/me.png'

const Home = ()=> {
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
    const blinkRight = ()=>{
        if(indexLetter === 0 || indexLetter <= allInfo[indexInfo].length - 1){
            setSpanInfo(spanInfo + allInfo[indexInfo][indexLetter])
            indexLetter === allInfo[indexInfo].length - 1 ? (setTimeout(()=> {setDirection('left'), setIndexInfo( indexInfo + 1 )},2000)) : setIndexLetter( indexLetter + 1 )
        }
    }
    //Función para borrar la info
    const blinkLeft = ()=>{
        indexInfo === allInfo.length ? setIndexInfo(0) : false
        indexLetter === 0 ? setDirection('right') : setIndexLetter( indexLetter - 1 )
        setSpanInfo( spanInfo.slice(0, indexLetter) )
    }

    useEffect(() => {
        setTimeout(()=>{
            direction === 'right' ? blinkRight() : blinkLeft()
        },100)
    }, [indexLetter, indexInfo, direction])
    

    return(
        <section className="home">
            <div className='home__left'>
                <div className='me'>
                    <img className='photo' src={ photo } alt="me" />
                </div>
                <h1 className='h1'>FullStack Web Developer</h1>
                <div className='introduction'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo sed voluptatibus minus doloremque nihil possimus velit dolore vitae accusantium, nisi iusto dolorum libero expedita est dolores quos voluptas deleniti provident. <br />
                    </p>
                </div>
            </div>
            <div className='home__right'>
                <div>
                    <h2>Skills</h2>
                    <div className='tecno'>
                        {
                            skills.map((element, index)=>{
                                return <SkillCards key={ `tool-${index}` } {...element} />
                            })
                        }
                    </div>
                </div>
                <div>
                    <span className='blink'> { spanInfo }</span>
                    <a className='btn' href="#"><i className="fa-solid fa-arrow-down"></i> Download CV</a>
                </div>
            </div>
        </section>
    )
}

export default Home