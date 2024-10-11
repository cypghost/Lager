"use client";
import React, { useState } from "react";

export default function FAQs() {
  // Array of FAQ items
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
        "You can join our Telegram community by signing up on our website or following the link provided in our contact section.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We provide digital marketing, dropshipping, and print-on-demand services. Our upcoming initiatives include community-building and educational courses for aspiring entrepreneurs.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up on our platform, and we'll guide you through the steps to access our services and connect with our community.",
    },
  ];

  // Define the type for the activeIndex state, which is either a number or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function to toggle the active index
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-44 px-4 bg-gray-50 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h1 className="text-3xl lg:text-6xl font-bold mb-4">
            Do you have any questions?
          </h1>
          <p className="text-lg lg:text-xl text-gray-600">
            Below you’ll find answers to the most common questions you may have
            about Lager Digital Marketing.
          </p>
          <p className="text-lg lg:text-xl text-gray-600">
            If you still can’t find the answer you’re looking for, just{" "}
            <span className="text-primary font-semibold">Contact us</span>.
          </p>
        </div>
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <button
                className="w-full text-left text-lg font-medium text-gray-700"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`float-right transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <p className="mt-6 text-gray-600 transition-all duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
