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
    href: 'https://github.com/nambukara',
    color: 'text-black',
    hoverBg: 'hover:bg-black/20',
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thisen-nambukara-02464323b/',
    color: 'text-[#0A66C2]',
    hoverBg: 'hover:bg-[#0A66C2]/20',
  },
  {
    icon: <FaInstagram />,
    title: 'Instagram',
    href: 'https://www.instagram.com/thisen_nambukara/',
    color: 'text-[#E4405F]',
    hoverBg: 'hover:bg-[#E4405F]/20',
  },
  {
    icon: <FiMail />,
    title: 'Email',
    href: 'mailto:thisennambukara@gmail.com',
    color: 'text-[#FF0000]',
    hoverBg: 'hover:bg-[#64ffda]/20',
  },
  {
    icon: <FaFacebook />,
    title: 'Facebook',
    href: 'https://web.facebook.com/thisen.melaka.1',
    color: 'text-[#1877F2]',
    hoverBg: 'hover:bg-[#1877F2]/20',
  },
  {
    icon: <FaXTwitter />,
    title: 'X (Twitter)',
    href: '#',
    color: 'text-black',
    hoverBg: 'hover:bg-black/20',
  },
  {
    icon: <FaYoutube />,
    title: 'YouTube',
    href: 'https://www.youtube.com/@ThisenNambukara',
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
    <section id="contact" className="pt-16 pb-24 page-background  min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-blue-600">Touch</span>
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
             
              {/* Static Logo in Center */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <img
                  src={DataImage.Logo}
                  alt="Yemani Perera"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover "
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
                        transform: `rotate(${angle}deg) translateX(170px) rotate(-${angle}deg)`

                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 360 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                       className={`orbit-icon w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${item.color}`}
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
              <label className="block text-s font-semibold text-black mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-white border border-slate-700 rounded-lg px-4 py-3 text-black placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>

            <div>
              <label className="block text-s font-semibold text-black mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-white border border-slate-700 rounded-lg px-4 py-3 text-black placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
              />
            </div>

            <div>
              <label className="block text-s font-semibold text-black mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Hey Yemani! I'd love to work together..."
                className="w-full bg-white border border-slate-700 rounded-lg px-4 py-3 text-black placeholder-[#8892b0] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'Sending...'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg text-lg"
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status && !status.includes('Sending') && (
              <p
                className={`text-center font-medium ${
                  status.includes('Success') ? 'text-[#64ffda]' : 'text-black'
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