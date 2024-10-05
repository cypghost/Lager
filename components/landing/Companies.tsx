"use client";
import React from "react";
import Image from "next/image";

const companies = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

export default function Companies() {
  return (
    <section className="relative w-full py-4">
      <div className="absolute top-0 left-0 h-full w-16 pointer-events-none z-10"></div>
      <div className="overflow-hidden relative">
        <div className="flex items-center justify-center space-x-8 animate-scroll lg:space-x-16 hover:animate-pause">
          {companies.concat(companies).map((logo, index) => (
            <div
              key={index}
              className="min-w-[150px] lg:min-w-[200px] h-auto flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                width={70}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
