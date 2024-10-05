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
    <div className="flex items-start p-4 gap-4 bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
      <div className="flex items-center justify-center p-4 bg-muted rounded-full">
        {icon}
      </div>
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
