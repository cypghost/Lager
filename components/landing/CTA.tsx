import React from "react";
import { FiArrowRight } from "react-icons/fi"; // Using react-icons for the arrow

export default function CTA() {
  return (
    <section className="relative py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-16 bg-gray-100 rounded-lg overflow-hidden text-destructive w-full">
      <div className="relative container mx-auto bg-primary flex flex-col lg:flex-row items-center justify-between py-6 lg:py-10 px-12 lg:px-20 rounded-3xl space-y-8 lg:space-y-0 lg:space-x-16 shadow-lg">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-sm sm:text-md lg:text-lg max-w-md mx-auto lg:mx-0">
            Subscribe to get access to exclusive content, tips, and strategies
            that will help you grow your business.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full lg:w-1/2 space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-grow px-4 py-3 text-gray-800 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
          />
          <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-destructive transition-all duration-300">
            Subscribe
            <FiArrowRight className="ml-2 animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
