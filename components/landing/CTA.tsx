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
    icon: <FaTiktok size={48} />,
    href: "https://www.tiktok.com/@lager_store1?_t=8pHLtvyvg5r&_r=1",
    label: "TikTok",
    position: "top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <FiInstagram size={48} />,
    href: "https://www.instagram.com/lagerdrop_us?igsh=MThzY2F0YmRkbWxscw%3D%3D&utm_source=qr",
    label: "Instagram",
    position: "top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <FaTelegramPlane size={48} />,
    href: "https://t.me/+qZPRwmmIZZA1YWIx",
    label: "Telegram",
    position: "bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <FaShopify size={48} />,
    href: "https://lagerstore.us/",
    label: "Shopify",
    position:
      "top-28 left-12 md:left-14 lg:left-1/3 transform -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: <FiFacebook size={48} />,
    href: "https://www.facebook.com/profile.php?id=61564729805943&mibextid=LQQJ4d",
    label: "Facebook",
    position:
      "top-28 left-60 md:left-64 lg:left-2/3 transform -translate-x-1/2 -translate-y-1/2",
  },
];

export default function CTA() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="relative py-8 px-4 sm:py-12 sm:px-8 lg:py-16 lg:px-16 bg-gray-100 rounded-lg overflow-hidden text-destructive w-full"
    >
      <div className="relative container mx-auto bg-primary flex flex-col md:flex-row items-center justify-between py-6 lg:py-10 px-12 lg:px-20 rounded-3xl space-y-8 lg:space-y-0 lg:space-x-16 shadow-lg">
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
        <div className="relative w-full lg:w-1/2 h-64">
          {socialMediaLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute text-muted hover:text-white transition-all ${link.position}`}
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
