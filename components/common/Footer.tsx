import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaShopify, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const footerLinks = useMemo(() => {
    return [
      {
        title: "About",
        links: [
          { href: "/About", label: "About Us" },
          { href: "/About/#team", label: "Our Team" },
          { href: "/About/#mission", label: "Our Mission" },
        ],
      },
      {
        title: "Services",
        links: [
          { href: "/#service", label: "Digital Marketing" },
          { href: "/#service", label: "E-commerce Solutions" },
          { href: "/#service", label: "Design & Branding" },
        ],
      },
      {
        title: "Support",
        links: [
          { href: "#faq", label: "FAQs" },
          { href: "/Contact", label: "Contact Support" },
        ],
      },
    ];
  }, []);

  const socialLinks = {
    title: "Follow Us",
    links: [
      {
        href: "https://www.facebook.com/profile.php?id=61564729805943&mibextid=LQQJ4d",
        icon: <FiFacebook size={24} />,
      },
      {
        href: "https://www.instagram.com/lagerdrop_us?igsh=MThzY2F0YmRkbWxscw%3D%3D&utm_source=qr",
        icon: <FiInstagram size={24} />,
      },
      {
        href: "https://www.tiktok.com/@lager_store1?_t=8pHLtvyvg5r&_r=1",
        icon: <FaTiktok size={24} />,
      },
      {
        href: "https://lagerstore.us/",
        icon: <FaShopify size={24} />,
      },
      {
        href: "https://t.me/+qZPRwmmIZZA1YWIx",
        icon: <FaTelegramPlane size={24} />,
      },
    ],
  };

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
              <Link
                href="https://maps.app.goo.gl/9RWbrGSkAAoK4Da58"
                className="text-accent"
              >
                Washington DC, USA
              </Link>
            </address>
            <div>
              <h3 className="font-bold text-lg">Open Hours</h3>
              <p className="text-accent">Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p className="text-accent">Sat - Sun: Closed</p>
            </div>
          </div>
          <nav className="w-full lg:w-2/3 grid grid-cols-2 xl:grid-cols-4 gap-8">
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
            <div className="flex flex-col items-start space-y-4">
              <h3 className="font-bold text-lg">{socialLinks.title}</h3>
              <div className="grid grid-cols-3 gap-4 lg:gap-0 lg:flex lg:space-x-4">
                {socialLinks.links.map((link, idx) => (
                  <Link
                    href={link.href}
                    key={idx}
                    className="text-accent hover:text-primary transition-all"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="text-center lg:text-left lg:mr-auto text-accent">
            &copy; {new Date().getFullYear()} Lager. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
}
