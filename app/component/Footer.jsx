// components/Footer.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { CardDivider, CardIcon } from "../../components";
import { links } from "./NavData";
import { megaMenus } from "./NavData";
import { useState } from "react";

export default function Footer() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Our Creation", link: "/creation" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
  ];

  const SocialMediaIcons = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="27"
          viewBox="0 0 28 27"
          fill="none"
        >
          <path
            d="M5.85947 2.9312C5.85908 3.70821 5.55004 4.45325 5.00033 5.0024C4.45062 5.55156 3.70528 5.85985 2.92827 5.85947C2.15125 5.85908 1.40622 5.55004 0.857063 5.00033C0.307906 4.45062 -0.00038814 3.70528 3.66746e-07 2.92827C0.000388873 2.15125 0.309429 1.40622 0.859135 0.857063C1.40884 0.307906 2.15418 -0.00038814 2.9312 3.66746e-07C3.70821 0.000388873 4.45325 0.309429 5.0024 0.859135C5.55156 1.40884 5.85985 2.15418 5.85947 2.9312ZM5.94736 8.02893H0.0878923V26.3691H5.94736V8.02893ZM15.2053 8.02893H9.37514V26.3691H15.1467V16.7449C15.1467 11.3835 22.1341 10.8854 22.1341 16.7449V26.3691H27.9204V14.7527C27.9204 5.71444 17.5784 6.05136 15.1467 10.4899L15.2053 8.02893Z"
            fill="white"
          />
        </svg>
      ),
      link: "https://www.linkedin.com/company/gloitel-consulting-private-limited/posts/?feedView=all",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M11.4259 2.92969H23.7308C28.4184 2.92969 32.227 6.73834 32.227 11.4259V23.7308C32.227 25.9841 31.3319 28.1452 29.7385 29.7385C28.1452 31.3319 25.9841 32.227 23.7308 32.227H11.4259C6.73834 32.227 2.92969 28.4184 2.92969 23.7308V11.4259C2.92969 9.17257 3.82482 7.01153 5.41817 5.41817C7.01153 3.82482 9.17257 2.92969 11.4259 2.92969ZM11.1329 5.85942C9.73431 5.85942 8.39297 6.41502 7.404 7.404C6.41502 8.39297 5.85942 9.73431 5.85942 11.1329V24.0238C5.85942 26.9388 8.21785 29.2973 11.1329 29.2973H24.0238C25.4224 29.2973 26.7637 28.7417 27.7527 27.7527C28.7417 26.7637 29.2973 25.4224 29.2973 24.0238V11.1329C29.2973 8.21785 26.9388 5.85942 24.0238 5.85942H11.1329ZM25.2689 8.05672C25.7545 8.05672 26.2203 8.24964 26.5637 8.59303C26.9071 8.93643 27.1 9.40217 27.1 9.8878C27.1 10.3734 26.9071 10.8392 26.5637 11.1826C26.2203 11.526 25.7545 11.7189 25.2689 11.7189C24.7833 11.7189 24.3175 11.526 23.9741 11.1826C23.6307 10.8392 23.4378 10.3734 23.4378 9.8878C23.4378 9.40217 23.6307 8.93643 23.9741 8.59303C24.3175 8.24964 24.7833 8.05672 25.2689 8.05672ZM17.5784 10.254C19.5209 10.254 21.3839 11.0257 22.7574 12.3993C24.131 13.7728 24.9027 15.6358 24.9027 17.5784C24.9027 19.5209 24.131 21.3839 22.7574 22.7574C21.3839 24.131 19.5209 24.9027 17.5784 24.9027C15.6358 24.9027 13.7728 24.131 12.3993 22.7574C11.0257 21.3839 10.254 19.5209 10.254 17.5784C10.254 15.6358 11.0257 13.7728 12.3993 12.3993C13.7728 11.0257 15.6358 10.254 17.5784 10.254ZM17.5784 13.1838C16.4128 13.1838 15.295 13.6468 14.4709 14.4709C13.6468 15.295 13.1838 16.4128 13.1838 17.5784C13.1838 18.7439 13.6468 19.8617 14.4709 20.6858C15.295 21.5099 16.4128 21.9729 17.5784 21.9729C18.7439 21.9729 19.8617 21.5099 20.6858 20.6858C21.5099 19.8617 21.9729 18.7439 21.9729 17.5784C21.9729 16.4128 21.5099 15.295 20.6858 14.4709C19.8617 13.6468 18.7439 13.1838 17.5784 13.1838Z"
            fill="white"
          />
        </svg>
      ),
      link: "https://www.linkedin.com/company/gloitel-consulting-private-limited/posts/?feedView=all",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <g clipPath="url(#clip0_1316_68944)">
            <g mask="url(#mask0_1316_68944)">
              <path
                d="M23.625 1.40625H28.2257L18.1757 12.922L30 28.5948H20.7429L13.4871 19.0912L5.19429 28.5948H0.589286L11.3379 16.2734L0 1.40839H9.49286L16.0414 10.0934L23.625 1.40625ZM22.0071 25.8348H24.5571L8.1 4.02268H5.36571L22.0071 25.8348Z"
                fill="white"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1316_68944">
              <rect width="30" height="30" rx="4.88289" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      link: "https://www.linkedin.com/company/gloitel-consulting-private-limited/posts/?feedView=all",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M25.5 3H21C19.0109 3 17.1032 3.79018 15.6967 5.1967C14.2902 6.60322 13.5 8.51088 13.5 10.5V15H9V21H13.5V33H19.5V21H24L25.5 15H19.5V10.5C19.5 10.1022 19.658 9.72064 19.9393 9.43934C20.2206 9.15804 20.6022 9 21 9H25.5V3Z"
            stroke="white"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      link: "https://www.linkedin.com/company/gloitel-consulting-private-limited/posts/?feedView=all",
    },
  ];

  const telephone = [{ no: 9711203424 }, { no: 8109981039 }];

  const address =
    "477/4, Muskan Residency road, Lalpur, Pachpedi Naka, Raipur, Chhattisgarh 492001";

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-gray-300 px-6 sm:px-12 md:px-20 lg:px-40 py-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md: gap-10 py-10">
        {/* Logo & Subscribe */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Image
              src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927934/Gloitel/logo_xbs2qc.svg"
              width={140}
              height={90}
              alt="Logo"
              className="object-contain"
              unoptimized
            />
          </div>

          <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent my-3"></div>

          <div className="mb-6">
            <h3 className="font-medium">Gloitel Consulting Pvt. Ltd.</h3>
            <p className="text-sm text-white/40">
              Delivering end-to-end services across design, engineering, AI,
              cloud, software development, and digital marketing.
            </p>
          </div>

          <div className="flex flex-col gap-5  rounded-xl overflow-hidden ">
            <span className="font-semibold text-white mr-4">Follow Us:</span>
            <ul className="space-y-3 text-sm sm:text-base flex text-white/50">
              {SocialMediaIcons.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CardIcon>{item.icon}</CardIcon>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important Links */}
        <div className="relative  ml-10 gap-5">
          <CardDivider className=" absolute top-30 -left-44 sm:-left-20 lg:-left-48   rotate-90" />
          <h2 className="font-semibold text-white mb-4">Navigation Links</h2>
          <div className=" flex flex-col items-start gap-3 text-sm sm:text-base text-white/50">
            {links
              .filter((link) => link.megaMenu)
              .map((link) => (
                <button
                  key={link.label}
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === link.megaMenu ? null : link.megaMenu,
                    )
                  }
                >
                  {link.label}
                </button>
              ))}
          </div>
          {activeMenu && (
            <div className="rounded-xl absolute top-0 left-40 w-lg  border flex flex-col gap-3   border-white/10 bg-[#111] p-6">
              {megaMenus[activeMenu].groups.map((group) => (
                <div key={group.title}>
                  <button
                    onClick={() =>
                      setActiveGroup(
                        activeGroup === group.title ? null : group.title,
                      )
                    }
                  >
                    {group.title}
                  </button>

                  {(activeGroup === group.title ||
                    (!activeGroup &&
                      megaMenus[activeMenu].groups[0].title ===
                        group.title)) && (
                    <div className="flex flex-col gap-2 mt-2 text-sm sm:text-base text-white/50">
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Social Links */}

        {/* Address & Contact */}
        <div>
          <h3 className="mt-5 mb-2 font-medium text-white">Email</h3>

          <Link
            href="gloitel-it@gloitel.in"
            className="text-sm text-gray-400 transition-colors  sm:text-base"
          >
            gloitel-it@gloitel.in
          </Link>

          <h2 className="font-semibold text-white mt-4 mb-3">Address</h2>
          <p className="text-sm sm:text-base mb-4 leading-relaxed text-white/50">
            <Link
              target="_blank"
              href="https://maps.app.goo.gl/uNbYXqo81S7Wfuj37"
              className="mt-2 text-gray-400 text-sm leading-relaxed"
            >
              {address}
            </Link>
          </p>
          <h3 className="font-medium text-white mb-2">Contact</h3>
          <ul className="space-y-2 text-sm sm:text-base text-white/50">
            {telephone.map((t, index) => (
              <div key={index}>
                <Link
                  className="mt-2 text-gray-400 text-sm"
                  href={`tel:+${t.no}`}
                >
                  <li key={index}>(+91) {t.no}</li>
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-white/50 gap-4">
        <p className="text-center md:text-left">
          © Gloitel. All rights reserved | CIN: U74110DL2016PTC309781
        </p>
        <div className="flex space-x-6">
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
