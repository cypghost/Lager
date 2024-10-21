import Image from "next/image";
import Link from "next/link";
import AvatarCircles from "@/components/ui/avatar-circles";
import { FiArrowRight } from "react-icons/fi";
import MissionCard from "@/components/About/MissionCard";
import FeatureCard from "@/components/About/FeatureCard";
import OfficeCard from "@/components/About/OfficeCard";
import TeamMemberCard from "@/components/About/TeamMemberCard";

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function about() {
  const avatarUrls = [
    "https://avatars.githubusercontent.com/u/16860528",
    "https://avatars.githubusercontent.com/u/20110627",
    "https://avatars.githubusercontent.com/u/106103625",
    "https://avatars.githubusercontent.com/u/59228569",
  ];

  const mission = [
    {
      icon: <RocketIcon className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "connect with audiences worldwide.",
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-primary" />,
      title: "Creator success",
      description: "Showcase your talent and earn commissions globally.",
    },
  ];

  const features = [
    {
      icon: <RocketIcon className="w-8 h-8" />,
      title: "Innovative",
      description: "Delivering forward-thinking solutions.",
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: "Adaptive",
      description: "Quickly adapting to market changes.",
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: "Collaborative",
      description: "Partnering with clients to reach their goals.",
    },
  ];

  const offices = [
    {
      location: "Washington",
      address: "Washington DC, USA",
      hours: "Mon - Fri: 9:00 AM - 5:00 PM",
      contactLink: "https://maps.app.goo.gl/9RWbrGSkAAoK4Da58",
    },
  ];

  const teamMembers = [
    {
      name: "Biruk Kefiyalew",
      role: "Owner",
      avatar: "/placeholder.svg",
      initials: "BK",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      name: "Nahom Haileselassie",
      role: "CEO",
      avatar: "/placeholder.svg",
      initials: "NH",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
    {
      name: "Biruk Mesfin",
      role: "Team Leader",
      avatar: "/placeholder.svg",
      initials: "BM",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        facebook: "https://facebook.com",
      },
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="w-full pl-0 lg:pl-4 pt-24">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          <div className="space-y-8 md:space-y-10 lg:pl-4">
            <div className="ml-4 px-4 py-2 rounded-full bg-black text-primary hover:text-secondary hover:bg-primary border-2 border-primary transition-all duration-300 inline-block">
              About Us
            </div>
            <h2 className="px-4 text-4xl md:text-6xl lg:text-7xl font-medium">
              This is Who We Are
            </h2>
            <p className="px-4 text-lg md:text-2xl text-muted">
              Our success is built on a dedicated team and vibrant community,
              leveraging creativity and collaboration to help businesses and
              creators connect, learn, and grow together.
            </p>
            <div className="flex p-4 gap-4 items-center">
              <Link
                href="https://t.me/+qZPRwmmIZZA1YWIx"
                className="flex items-center justify-center w-auto px-4 py-3 font-semibold rounded-md bg-primary text-secondary hover:text-accent hover:bg-destructive transition-all duration-300"
              >
                Join Our Community
                <FiArrowRight className="ml-2 animate-bounce" size={20} />
              </Link>
            </div>
            <div className="border-l-4 md:border-l-8 border-accent pl-4">
              <p className="text-lg md:text-2xl font-medium">
                We offer digital marketing, dropshipping, and print-on-demand
                solutions, helping designers earn commissions globally.
              </p>
              <div className="flex items-center justify-center lg:justify-start space-x-16 lg:space-x-8 py-4 px-4 bg-white rounded-3xl shadow-lg">
                <AvatarCircles numPeople={999} avatarUrls={avatarUrls} />
                <p className="text-sm md:text-base text-black w-full lg:w-60">
                  Be a part of a community that fosters growth and creativity.
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-[50vh] md:h-[60vh] lg:h-[90vh] overflow-hidden pb-10 lg:pb-0"
            // style={{
            //   clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
            // }}
          >
            <Image
              src="/WhoWeAre.png"
              alt="About Us"
              className="w-full h-full object-cover"
              width="800"
              height="450"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-12 md:py-0">
        <div className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-12">
          <div
            className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden"
            // style={{
            //   clipPath:
            //     "polygon(30% 0, 100% 0, 100% 70%, 70% 100%, 0 100%, 0 30%)",
            // }}
          >
            <Image
              src="/Empower.png"
              alt="About Us"
              className="w-full h-full object-cover"
              width={800}
              height={480}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="pl-4 lg:pl-16 space-y-6" id="mission">
            <div className="px-4 py-2 bg-black text-white rounded-full border-2 border-primary inline-block">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
              Empowering Creators
            </h2>
            <p className="text-muted text-lg md:text-xl">
              Our mission is to empower businesses and creators globally with
              innovative digital marketing, dropshipping, and print-on-demand
              solutions, driving growth and impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {mission.map((feature, index) => (
                <MissionCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-7xl font-medium text-center md:text-left">
              Prepare Today for a Brighter Tomorrow
            </h2>
            <div className="text-muted text-2xl w-3/4">
              <p>
                We take a client-first approach, collaborating to understand
                your unique needs and providing personalized solutions that
                drive success.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-12 md:py-24 lg:py-32 bg-muted text-accent">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <OfficeCard
                key={index}
                location={office.location}
                address={office.address}
                hours={office.hours}
                contactLink={office.contactLink}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto" id="team">
          <h2 className="text-4xl font-bold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BoltIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function RocketIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon(props: SVGProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
