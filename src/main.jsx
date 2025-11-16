import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'  


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="comtainer mx-auto px-4">  
      <Hero />
      <Projects/>
    </div>
  </StrictMode>,
)
