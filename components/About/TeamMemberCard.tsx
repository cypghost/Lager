import React from "react";

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

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, role }) => {
  return (
    <div className="p-4 text-center bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex flex-col items-center justify-center space-y-4">
        <h3 className="text-2xl font-semibold mt-2">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
