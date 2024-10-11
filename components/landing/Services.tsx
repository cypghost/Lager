"use client";
import React from "react";
import { FaTools, FaLightbulb, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 }, // Title starts above and hidden
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }, // Slides down to original position
};

const leftSlide = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rightSlide = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -15, scale: 0.9 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 15,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function Services() {
  const services = [
    {
      title: "Design & Branding",
      description:
        "Create impactful visual identities that capture your brand’s essence.",
      icon: <FaLightbulb size={48} />,
      variant: leftSlide,
    },
    {
      title: "Development & Integration",
      description:
        "Build scalable and robust digital solutions to elevate your business.",
      icon: <FaTools size={48} />,
      variant: rightSlide,
    },
    {
      title: "Digital Marketing & Strategy",
      description:
        "Implement marketing strategies that expand your reach and maximize conversions.",
      icon: <FaRocket size={48} />,
      variant: rotateIn,
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-16 bg-muted text-zinc-500 w-full">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={titleVariants}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            Our Services
          </h1>
        </motion.div>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={descriptionVariants}
        >
          <p className="text-lg lg:text-xl">
            Helping your business grow with tailored solutions in design,
            development, and marketing.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
              variants={service.variant}
            >
              <div className="text-center flex flex-col items-center">
                <motion.div
                  className="p-4 bg-zinc-500 rounded-xl hover:bg-primary text-primary hover:text-muted mb-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
