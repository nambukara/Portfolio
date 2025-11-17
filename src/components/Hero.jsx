import React from "react";
import DataImage from "../data";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 grid-cols-1"
    >
      {/* LEFT SIDE */}
      <div>
        

        {/* Hero Text */}
        <h1 className="text-5xl font-bold mb-6">Hi, I'm <span className="text-blue-600">Thisen Nambukara </span></h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
          Full Stack Developer
        </h2>
        <p className="text-gray-500 mb-4">
          I'm a Software engineering Undergraduate passionate about web development and software engineering. This site showcases my projects and ideas, blending technical skills with creative design to creat user-friendly experie
        </p>
        <p className="text-gray-500 mb-4">
          Join me as I explore how technology solves problems and improves lives. Let's build something great together!
        </p>

        {/* Buttons + Social Icons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Download CV */}
          <a href=""><button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Download CV
          </button></a>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:example@gmail.com"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition shadow-lg hover:scale-110"
              >
            
              <MdEmail size={22} />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition shadow-lg hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="p-3 rounded-full bg-black text-white hover:bg-gray-700 transition shadow-lg hover:scale-110"
            >
              <FaGithub size={22} />
            </a>

           
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <img
        src={DataImage.HeroImage}
        alt="hero"
        className="w-[500px] md:ml-auto mx-auto mt-10 md:mt-0"
      />
      
    </motion.div>
  );
};

export default Hero;
