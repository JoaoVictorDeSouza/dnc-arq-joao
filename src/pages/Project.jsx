import { useContext } from "react"
import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectsList/ProjectList"

// CONTEXTS
import { AppContext } from "../contexts/AppContext"

function Project() {
    const appContext = useContext(AppContext)
    return(
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.projects} image="Project.jpg" />
            <div className="container">
                <ProjectList />
            </div>
            <Footer/>
        </>
    )
}

export default Project