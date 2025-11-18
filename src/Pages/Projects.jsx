import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { listProyek } from "../data";

const Projects = () => {
  return (
    <>
        <div id="projects" className="container mx-auto px-6 items-center topt-24 pb-16 py-26 ">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
                My
                <span className="text-blue-600"> Projects</span>
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">A selection of my recent work</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

                {/* Project Cards */}
                {listProyek.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.nama}
            description={project.desk}
            image={project.gambar}
            tech={project.tools}
            sourcecode={project.sourcecode}
          />
        ))}    
            </div>
           
        </div>
    </>
  )
}

export default Projects;