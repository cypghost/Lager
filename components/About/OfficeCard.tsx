import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface OfficeCardProps {
  location: string;
  address: string;
  hours: string;
  contactLink: string;
}

const LocationIcon = () => (
  <svg
    className="w-12 h-12"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 2C8.68629 2 6 4.68629 6 8C6 10.8284 9.41828 15.1857 11.294 18.294C11.6831 18.9438 12.3169 18.9438 12.706 18.294C14.5817 15.1857 18 10.8284 18 8C18 4.68629 15.3137 2 12 2ZM12 10.5C10.6193 10.5 9.5 9.38071 9.5 8C9.5 6.61929 10.6193 5.5 12 5.5C13.3807 5.5 14.5 6.61929 14.5 8C14.5 9.38071 13.3807 10.5 12 10.5Z"
    />
  </svg>
);

// OfficeCard Component
export default function OfficeCard({
  location,
  address,
  hours,
  contactLink,
}: OfficeCardProps) {
  return (
    <div className="p-6 text-center space-y-4 bg-zinc-800 text-accent rounded-lg shadow-lg">
      <div className="flex justify-center items-center text-4xl text-primary">
        <LocationIcon />
      </div>
      <h3 className="text-2xl font-semibold">{location}</h3>
      <p className="text-muted-foreground">{address}</p>
      <p className="text-muted-foreground">{hours}</p>
      <Link
        href={contactLink}
        className="flex items-center justify-center mx-auto px-4 py-2 space-x-2 text-primary font-semibold"
      >
        <span>Contact Us</span>
        <div className="w-10 h-10 bg-primary text-muted rounded-full flex items-center justify-center">
          <FiArrowRight size={20} />
        </div>
      </Link>
    </div>
  );
}
