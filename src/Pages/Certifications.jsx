import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import { certificates } from "../data"; 




const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="certificates" className="pt-26 pb-24 page-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-blue-600">Achievements</span>
          </h2>
          <p className="text-[#8892b0] text-lg max-w-2xl mx-auto">
            Verified credentials that prove my commitment to continuous learning
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden ring-1 ring-white/10 hover:ring-[#64ffda]/50 transition-all duration-500 shadow-xl"
            >
              {/* Certificate Image */}
              <div
                onClick={() => setSelectedImage(cert.image)}
                className="cursor-zoom-in overflow-hidden"
              >
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  whileHover={{ scale: 1.08 }}
                />
              </div>

              {/* Overlay Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between">
                  <FiAward className="text-blue-600 text-2xl mt-1" />
                  {cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-black group-hover:text-black transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[#8892b0] text-sm ">
                  {cert.issuer}
                </p>
                <p className="text-blue-600 text-sm font-medium">
                  {cert.date}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        >
          <motion.img
            src={selectedImage}
            alt="Certificate Full View"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-4xl font-light hover:text-[#64ffda] transition-colors"
          >
            ×
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;