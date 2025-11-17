import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import axios from 'axios';
import DataImage from '../data'; // Make sure this exports { Logo }

const contactData = [
  {
    icon: <FaGithub />,
    title: 'GitHub',
    href: 'https://github.com/WAPunsisiYemaniPerera',
    color: 'text-white',
    hoverBg: 'hover:bg-white/20',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yemani-perera-09b4b8211',
    color: 'text-[#0A66C2]',
    hoverBg: 'hover:bg-[#0A66C2]/20',
  },
  {
    icon: <FaInstagram />,
    title: 'Instagram',
    href: 'https://www.instagram.com/yemaa_perera?igsh=MTViMDI3MXQ2Z3Q1Mg==',
    color: 'text-[#E4405F]',
    hoverBg: 'hover:bg-[#E4405F]/20',
  },
  {
    icon: <FiMail />,
    title: 'Email',
    href: 'mailto:punsisiyemani18@gmail.com',
    color: 'text-[#64ffda]',
    hoverBg: 'hover:bg-[#64ffda]/20',
  },
  {
    icon: <FaFacebook />,
    title: 'Facebook',
    href: '#',
    color: 'text-[#1877F2]',
    hoverBg: 'hover:bg-[#1877F2]/20',
  },
  {
    icon: <FaXTwitter />,
    title: 'X (Twitter)',
    href: '#',
    color: 'text-white',
    hoverBg: 'hover:bg-white/20',
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube',
    href: '#',
    color: 'text-[#FF0000]',
    hoverBg: 'hover:bg-[#FF0000]/20',
  },
];

const Connect = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('/.netlify/functions/contact', formData);
      setStatus('Message Sent Successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error(error);
    }
  };

  return (
    <section id="connect" className="pt-16 pb-24 page-background text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-[#64ffda]">Touch</span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* =============== ORBITING SOCIAL RING =============== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] group">
              {/* Gentle Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/20 to-cyan-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" />

              {/* Static Logo in Center */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <img
                  src={DataImage.Logo}
                  alt="Yemani Perera"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-[#64ffda] shadow-2xl"
                />
              </div>

              {/* Rotating Ring */}
              <div className="absolute inset-0 rotating-ring group-hover:[animation-play-state:paused]">
                {contactData.map((item, index) => {
                  const angle = (index / contactData.length) * 360;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `rotate(${angle}deg) translateX(170px) rotate(-${angle}deg)`,
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 360 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className={`w-16 h-16 sm:w-20 sm:h-20 bg-[#112240]/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl ring-2 ring-slate-700 hover:ring-4 hover:ring-offset-4 hover:ring-offset-[#0a192f]/50 transition-all duration-500 ${item.color} ${item.hoverBg}`}
                      >
                        {React.cloneElement(item.icon, { size: 32 })}
                      </motion.div>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =============== CONTACT FORM =============== */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-[#112240] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-[#112240] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#ccd6f6] mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hey Yemani! I'd love to work together..."
                className="w-full bg-[#112240] border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'Sending...'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#64ffda] text-[#0a192f] font-bold py-4 rounded-lg hover:bg-[#52e6c2] transition-all duration-300 shadow-lg text-lg"
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status && !status.includes('Sending') && (
              <p
                className={`text-center font-medium ${
                  status.includes('Success') ? 'text-[#64ffda]' : 'text-red-400'
                }`}
              >
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>

      {/* Global CSS for the rotating animation */}
      <style jsx global>{`
        @keyframes rotate-ring {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotating-ring {
          animation: rotate-ring 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Connect;