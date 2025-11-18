import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'

import Projects from './Pages/Projects.jsx'  

import Footer from './components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Navbar />
    <div className="comtainer mx-auto px-4">  
      <break />
     
      
      <Projects/>
      
    </div>
    <Footer/>
  </StrictMode>,
)
