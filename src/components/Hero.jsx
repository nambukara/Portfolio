// components/Hero.jsx
import React from "react";
import DataImage from "../data";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="pt-24 md:pt-10 min-h-screen flex items-center">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold mb-6">Hi, I'm <span className="text-blue-600">Thisen Nambukara </span></h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-4 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            I'm a Software Engineering undergraduate passionate about web development and software engineering. This site showcases my projects and ideas, blending technical skills with creative design to create user-friendly experiences.
          </p>
          <p className="text-gray-600 mb-8">
            Join me as I explore how technology solves problems and improves lives. Let's build something great together!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="/path-to-your-cv.pdf" download>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
                Download CV
              </button>
            </a>

            <div className="flex gap-4">
              <a href="mailto:thisennambukara@gmail.com" className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition transform hover:scale-110">
                <MdEmail size={26} />
              </a>
              <a href="https://www.linkedin.com/in/thisen-nambukara-02464323b/" className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition transform hover:scale-110">
                <FaLinkedin size={26} />
              </a>
              <a href="https://github.com/nambukara" className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition transform hover:scale-110">
                <FaGithub size={26} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={DataImage.HeroImage}
            alt="Thisen Nambukara"
            className="w-[600px] md:ml-auto mx-auto  md:mt-0"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;