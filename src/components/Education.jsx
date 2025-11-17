import React from 'react';
import { motion } from 'framer-motion';

const journeyData = [
  {
    year: '2021',
    title: 'First Steps',
    description:
      'Started my coding journey with HTML, CSS, and JavaScript, building small projects and discovering a love for solving problems through code.',
  },
  {
    year: '2022 – Present',
    title: 'University Education',
    description:
      'Enrolled in the BSc (Hons) in Information Technology at Horizon Campus. Here, I’m learning all aspects of IT — from web development and databases to networking and software engineering — while diving deeper into machine learning and AI, which have become my true passion.',
  },
  {
    year: 'Now',
    title: 'Combining Passions',
    description:
      'Exploring how to combine web development and machine learning to build applications that are both intelligent and user-friendly.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="pt-12 pb-20 md:pt-16 md:pb-24 page-background text-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* ---------- Title ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16"
        >
          My Developer Journey
        </motion.h2>

        {/* ---------- Timeline Container ---------- */}
        <div className="max-w-4xl mx-auto relative">
          {/* Desktop vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-slate-700 h-full top-0" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {journeyData.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* ---------- MOBILE / TABLET (stacked) ---------- */}
                <div className="md:hidden">
                  <div className="bg-white/5 backdrop-blur-md p-5 sm:p-6 rounded-lg ring-1 ring-white/10 shadow-lg hover:ring-[#64ffda]/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 rounded-full bg-[#64ffda] border-2 border-[#112240]" />
                      <p className="text-[#64ffda] font-semibold text-sm">{item.year}</p>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[#ccd6f6] text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* ---------- DESKTOP (alternating sides) ---------- */}
                <div
                  className={`hidden md:flex items-center w-full ${
                    idx % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      idx % 2 === 0 ? 'pr-10 text-right' : 'pl-10 text-left'
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-md p-6 rounded-lg ring-1 ring-white/10 shadow-lg hover:ring-[#64ffda]/50 transition-all duration-300">
                      <p className="text-[#64ffda] font-semibold text-sm mb-1">
                        {item.year}
                      </p>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#ccd6f6] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#64ffda] border-4 border-[#112240] z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;