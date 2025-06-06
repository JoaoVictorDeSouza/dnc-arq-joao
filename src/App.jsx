import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//PAGES & COMPONENTS
import Home from './pages/Home'
import About from './pages/About'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Project from './pages/Project'
import Contact from './pages/Contact'

//UTILS
import ScroollToTop from './utils/ScrollTop'
import { AppContext } from './contexts/AppContext'

function App() {
  const appContext = useContext(AppContext)

  if(appContext.loading) {
    return <LoadingSpinner />
  }

  return (
    <Router> {/* Aqui é onde contém as rotas */}
      <ScroollToTop />
      <Routes> {/* Aqui ele guarda as rotas que tem no Router */}
        <Route path="/" element={<Home />}></Route> {/* Aqui são as rotas que levam aos elementos descritos */}
        <Route path="/about" element={<About/>}></Route>
        <Route path="/project" element={<Project/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
