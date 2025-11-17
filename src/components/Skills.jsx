import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiGit,
  SiDocker,
  SiFigma,
  SiJavascript,
} from 'react-icons/si';

const allSkills = [
  // Frontend
  { name: 'React', icon: <SiReact className="text-[#61DAFB]" />, category: 'frontend' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" />, category: 'frontend' },
  { name: 'Vite', icon: <SiVite className="text-[#646CFF]" />, category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: <SiNodedotjs className="text-[#339933]" />, category: 'backend' },
  { name: 'Express.js', icon: <SiExpress className="text-white" />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" />, category: 'backend' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" />, category: 'backend' },

  // ML / AI
  { name: 'Python', icon: <SiPython className="text-[#3776AB]" />, category: 'ml' },
  { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" />, category: 'ml' },
  { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" />, category: 'ml' },

  // Tools
  { name: 'Git', icon: <SiGit className="text-[#F05032]" />, category: 'tools' },
  { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" />, category: 'tools' },
  { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" />, category: 'tools' },
  { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" />, category: 'tools' },
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
    <section id="skills" className="pt-16 pb-24 page-background text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-[#64ffda]">Technologies</span>
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
                  ? 'bg-[#64ffda] text-[#0a192f]'
                  : 'bg-white/5 backdrop-blur-md text-[#ccd6f6] ring-1 ring-white/20 hover:bg-white/10 hover:ring-[#64ffda]/50'
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
              <div className="absolute inset-0 bg-[#64ffda]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 ring-1 ring-white/10 hover:ring-[#64ffda]/60 hover:bg-white/10 transition-all duration-400 h-full shadow-xl">
                <div className="text-5xl sm:text-6xl transition-transform duration-400 group-hover:scale-125">
                  {skill.icon}
                </div>
                <p className="text-sm sm:text-base font-semibold text-center text-[#ccd6f6] group-hover:text-white transition-colors">
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