"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

export default function Feature() {
  const features = [
    {
      title: "Showcase Your Creativity",
      description: "Display your designs and earn commissions on every sale.",
      imageUrl: "/Creativity.png",
    },
    {
      title: "Global Reach",
      description:
        "Leverage our dropshipping and print-on-demand services to reach customers worldwide.",
      imageUrl: "/Global.png",
    },
    {
      title: "Community & Growth",
      description:
        "Join our Telegram channel for courses, collaborations, and career opportunities.",
      imageUrl: "/Community.png",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-16 text-gray-900">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <Typewriter
              words={["Our Features", "Building Digital Solution"]}
              loop={true}
              cursor
              cursorStyle="."
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-lg lg:text-xl text-gray-600">
            Explore how Lager Digital Marketing empowers designers and
            businesses to thrive.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300 p-6"
              variants={cardVariants}
            >
              <div className="relative w-full h-80">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-center">
                <h2 className="text-2xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-600">{feature.description}</p>
              </div>
              <div className="absolute inset-0 rounded-lg shadow-white-fade"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style jsx>{`
        /* Custom Box Shadow */
        .shadow-custom {
          box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.6),
            0px 10px 20px rgba(0, 0, 0, 0.1);
        }

        /* White Shadow Gradient */
        .shadow-white-fade {
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.5) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          z-index: -1;
        }
      `}</style>
    </section>
  );
}
