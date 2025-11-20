import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'  
import Education from './components/Education.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'
import Skills from './components/Skills.jsx'
import BackgroundAnimation from './components/BackgroundAnimation.jsx'
import Certificates from './components/Certificates.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="container mx-auto px-4">  
      <Hero />
      <Education/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <Contact/>
    </div>
    <Footer/>
  </StrictMode>,
)
