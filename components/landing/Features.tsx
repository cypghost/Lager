"use client";
import React from "react";
import Image from "next/image";

export default function Feature() {
  const features = [
    {
      title: "Feature One",
      description:
        "This is a brief description of Feature One, highlighting its unique value.",
      imageUrl: "/placeholder.svg",
    },
    {
      title: "Feature Two",
      description:
        "This is a brief description of Feature Two, providing an overview of its benefits.",
      imageUrl: "/placeholder.svg",
    },
    {
      title: "Feature Three",
      description:
        "This is a brief description of Feature Three, explaining why it's beneficial.",
      imageUrl: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-16 text-gray-900">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          Our Features
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Discover the powerful features that help streamline your workflow and
          enhance your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300 p-6"
          >
            <div className="relative w-full h-64">
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
            <div className="absolute inset-0 rounded-lg shadow-white-fade"></div>{" "}
          </div>
        ))}
      </div>
      {/* Styles for Custom Shadows */}
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
