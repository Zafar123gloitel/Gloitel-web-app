"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { VerticalDivider } from "./SectionDivider";
import { HeaderButton } from "./Button";
import Image from "next/image";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/creation", label: "Our Creations" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  const getLinkClasses = (href) =>
    pathname === href
      ? "text-white font-normal"
      : "text-white/70 hover:text-white transition-colors";

  // 🧭 Hide navbar when scrolling down
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsHidden(currentScroll > lastScroll && currentScroll > 50);
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
        {/* 🔹 Header Wrapper */}
        <div className="flex items-center justify-between w-full px-6 py-4">
          {/* 🔹 Left Section — Menu + Logo */}
          <div className="flex items-center gap-6">
            {/* 🔹 Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927934/Gloitel/logo_xbs2qc.svg"
                width={140}
                height={90}
                alt="Logo"
                className="object-contain"
              />
            </Link>
            <VerticalDivider />
            <div className="hidden lg:flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-md ${getLinkClasses(link.href)}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 🔹 Right Section — Button */}
          <div className="hidden lg:flex items-center">
            <HeaderButton GetInTouch="Get In Touch" />
          </div>
        </div>

        {/* 🔹 Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* 🔹 Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden bg-black/70 backdrop-blur-md ${
          isMobileMenuOpen
            ? "max-h-[400px] opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-3 px-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-base font-medium ${getLinkClasses(link.href)} py-2`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3">
            <Link
              href="#contact"
              className="block w-full text-center rounded-md bg-blue-600 hover:bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
