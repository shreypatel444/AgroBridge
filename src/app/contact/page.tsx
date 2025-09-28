"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      alert("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 via-white to-green-200 px-6 py-16">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-72 h-72 bg-green-300 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-64 h-64 bg-green-500 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -80, 80, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-10 backdrop-blur-md"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-green-700 mb-8">
          Get in Touch 🌿
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We connect <span className="font-semibold">farmers</span> and{" "}
          <span className="font-semibold">brokers</span> seamlessly.  
          Share your queries or feedback below!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Inputs with label above */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#16a34a" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl shadow-lg transition-colors disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactPage;
