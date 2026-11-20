import './App.css'
import NavBar from './component/NavBar.jsx'
import Home from './component/Home.jsx'
import About from './component/about.jsx'
import Skill from './component/skill.jsx'
import Connect from './component/connect.jsx'
import Projects from './component/Projects.jsx'
import Services from './component/services.jsx'
import Footer from './component/footer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skill />
      <Projects />
      <Services />
      <Connect />
      <Footer />
    </>
  )
}

export default App