"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import farmAnimation from "../../public/animations/farm.json";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Connecting <span className="text-green-700">Farmers</span> & Brokers
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            AgroBridge helps farmers showcase their produce and connect directly
            with buyers for a sustainable and fair marketplace.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="/services/markets"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 transition-colors"
            >
              Explore Now
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl border border-green-600 text-green-700 font-semibold hover:bg-green-50 transition-colors"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <Lottie animationData={farmAnimation} loop={true} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
