import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import profileImg from "../assets/hero.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-white py-20 px-8 md:px-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center"
      >
        About Me
      </motion.h2>

      {/* MAIN SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative w-64 h-64 md:w-80 md:h-80"
        >
          {/* Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute inset-0 rounded-full border-t-4 border-b-4 border-purple-400/30"
          ></motion.div>

          {/* Profile Image */}
          <motion.img
            src={profileImg}
            alt="Abdimahad Hussein"
            className="rounded-full object-cover w-full h-full shadow-lg border-4 border-gray-200"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>

        {/* RIGHT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 md:w-1/2"
        >
          {/* Who Am I */}
          <div>
            <h3 className="text-3xl font-bold text-purple-600 mb-3">Who Am I?</h3>
            <p className="text-gray-700 leading-relaxed text-base">
              I'm <span className="font-semibold text-purple-600">Abdimahad Hussein</span>, a creative problem-solver and software engineer who loves
              crafting meaningful user experiences. I build modern, high-performing web
              and mobile applications with a focus on design, speed, and accessibility.
            </p>
          </div>

          {/* What I Do */}
          <div>
            <h3 className="text-3xl font-bold text-pink-600 mb-3">What I Do?</h3>
            <p className="text-gray-600 leading-relaxed text-base">
              I specialize in turning ideas into functional digital products — blending
              creativity with technology. My workflow involves concept design, UI/UX
              prototyping, responsive development, and deployment using the latest
              frameworks and tools.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <SkillCard
              icon={<FaLaptopCode />}
              title="Web Development"
              desc="MERN Stack"
            />
            <SkillCard
              icon={<FaMobileAlt />}
              title="App Development"
              desc="Flutter & Node.js"
            />
            <SkillCard
              icon={<FaPalette />}
              title="UI/UX Design"
              desc="Figma Design"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Skill Card
const SkillCard = ({ icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.08, translateY: -5 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-gray-50 p-5 rounded-2xl shadow-lg hover:shadow-purple-500/20 flex flex-col items-center text-center gap-2 border border-gray-200 hover:border-purple-400/30 transition"
  >
    <div className="text-2xl text-purple-600">{icon}</div>
    <h4 className="text-base font-semibold text-gray-800">{title}</h4>
    <p className="text-gray-600 text-xs">{desc}</p>
  </motion.div>
);

export default About;