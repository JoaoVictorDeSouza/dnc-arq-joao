import { useContext, useState, useEffect } from 'react'
import './ProjectList.css'

//ASSETS
import LikedFilled from '../../assets/Like-filled.svg'
import Like from '../../assets/Like.svg'

//COMPONENTS
import Button from '../Button/Button'

// CONTEXT
import { AppContext } from "../../contexts/AppContext"

//UTILS
import { getApiData } from '../../services/apiServices'

function ProjectList() {
    const appContext = useContext(AppContext)
    const [favProjects, setFavProjects] = useState([]) // Estado que recebe a lista de ID do like
    const [projects, setProjects] = useState() // Estado que recebe a lista de projetos
    const handleSavedFavProjects = (id) => {
        setFavProjects((prevFavProjects) => {
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return [...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects) {
            setFavProjects(savedFavProjects)
        }
    }, [])

    return (
        <div className="project-section">
            <div className="project-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="project-grid">
                {
                    projects ?
                        projects.map((project) => (
                            <div className="project-card d-flex jc-center al-center fd-column" key={project.id}>
                                <div
                                    className="thumb terciaria-background"
                                    style={{backgroundImage: `url(${project.thumb})`}}
                                ></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle="unstyled" onClick={() => handleSavedFavProjects(project.id)}>
                                    <img src={favProjects.includes(project.id) ? LikedFilled : Like} />
                                </Button>
                            </div>
                        ))
                    : null
                }                
            </div>           
        </div>
    )
}

export default ProjectList