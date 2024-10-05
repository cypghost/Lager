import React from "react";
import Image from "next/image";
import AvatarCircles from "@/components/ui/avatar-circles";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

export default function Hero() {
  return (
    <section className="w-full text-white flex flex-col items-start bg-muted overflow-hidden">
      <div className="container lg:min-h-screen mx-auto flex flex-col items-start justify-between space-y-12 lg:space-y-0 py-24 lg:py-32">
        <div className="flex flex-col space-y-6 xl:w-1/2 text-left items-start px-4">
          <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold leading-tight">
            Empower Your Business with{" "}
            <span className="text-primary">Lager</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-lg lg:mx-0">
            Discover the tools and resources that help you streamline your
            workflow, boost your productivity, and scale your business
            effortlessly.
          </p>
          <button className="px-6 py-3 md:px-8 md:py-4 bg-primary text-black font-semibold rounded-lg hover:bg-secondary transition-all">
            Get Started
          </button>
          <div className="flex items-center justify-center lg:justify-start space-x-8 mt-6 py-4 px-4 bg-white rounded-3xl">
            <AvatarCircles numPeople={999} avatarUrls={avatarUrls} />
            <p className="text-base lg:text-md text-black w-60">
              Join thousands of users in using the Lager platform!
            </p>
          </div>
        </div>
        <div className="hidden w-full lg:w-1/2 xl:flex justify-end overflow-hidden">
          <div className="absolute bottom-0 left-[45%] top-32 w-[56%] 2xl:w-[55%] h-[75%] 2xl:h-[80%]">
            <Image
              src="/hero.png"
              alt="Lager Platform"
              layout="fill"
              objectFit="cover"
              objectPosition="right center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
