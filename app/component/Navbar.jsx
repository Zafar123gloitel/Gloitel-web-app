"use client";

import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { VerticalDivider } from "./SectionDivider";
import { HeaderButton } from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/creation", label: "Our Creations" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/portfolio", label: "Portfolio" },
  ];

  const getLinkClasses = (href) =>
    pathname === href
      ? "text-white "
      : "text-white/60 hover:text-white transition";

  return (
    <header className="fixed z-50 w-full backdrop-blur-md bg-black/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 relative">
        {/* Logo */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="#" className="p-1.5 mr-10">
            <span className="sr-only">Your Company</span>
            <img
              src="https://framerusercontent.com/images/jQ28grv4AImGE9bV0hXi4CS7AR8.svg"
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-10">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-between rounded-md p-2.5 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <span className="sr-only">
                {isMobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <VerticalDivider />

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:gap-x-8 ml-10">
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
        <HeaderButton GetInTouch="Get In Touch" />
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-md overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "max-h-screen opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-base font-semibold ${getLinkClasses(link.href)}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="#"
            className="mt-2 inline-block rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-indigo-400 transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
