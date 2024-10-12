"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const answerVariants = {
  hidden: { opacity: 0, height: 0, marginTop: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    marginTop: 24,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function FAQs() {
  const faqs = [
    {
      question: "What is Lager Digital Marketing?",
      answer:
        "Lager Digital Marketing is a platform offering digital marketing, dropshipping, and print-on-demand solutions to help businesses and creators grow their online presence.",
    },
    {
      question: "How can graphic designers benefit from your platform?",
      answer:
        "Graphic designers can showcase their work on our platform and earn commissions for every sale made using their designs.",
    },
    {
      question: "How can I join your Telegram community?",
      answer:
        "You can join our Telegram community by connecting with us through our social media channels across the website.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We provide digital marketing, dropshipping, and print-on-demand services. Our upcoming initiatives include community-building and bringing success.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply Join our community, and we'll guide you through the steps to access our services.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-44 px-4 bg-gray-50 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="space-y-6"
        >
          <h1 className="text-3xl lg:text-6xl font-bold mb-4">
            Do you have any questions?
          </h1>
          <p className="text-lg lg:text-xl text-gray-600">
            Below you’ll find answers to the most common questions you may have
            about Lager Digital Marketing.
          </p>
          <p className="text-lg lg:text-xl text-gray-600">
            If you still can’t find the answer you’re looking for, just{" "}
            <Link
              className="text-primary font-semibold hover:text-secondary transition-all"
              href="mailto:lagerdrop@gmail.com"
            >
              Contact us
            </Link>
            .
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-10"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 pb-8"
              initial="visible"
              animate={activeIndex === index ? "visible" : "hidden"}
            >
              <button
                className="w-full text-left text-lg font-medium text-gray-700"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <motion.span
                  className="float-right transition-transform duration-300"
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                >
                  ▼
                </motion.span>
              </button>
              <motion.div
                initial="hidden"
                animate={activeIndex === index ? "visible" : "hidden"}
                variants={answerVariants}
                className="overflow-hidden"
              >
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
