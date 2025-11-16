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
        <h1 className="text-5xl font-bold mb-6">Hi, I'm Thisen Nambukara</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 typewriter">
          Full Stack Developer
        </h2>
        <p className="text-base mb-6 opacity-50">
          I'm a Software engineering Undergraduate passionate about web development and software engineering. This site showcases my projects and ideas, blending technical skills with creative design to creat user-friendly experie
        </p>
        <p className="text-base mb-6 opacity-50">
          Join me as I explore how technology solves problems and improves lives. Let's build something great together!
        </p>

        {/* Buttons + Social Icons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          {/* Download CV */}
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Download CV
          </button>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:example@gmail.com"
              className="p-3 rounded-full bg-white/10 text-white hover:bg-blue-600 transition shadow-lg hover:scale-110"
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
              className="p-3 rounded-full bg-white/10 text-white hover:bg-gray-700 transition shadow-lg hover:scale-110"
            >
              <FaGithub size={22} />
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg hover:scale-110"
            >
              <FaFacebook size={22} />
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="p-3 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white hover:opacity-80 transition shadow-lg hover:scale-110"
            >
              <FaInstagram size={22} />
            </a>

            {/* Twitter */}
            <a
              href="#"
              className="p-3 rounded-full bg-blue-400 text-white hover:bg-blue-500 transition shadow-lg hover:scale-110"
            >
              <FaTwitter size={22} />
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition shadow-lg hover:scale-110"
            >
              <FaYoutube size={22} />
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
