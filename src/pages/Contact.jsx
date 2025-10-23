import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // make sure to install axios

const Contact = () => {
  const contactInfo = [
    { type: "Email", value: "engmaalik07@gmail.com", link: "mailto:engmaalik07@gmail.com" },
    { type: "Phone", value: "+252613797852", link: "tel:+252613797852" },
    { type: "Location", value: "Mogadishu, Somalia" },
  ];

  // State for form
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/contact/send", formData);
      setSuccess(res.data.message);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20 px-6 md:px-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 text-center"
      >
        Contact Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-purple-600 mb-4">Get in Touch</h3>
          <p className="text-gray-700 mb-6">
            Feel free to reach out to me via email, phone, or visit me in Mogadishu. I usually respond within 24 hours.
          </p>
          <ul className="space-y-3">
            {contactInfo.map((info, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="font-semibold text-pink-600 w-20">{info.type}:</span>
                {info.link ? (
                  <a href={info.link} className="text-gray-700 hover:text-purple-600 transition-colors">
                    {info.value}
                  </a>
                ) : (
                  <span className="text-gray-700">{info.value}</span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 bg-gray-50 rounded-xl p-6 shadow-lg border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-purple-600 mb-4">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone (Optional)"
              value={formData.phone}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (Optional)"
              value={formData.subject}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="bg-white border border-gray-300 rounded-md p-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 rounded-md hover:from-purple-700 hover:to-pink-600 transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-600 mt-2">{success}</p>}
            {error && <p className="text-red-600 mt-2">{error}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
