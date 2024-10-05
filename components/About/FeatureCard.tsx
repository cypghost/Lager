import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start overflow-hidden gap-6 transform transition-all duration-300 p-6 hover:text-green-300">
      <div className="flex items-center justify-center rounded-md p-6 bg-gray-200 hover:bg-muted text-muted hover:text-primary">
        {icon}
      </div>
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-xl text-muted">{description}</p>
      </div>
    </div>
  );
}
