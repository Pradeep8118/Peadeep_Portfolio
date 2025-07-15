
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Education from './components/Education'
import Skill from './components/Skill'
import Experience from './components/Experience'



function App() {

  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Education/>
        <Skill/>
        <Projects />
        <Experience/>
        <Contact />
        <Footer />
    </div>
  )
}

export default App
