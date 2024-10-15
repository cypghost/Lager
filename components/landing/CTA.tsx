"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaTiktok, FaTelegramPlane, FaShopify } from "react-icons/fa";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const socialMediaLinks = [
  {
    icon: <FaTiktok size={36} />,
    href: "https://www.tiktok.com/@lager_store1?_t=8pHLtvyvg5r&_r=1",
    label: "TikTok",
  },
  {
    icon: <FiInstagram size={36} />,
    href: "https://www.instagram.com/lagerdrop_us?igsh=MThzY2F0YmRkbWxscw%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: <FaTelegramPlane size={36} />,
    href: "https://t.me/+qZPRwmmIZZA1YWIx",
    label: "Telegram",
  },
  {
    icon: <FaShopify size={36} />,
    href: "https://lagerstore.us/",
    label: "Shopify",
  },
  {
    icon: <FiFacebook size={36} />,
    href: "https://www.facebook.com/profile.php?id=61564729805943&mibextid=LQQJ4d",
    label: "Facebook",
  },
];

export default function CTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-16 bg-primary rounded-lg overflow-hidden text-destructive w-full"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 lg:space-y-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={textVariants}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Ready to Join Our Community and Grow Your Skills?
          </h2>
          <p className="text-lg max-w-md mx-auto lg:mx-0">
            Subscribe to stay updated on our latest offerings, exclusive
            resources, and opportunities to connect and learn.
          </p>
        </motion.div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8 w-full lg:w-1/2">
          {socialMediaLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-all"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
