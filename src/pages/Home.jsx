import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Footer from "../components/Footer/Footer"
import ProjectList from "../components/ProjectsList/ProjectList"

function Home() {
    return (
        <>
            <Header/>
            <div className="container">
                <Hero />
                <ProjectList />
            </div>
            <Footer/>
        </>
    )
}

export default Home