"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AvatarCircles from "@/components/ui/avatar-circles";
import { Button } from "../ui/button";
import Link from "next/link";

const avatarUrls = [
  "https://avatars.githubusercontent.com/u/16860528",
  "https://avatars.githubusercontent.com/u/20110627",
  "https://avatars.githubusercontent.com/u/106103625",
  "https://avatars.githubusercontent.com/u/59228569",
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function Hero() {
  return (
    <section className="w-full text-white flex flex-col items-start bg-muted overflow-hidden">
      <div className="container lg:min-h-screen mx-auto flex items-start justify-between py-24 lg:py-32">
        <div className="flex flex-col space-y-6 xl:w-1/2 text-left items-start px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="space-y-2"
          >
            <h1 className="text-3xl md:text-5xl lg:text-8xl font-bold leading-tight">
              Empower. Create. Grow with{" "}
              <span className="text-primary">Lager</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-lg lg:mx-0">
              Lager Digital Marketing empowers graphic designers to showcase
              their work and earn commissions. We operate globally, offering
              dropshipping and print-on-demand services.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <Button className="px-6 py-3 md:px-8 md:py-6 bg-primary text-black font-semibold rounded-lg hover:bg-accent transition-all">
              {/* <Link href="https://t.me/+qZPRwmmIZZA1YWIx">Get Started</Link> */}
              {/* <Link href="https://tally.so/r/3j9aZa">Get Started</Link> */}
              <Link href="/Apply">Get Started</Link>
            </Button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="flex items-center justify-center lg:justify-start space-x-8 mt-6 py-4 px-4 bg-white rounded-3xl"
          >
            <AvatarCircles numPeople={999} avatarUrls={avatarUrls} />
            <p className="text-base lg:text-md text-black w-60">
              Join Us and Become part of our growing community today.
            </p>
          </motion.div>
        </div>
        <div className="hidden w-full xl:w-[60%] xl:flex justify-end overflow-hidden">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
            className="w-full h-auto mt-10"
          >
            <Image
              src="/hero.png"
              alt="Lager Platform"
              width={1200}
              height={1000}
              layout="responsive"
              objectFit="cover"
              objectPosition="right center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
