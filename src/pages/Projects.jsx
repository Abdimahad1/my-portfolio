import React from "react";
import { motion } from "framer-motion";
import mlImg from "../assets/ml_project.png";
import lpgImg from "../assets/lpg_project.png";
import charityImg from "../assets/charity_project.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ML-Based Financial Risk Assessment",
      subtitle: "For Small Businesses in Somalia",
      desc: "A machine learning system that helps investors predict whether a business is worth investing in using financial risk analysis.",
      image: mlImg,
      tech: ["React", "Python", "Flask", "ML", "MongoDB", "NodeJS"],
      link: "https://ml-based-for-small-business-investments.onrender.com",
    },
    {
      id: 2,
      title: "LPG Delivery System",
      subtitle: "Real-Time Gas Tracking & Online Ordering",
      desc: "A Flutter app enabling safe LPG delivery with map tracking, vendor management, and online payments.",
      image: lpgImg,
      tech: ["Flutter", "NodeJS", "MongoDB", "Maps API"],
      link: "https://drive.google.com/file/d/1OskTnOUHZ-CRoRnVerjpbeH-kMMikpNa/view?usp=sharing",
    },
    {
      id: 3,
      title: "AL-HAQ Welfare Organization",
      subtitle: "Charity & Donation Platform",
      desc: "A responsive donation website with secure payment, easy management, and improved outreach.",
      image: charityImg,
      tech: ["React", "NodeJS", "MongoDB"],
      link: "https://www.al-haqwelfarefoundation.org/", 
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-white py-20 px-6 md:px-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center"
      >
        My Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.04 }}
            className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:border-purple-400/30 hover:shadow-purple-500/20 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="h-44 md:h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Project Content */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-purple-600">{project.title}</h3>
              <h4 className="text-sm text-pink-600 font-semibold">{project.subtitle}</h4>
              <p className="text-gray-700 text-sm leading-snug line-clamp-3">{project.desc}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-white px-2 py-1 rounded-full text-purple-600 border border-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;