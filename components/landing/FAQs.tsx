"use client";
import React, { useState } from "react";

export default function FAQs() {
  // Array of FAQ items
  const faqs = [
    {
      question: "What is Nivia Platform Online Advertising?",
      answer:
        "Nivia Platform Online Advertising is an all-in-one platform that provides tools and resources to help you manage and optimize your online ads effectively.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply sign up on the platform, choose your plan, and start setting up your campaigns with our easy-to-use dashboard and tutorials.",
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer services such as campaign management, analytics, ad creation, and optimization across various online advertising platforms.",
    },
    {
      question: "How can I learn more?",
      answer:
        "Visit our Facebook Google Advertising Guides Academy for detailed tutorials and guides. You can also reach out to our support team.",
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
            on Nivia Platform Online Advertising. Also, please feel free to
            check out our Facebook Google Advertising Guides Academy.
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
