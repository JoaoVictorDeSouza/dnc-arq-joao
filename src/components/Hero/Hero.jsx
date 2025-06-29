import { Link } from 'react-router-dom'
import './Hero.css'
import Button from '../Button/Button'

// UTILS
import { AppContext } from "../../contexts/AppContext"
import { useContext } from 'react'

function Hero() {
    const appContext = useContext(AppContext)
    return (
        <div className="hero d-flex al-center" >
            <div className="hero-text">
                <h1>{appContext.languages[appContext.language].hero.title}</h1>
                <p>{appContext.languages[appContext.language].hero.subtitle}</p>
                <Link to="/about">
                    <Button buttonStyle="secondary" arrow>
                        {appContext.languages[appContext.language].hero.cta}
                    </Button>
                </Link>
            </div>
            
        </div>
    )
}

export default Hero