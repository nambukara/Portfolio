import React from 'react'

const ProjectCard = ({title, description, image, tech}) => {
  return (
    <>
        <div className="bg-gray-100  rounded-2xl overflow-hidden hover:translate-y-2 transition duration-300 cursor-pointer">
            <img src={image} alt={title} className="w-full h-60 object-cover"/>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item, index) => (
                        <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">{item}</span>
                    ))}
                </div>
                <div className="flex gap-2">
                    <a href='#' className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">View Details</a>
                    <a href='#' className="flex-1 text-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">Source Code</a>
                </div>
            </div>

        </div>
    </>
  )
}

export default ProjectCard