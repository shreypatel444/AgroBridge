"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-6 lg:px-24">
      {/* Header Section with Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-green-700 mb-12"
      >
        About Us
      </motion.h1>

      {/* Hero Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
          We are a <span className="font-semibold text-green-700">bridge between farmers and brokers</span>,
          simplifying agriculture trade, ensuring fair prices, and building trust
          through technology.
        </p>
      </motion.div>

      {/* Problem Section */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold text-green-700 mb-4">The Problem</h2>
          <p className="text-gray-600 leading-relaxed">
            Farmers often struggle to get fair prices for their produce due to
            lack of direct access to markets, price manipulation, and dependency
            on middlemen. On the other hand, brokers face difficulties in
            discovering genuine farmers and ensuring consistent supply.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-green-600 text-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"
        >
          <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
          <p className="leading-relaxed">
            We connect farmers directly with brokers through a transparent
            digital platform. Farmers receive better pricing and wider market
            access, while brokers gain reliable and verified connections,
            reducing risks and ensuring smoother trade.
          </p>
        </motion.div>
      </div>

      {/* Vision / Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-5xl mx-auto mt-20 text-center"
      >
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          To create a sustainable and transparent agricultural ecosystem where
          every farmer gets fair value, and every broker has trusted access to
          quality produce.
        </p>
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Empower farmers with technology, strengthen broker-farmer
          relationships, and build a future where agriculture is profitable and
          transparent for everyone involved.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
