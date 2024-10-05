import React from "react";

export default function HowItWorks() {
  // Define steps data for the How It Works section
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create an account to get started. It’s quick and easy!",
    },
    {
      number: 2,
      title: "Choose Your Plan",
      description: "Select a plan that suits your needs and budget.",
    },
    {
      number: 3,
      title: "Start Using the Platform",
      description: "Access the features and start managing your business.",
    },
  ];

  return (
    <section className="py-16 px-4 w-full text-gray-800">
      <div className="text-left max-w-3xl mb-12">
        <div className="inline-block px-6 py-2 bg-primary rounded-full text-lg mb-4">
          How It Works
        </div>
        <h1 className="text-3xl md:text-6xl font-semibold mb-4">
          Getting Started Is Simple
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Follow these easy steps to get up and running with our platform. It’s
          designed to be user-friendly and efficient, so you can focus on what
          matters most.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg border flex flex-col items-start gap-y-4 transform transition-all hover:scale-105 duration-300"
          >
            <div className="flex items-center justify-center gap-x-4">
              <h1 className="px-4 py-2 bg-primary text-secondary text-3xl font-bold rounded-full">
                {step.number}
              </h1>
              <h2 className="text-xl font-semibold">{step.title}</h2>
            </div>
            <div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
