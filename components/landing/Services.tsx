import React from "react";
import { FaTools, FaLightbulb, FaRocket } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Design & Branding",
      description:
        "Create impactful visual identities that capture your brand’s essence.",
      icon: <FaLightbulb size={48} />,
    },
    {
      title: "Development & Integration",
      description:
        "Build scalable and robust digital solutions to elevate your business.",
      icon: <FaTools size={48} />,
    },
    {
      title: "Digital Marketing & Strategy",
      description:
        "Implement marketing strategies that expand your reach and maximize conversions.",
      icon: <FaRocket size={48} />,
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-16 bg-muted text-zinc-500">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Our Services
        </h1>
        <p className="text-lg lg:text-x">
          Helping your business grow with tailored solutions in design,
          development, and marketing.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="rounded-xl">
            <div className="text-center flex flex-col items-center ">
              <div className="p-4 bg-zinc-500 rounded-xl hover:bg-primary text-primary hover:text-muted mb-4">
                {service.icon}
              </div>
              <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
