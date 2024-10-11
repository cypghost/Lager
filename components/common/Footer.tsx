import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaShopify, FaTelegramPlane } from "react-icons/fa"; // Import new icons

export default function Footer() {
  const footerLinks = useMemo(() => {
    return [
      {
        title: "About",
        links: [
          { href: "/about", label: "About Us" },
          { href: "/team", label: "Our Team" },
          { href: "/careers", label: "Careers" },
        ],
      },
      {
        title: "Services",
        links: [
          { href: "/services/marketing", label: "Digital Marketing" },
          { href: "/services/ecommerce", label: "E-commerce Solutions" },
          { href: "/services/design", label: "Design & Branding" },
        ],
      },
      {
        title: "Support",
        links: [
          { href: "/support/faq", label: "FAQs" },
          { href: "/support/contact", label: "Contact Support" },
          { href: "/support/shipping", label: "Shipping Information" },
        ],
      },
      {
        title: "Resources",
        links: [
          { href: "/blog", label: "Blog" },
          { href: "/resources/case-studies", label: "Case Studies" },
          { href: "/resources/guides", label: "Guides & Tutorials" },
        ],
      },
    ];
  }, []);

  return (
    <section className="w-full bg-muted text-white xl:py-4">
      <footer className="container mx-auto px-4 py-12 space-y-12">
        <div className="flex flex-col lg:flex-row justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/3 space-y-6">
            <div>
              <Image
                src="/Logo.png"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <address className="not-italic">
              <h3 className="font-bold text-lg">Location</h3>
              <p className="text-accent">1234 Main Street, City, Country</p>
            </address>
            <div>
              <h3 className="font-bold text-lg">Open Hours</h3>
              <p className="text-accent">Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p className="text-accent">Sat - Sun: Closed</p>
            </div>
          </div>
          <nav className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg">{section.title}</h3>
                <ul className="mt-2 space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="text-accent hover:text-primary transition-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/3">
            <h3 className="font-bold text-lg">Join Our Newsletter</h3>
            <form className="flex space-x-2 mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-secondary border border-gray-600 placeholder-gray-400 focus:outline-none"
              />
              <button className="px-4 py-2 bg-primary text-black font-semibold rounded-md hover:bg-gray-700 transition-all">
                Join
              </button>
            </form>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
            <div className="flex flex-col items-start space-y-4">
              <h3 className="font-bold text-left text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-all"
                >
                  <FiFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-all"
                >
                  <FiInstagram size={24} />
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-all"
                >
                  <FaTiktok size={24} /> {/* TikTok Icon */}
                </a>
                <a
                  href="https://shopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-all"
                >
                  <FaShopify size={24} /> {/* Shopify Icon */}
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-all"
                >
                  <FaTelegramPlane size={24} /> {/* Telegram Icon */}
                </a>
              </div>
            </div>
            <div className="text-center lg:text-left lg:ml-auto text-accent">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
