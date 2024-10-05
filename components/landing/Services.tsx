import React from "react";
import { FaTools, FaLightbulb, FaRocket } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Development",
      description:
        "High-quality development services that build robust and scalable solutions.",
      icon: <FaTools size={48} />,
    },
    {
      title: "Creative Design",
      description:
        "Innovative and engaging designs that communicate your brand’s story.",
      icon: <FaLightbulb size={48} />,
    },
    {
      title: "Marketing",
      description:
        "Effective marketing strategies to boost your brand’s visibility and reach.",
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
          We offer a range of services to help your business grow and succeed in
          today’s digital landscape.
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
