"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname hook
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State to track mounting
  const pathname = usePathname(); // Get the current pathname

  // Effect to set the isMounted state to true when the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    if (isMounted) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isMounted) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMounted]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  // Define classes based on the current route and scroll state
  const baseClasses = `fixed w-full top-0 z-50 transition-all duration-300`;
  const scrolledClassesHome = "bg-muted text-primary shadow-lg";
  const scrolledClassesOtherPages = "bg-white text-secondary shadow-lg";
  const nonScrolledClassesHome = "text-primary bg-transparent";
  const nonScrolledClassesOtherPages = "text-secondary bg-transparent";

  // Use pathname only when the component is mounted to avoid issues
  const currentPath = isMounted ? pathname : "/"; // Default to '/' before mounting

  // Set classes based on route and scroll state
  const navbarClasses = `${baseClasses} ${
    currentPath === "/"
      ? isScrolled
        ? scrolledClassesHome
        : nonScrolledClassesHome
      : isScrolled
      ? scrolledClassesOtherPages
      : nonScrolledClassesOtherPages
  }`;

  // Avoid rendering the navbar until it is mounted to prevent server/client mismatches
  if (!isMounted) {
    return null;
  }

  return (
    <section className={navbarClasses}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex justify-between text-2xl font-mono items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href} className="group">
              <Link
                href={item.href}
                className={`flex items-center group-hover:text-primary`}
              >
                {item.label}
                <svg
                  className="ml-2 transition-transform transform rotate-45 group-hover:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14M12 5l7 7-7 7"
                  ></path>
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden flex items-center text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}{" "}
          {/* Toggle between open and close icons */}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden transition-all duration-300 sm:hidden fixed top-16 right-0 w-full ${
            currentPath === "/"
              ? "bg-black text-white"
              : "bg-white text-secondary"
          } shadow-lg`}
        >
          <ul className="flex flex-col items-center space-y-6 py-8">
            {navItems.map((item) => (
              <li key={item.href} className="group">
                <Link
                  href={item.href}
                  className="flex items-center text-xl group-hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)} // Close the menu when a link is clicked
                >
                  {item.label}
                  <svg
                    className="ml-2 transition-transform transform rotate-45 group-hover:rotate-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M12 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}
