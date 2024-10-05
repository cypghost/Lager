import React from "react";
import { FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";
import Image from "next/image";

// TypeScript interfaces for props
interface Socials {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  avatar: string;
  socials: Socials;
}

// Social media icon map
const socialIcons = {
  linkedin: <FiLinkedin size={20} />,
  twitter: <FiTwitter size={20} />,
  facebook: <FiFacebook size={20} />,
};

// Component for rendering social media icons
const SocialIcons: React.FC<{ socials: Socials }> = ({ socials }) => (
  <div className="flex space-x-4 mt-4">
    {Object.entries(socials).map(([platform, url]) => (
      <a
        key={platform}
        href={url!}
        aria-label={platform}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-secondary transition-colors duration-300"
      >
        {socialIcons[platform as keyof Socials]}
      </a>
    ))}
  </div>
);

// Component for rendering a team member card
const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  avatar,
  socials,
}) => {
  return (
    <div className="p-4 text-center bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Container */}
      <div className="w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden">
        <Image
          src={avatar}
          alt={name}
          width={400}
          height={400}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Card Info Section */}
      <div className="p-6 flex flex-col items-center justify-center space-y-4">
        <h3 className="text-2xl font-semibold mt-2">{name}</h3>
        <p className="text-muted-foreground">{role}</p>

        {/* Social Icons */}
        <SocialIcons socials={socials} />
      </div>
    </div>
  );
};

export default TeamMemberCard;
