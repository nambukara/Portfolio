import React from 'react';
import ProjectCard from './ProjectCard.jsx';
import { listProyek } from "../data";

const Projects = () => {

  // Take first 3 projects
  const DPlistProyek = listProyek.slice(0, 3);

  return (
    <div id="projects" className="container mx-auto px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        My<span className="text-blue-600"> Projects</span>
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6 text-lg">
        A selection of my recent work
      </p>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {DPlistProyek.map((project, index) => (
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

      {/* View All Button */}
      <div className="text-center mt-12">
        <a
          href="../myProject"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
