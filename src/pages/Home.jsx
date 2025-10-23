import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import heroImg from "../assets/hero.jpg";

const Home = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-purple-100 flex items-center justify-center px-6 md:px-12 overflow-hidden pt-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col space-y-5 md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* TYPING NAME & ROLE */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              <ReactTyped
                strings={[
                  "Abdimahad Hussein",
                  "Software Developer",
                  "UI/UX Designer",
                  "Frontend Engineer",
                  "Tech Innovator",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed text-lg max-w-lg">
            I'm a passionate <span className="font-semibold text-purple-600">UI/UX Designer</span> and
            <span className="font-semibold text-purple-600"> Developer</span> based in Mogadishu, Somalia.
            I craft interactive, beautiful, and user-friendly web experiences through creative code and elegant design.
          </p>

          {/* BUTTON */}
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-md shadow-md hover:shadow-xl transition w-fit text-sm font-medium"
          >
            Say Hello!
          </motion.button>

          {/* STATS SECTION WITH TYPING LOOP */}
          <motion.div
            className="flex gap-10 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                <ReactTyped
                  strings={["3 Y.", "5 Y.", "3 Y."]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </p>
              <p className="text-gray-600 text-sm">Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                <ReactTyped
                  strings={["40+", "45+", "40+"]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </p>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                <ReactTyped
                  strings={["25", "30", "25"]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </p>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE WITH 3D EFFECT */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-purple-100 to-pink-50 rounded-2xl shadow-2xl flex items-center justify-center"
            whileHover={{ rotateY: 10, rotateX: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
          >
            <motion.img
              src={heroImg}
              alt="Abdimahad Hussein"
              className="rounded-2xl w-64 md:w-80 object-cover shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-400/30 to-pink-400/10 rounded-2xl blur-2xl -z-10"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;