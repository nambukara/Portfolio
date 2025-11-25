import React, { useState } from 'react';
import { motion } from 'framer-motion';
 import { FaJava } from 'react-icons/fa';
import {
  SiReact,
  SiTailwindcss,
  SiPython,
  SiGit,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiPhp,SiBootstrap,
  SiGithub

 
  

 
} from 'react-icons/si';

const allSkills = [
  // Frontend
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'frontend' },
  { name: 'HTML5', icon: <SiHtml5 className="text-[#E34F26]" />, category: 'frontend' },
  { name: 'CSS3', icon: <SiCss3 className="text-[#1572B6]" />, category: 'frontend' },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-[#7952B3]" />, category: 'frontend' },
 

  // Backend
  { name: 'Java', icon: <FaJava className="text-[#007396]" />, category: 'backend' },
  { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" />, category: 'backend' },
  { name: 'PHP', icon: <SiPhp className="text-[#777BB4]" />, category: 'backend' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, category: 'tools' },
  
  // ML / AI
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, category: 'ml' },
 

  // Tools
  { name: 'GitHub', icon: <SiGithub className="text-[#181717]" />, category: 'tools' },
  { name: 'Git', icon: <SiGit className="text-[#F05032]" />, category: 'tools' },
  { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" />, category: 'tools' },
  
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'ml', label: 'ML / AI' },
  { id: 'tools', label: 'Tools' },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredSkills =
    activeFilter === 'all'
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="pt-16 pb-24 page-background">
      <div className="container mx-auto px-4 sm:px-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-blue-600">Technologies</span>
          </h2>
          <p className="text-[#8892b0] text-lg">
            Tools and frameworks I use every day
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 backdrop-blur-md text-black ring-1 ring-white/20 hover:bg-white/10 hover:ring-blue-600 '
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid - Animated Layout */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -12, scale: 1.1 }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 ring-1 ring-white/10 hover:ring-blue-600/60 hover:bg-blue-600/20 transition-all duration-400 h-full shadow-xl">
                <div className="text-5xl sm:text-6xl transition-transform duration-400 group-hover:scale-125">
                  {skill.icon}
                </div>
                <p className="text-sm sm:text-base font-semibold text-center text-black group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;