"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const inputVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export default function CTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-16 bg-gray-100 rounded-lg overflow-hidden text-destructive w-full"
    >
      <div className="relative container mx-auto bg-primary flex flex-col lg:flex-row items-center justify-between py-6 lg:py-10 px-12 lg:px-20 rounded-3xl space-y-8 lg:space-y-0 lg:space-x-16 shadow-lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Ready to Join Our Community and Grow Your Skills?
          </h2>
          <p className="text-sm sm:text-md lg:text-lg max-w-md mx-auto lg:mx-0">
            Subscribe to stay updated on our latest offerings, exclusive
            resources, and opportunities to connect and learn.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col sm:flex-row items-center w-full lg:w-1/2 space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-grow px-4 py-3 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
            variants={inputVariants}
          />
          <motion.button
            className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-destructive transition-all duration-300"
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
          >
            Subscribe
            <FiArrowRight className="ml-2" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}
