"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

// Animation variants for the section title and description
const textVariants = {
  hidden: { opacity: 0, y: 20 }, // Initial state: below and transparent
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Final state: fully visible and at its original position
};

// Flip animation variants for each step card
const flipVariants = {
  hidden: { opacity: 0, rotateY: -90, scale: 0.8 }, // Start rotated and scaled down
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  }, // Flip to original position and scale
};

// Animation variants for staggered appearance of step cards
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Stagger each step card animation by 0.3 seconds
    },
  },
};

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Join Our Telegram Channel",
      description: "Sign up and become part of our community on Telegram.",
    },
    {
      number: 2,
      title: "Stay Updated",
      description:
        "Receive updates, participate in discussions, and access exclusive content.",
    },
    {
      number: 3,
      title: "Engage & Grow",
      description:
        "Learn from short courses, showcase your talents, and explore opportunities to collaborate.",
    },
  ];

  return (
    <section className="py-16 px-4 w-full text-gray-800">
      <div className="container mx-auto">
        <motion.div
          className="text-left max-w-3xl mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          <div className="inline-block px-6 py-2 bg-primary rounded-full text-lg mb-4">
            How It Works
          </div>
          <h1 className="text-3xl md:text-6xl font-semibold mb-4">
            Getting Started Is Simple
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Follow these easy steps to get up and running with our platform.
            Connect with us on Telegram and take the next step in your
            professional journey, so you can focus on what matters most.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg border flex flex-col items-start gap-y-4 transform transition-all hover:scale-105 duration-300"
              variants={flipVariants}
            >
              <div className="flex items-center justify-center gap-x-4">
                <motion.h1
                  className="px-4 py-2 bg-primary text-secondary text-3xl font-bold rounded-full"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.h1>
                <h2 className="text-xl font-semibold">{step.title}</h2>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
