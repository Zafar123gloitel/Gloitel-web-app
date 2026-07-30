// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { VerticalDivider } from "./SectionDivider";
// import { GlowButton, HeaderButton } from "./Button";
// import Image from "next/image";

// const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
//   const [isMobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);
//   const pathname = usePathname();

//   const links = [
//     { href: "/", label: "Home" },
//     { label: "What we do", megaMenu: true },
//     { href: "/about", label: "About" },
//     { href: "/creation", label: "Our Creations" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const megaMenu = [
//     {
//       title: "AI & Intelligent Systems",
//       items: [
//         {
//           label: "AI Strategy & Consulting",
//           href: "/ai-strategy-consulting",
//         },
//         {
//           label: "Generative AI & LLMs",
//           href: "/generative-ai-llms",
//         },
//         {
//           label: "AI Agents & Automation",
//           href: "/ai-agents-automation",
//         },
//         {
//           label: "ML & Predictive Analytics",
//           href: "/ml-predictive-analytics",
//         },
//         {
//           label: "AI Integration",
//           href: "/ai-integration",
//         },
//       ],
//     },
//     {
//       title: "Product Engineering",
//       items: [
//         {
//           label: "Discovery & Validation",
//           href: "/discovery-validation",
//         },
//         {
//           label: "MVP Development",
//           href: "/mvp-development",
//         },
//         {
//           label: "Platform Scaling",
//           href: "/platform-scaling",
//         },
//         {
//           label: "Fractional Engineering Teams",
//           href: "/fractional-engineering-teams",
//         },
//       ],
//     },
//     {
//       title: "Enterprise Modernization",
//       items: [
//         {
//           label: "App Modernization",
//           href: "/app-modernization",
//         },
//         {
//           label: "Cloud Migration",
//           href: "/cloud-migration",
//         },
//         {
//           label: "Microservices Architecture",
//           href: "/microservices-architecture",
//         },
//         {
//           label: "Process Automation",
//           href: "/process-automation",
//         },
//       ],
//     },
//     {
//       title: "Digital Experience Design",
//       items: [
//         {
//           label: "UX Research & Strategy",
//           href: "/ux-research-strategy",
//         },
//         {
//           label: "UI/UX Design",
//           href: "/ui-ux-design",
//         },
//         {
//           label: "Design Systems",
//           href: "/design-systems",
//         },
//         {
//           label: "ML & Predictive Analytics",
//           href: "/ml-predictive-analytics",
//         },
//         {
//           label: "CX Optimization",
//           href: "/cx-optimization",
//         },
//       ],
//     },
//   ];

//   const getLinkClasses = (href) =>
//     pathname === href
//       ? "text-white"
//       : "text-white/50 hover:text-white transition-colors";

//   // 🧭 Hide navbar when scrolling down
//   useEffect(() => {
//     let lastScroll = 0;
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       setIsHidden(currentScroll > lastScroll && currentScroll > 50);
//       lastScroll = currentScroll;
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMegaMenuOpen(false);
//     setMobileMenuOpen(false);
//   }, [pathname]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md transition-transform duration-300 ${
//         isHidden ? "-translate-y-full" : "translate-y-0"
//       }`}
//     >
//       <nav className=" mx-auto flex items-center justify-between px-4 sm:px-4 md:px-20 lg:px-44 border-b-1 border-gray-500/20">
//         {/* 🔹 Header Wrapper */}
//         <div className="flex items-center justify-between w-full px-6 py-4">
//           {/* 🔹 Left Section — Menu + Logo */}
//           <div className="flex items-center gap-6">
//             {/* 🔹 Logo */}
//             <Link href="/" className="flex items-center gap-2">
//               <Image
//                 src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927934/Gloitel/logo_xbs2qc.svg"
//                 width={120}
//                 height={90}
//                 alt="Logo"
//                 className="object-contain"
//                 unoptimized
//               />
//             </Link>
//             <VerticalDivider />
//             <div className="hidden lg:flex items-center gap-9">
//               {links.map((link) =>
//                 link.megaMenu ? (
//                   <div
//                     key={link.label}
//                     className="relative"
//                     onMouseEnter={() => setIsMegaMenuOpen(true)}
//                     onMouseLeave={() => setIsMegaMenuOpen(false)}
//                   >
//                     <button className="flex items-center gap-1 text-white/60 hover:text-white transition">
//                       {link.label}

//                       <svg
//                         className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-180" : ""}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>

//                     {/* Mega Menu */}
//                     <div
//                       className={`fixed left-1/2 top-[90px] -translate-x-1/2 w-[1050px] transition-all duration-300 z-50 ${
//                         isMegaMenuOpen
//                           ? "visible opacity-100 translate-y-0"
//                           : "invisible opacity-0 translate-y-4"
//                       }`}
//                     >
//                       <div className="w-[1050px] rounded-sm bg-[#2b2b2b] p-8 shadow-2xl">
//                         <p className="mb-6 text-blue-400 text-sm font-medium">
//                           Mega Menu of What we do
//                         </p>

//                         <div className="grid grid-cols-5 text-nowrap gap-10">
//                           <div className="col-span-4 grid grid-cols-4 gap-8">
//                             {megaMenu.map((section) => (
//                               <div key={section.title}>
//                                 <h4 className="mb-5 text-white font-semibold">
//                                   {section.title}
//                                 </h4>

//                                 <ul className="space-y-3">
//                                   {section.items.map((item, index) => (
//                                     <li key={index}>
//                                       <Link
//                                         href={item.href}
//                                         className="flex items-center gap-2 text-sm text-white/60 hover:text-blue-400"
//                                       >
//                                         <span>›</span>
//                                         {item.label}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>

//                           <div className="flex  items-center justify-center">
//                             <Image
//                               src="/images/What-we-do/mega_manu_iamge (2).png"
//                               width={280}
//                               height={220}
//                               alt="menu"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className={`text-md ${getLinkClasses(link.href)}`}
//                   >
//                     {link.label}
//                   </Link>
//                 ),
//               )}
//             </div>
//           </div>

//           {/* 🔹 Right Section — Button */}
//           <div className="hidden lg:flex items-center">
//             <GlowButton buttonText="Get In Touch" Buttonlink="/contact" />
//           </div>
//         </div>

//         {/* 🔹 Mobile Toggle Button */}
//         <button
//           onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
//           className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all"
//         >
//           {isMobileMenuOpen ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           )}
//         </button>
//       </nav>

//       {/* 🔹 Mobile Menu */}
//       <div
//         className={`lg:hidden transition-all duration-300 overflow-y-auto bg-black/70 ${
//           isMobileMenuOpen
//             ? "max-h-[760px] opacity-100 py-4"
//             : "max-h-0 opacity-0 py-0"
//         }`}
//       >
//         <div className="flex flex-col space-y-3 px-6">
//           {links.map((link) =>
//             link.megaMenu ? (
//               <div
//                 key={link.label}
//                 className="rounded-lg border border-white/10 bg-white/5"
//               >
//                 <button
//                   type="button"
//                   onClick={() => setMobileMegaMenuOpen(!isMobileMegaMenuOpen)}
//                   className="flex w-full items-center justify-between px-4 py-3 text-left text-white/80"
//                 >
//                   <span>{link.label}</span>
//                   <svg
//                     className={`h-4 w-4 transition-transform duration-300 ${isMobileMegaMenuOpen ? "rotate-180" : ""}`}
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M6 9l6 6 6-6" />
//                   </svg>
//                 </button>

//                 <div
//                   className={`grid overflow-hidden transition-all duration-300 ${
//                     isMobileMegaMenuOpen
//                       ? "grid-rows-[1fr] opacity-100"
//                       : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-4 border-t border-white/10 px-4 py-3">
//                       {megaMenu.map((section) => (
//                         <div key={section.title} className="pb-2">
//                           <p className="mb-2 text-sm font-semibold text-blue-400">
//                             {section.title}
//                           </p>
//                           <div className="space-y-2">
//                             {section.items.map((item, index) => (
//                               <Link
//                                 key={`${section.title}-${index}`}
//                                 href={item.href}
//                                 className="block text-sm text-white/70 hover:text-white"
//                                 onClick={() => {
//                                   setMobileMenuOpen(false);
//                                   setMobileMegaMenuOpen(false);
//                                 }}
//                               >
//                                 {item.label}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`block py-2 ${getLinkClasses(link.href)}`}
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.label}
//               </Link>
//             ),
//           )}

//           <div className="pt-3">
//             <HeaderButton
//               ButtonText="Get In Touch"
//               Buttonlink="/contact"
//               onClick={() => setMobileMenuOpen(false)}
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { VerticalDivider } from "./SectionDivider";
import { GlowButton, HeaderButton } from "./Button";
import Image from "next/image";
import { links } from "./NavData";
import { megaMenus } from "./NavData";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState(null); // holds the label of open mega menu
  const [mobileOpenMegaMenu, setMobileOpenMegaMenu] = useState(null);
  const pathname = usePathname();

  const getLinkClasses = (href) => {
    const isActive =
      pathname === href || (href !== "/" && pathname.startsWith(href));

    return isActive
      ? "text-white translate-y-0 scale-100"
      : "text-white/50 hover:text-white hover:-translate-y-1 hover:scale-105 transition-all duration-300 ease-out";
  };

  const isMegaMenuActive = (megaMenu) => {
    const menu = megaMenus[megaMenu];

    if (!menu) return false;

    return menu.groups.some((group) =>
      group.items.some(
        (item) =>
          pathname === item.href || pathname.startsWith(item.href + "/"),
      ),
    );
  };
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

  useEffect(() => {
    setOpenMegaMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className=" mx-auto flex items-center justify-between px-4  md:px-10  border-b-1 border-gray-500/20">
        {/* 🔹 Header Wrapper */}
        <div className="flex items-center justify-between w-full px-6 py-4">
          {/* 🔹 Left Section — Menu + Logo */}
          <div className="flex items-center gap-6">
            {/* 🔹 Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dsqu6pi0d/image/upload/v1762927934/Gloitel/logo_xbs2qc.svg"
                width={120}
                height={90}
                alt="Logo"
                className="object-contain"
                unoptimized
              />
            </Link>
            <VerticalDivider />
            <div className="hidden lg:flex items-center gap-9">
              {links.map((link) =>
                link.megaMenu ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMegaMenu(link.megaMenu)}
                    onMouseLeave={() => setOpenMegaMenu(null)}
                  >
                    <button
                      className={`flex items-center gap-1 transition ${
                        isMegaMenuActive(link.megaMenu)
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {link.label}

                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openMegaMenu === link.megaMenu ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Mega Menu */}
                    {(() => {
                      const menu = megaMenus[link.megaMenu];
                      if (!menu) return null;
                      const isOpen = openMegaMenu === link.megaMenu;
                      return (
                        <div
                          className={`fixed left-1/2 top-[90px] -translate-x-1/2 w-full  transition-all duration-100 z-50 ${
                            isOpen
                              ? "visible opacity-100 translate-y-0"
                              : "invisible opacity-0 translate-y-4"
                          }`}
                        >
                          <div
                            className={`w-full h-80 rounded-b-sm bg-gray-900 opacity-100 p-8 shadow-2xl`}
                          >
                            <p className="mb-6 text-blue-400 text-sm font-medium">
                              {link.label}
                            </p>

                            <div
                              className={`grid ${menu.columns} text-nowrap  gap-10`}
                            >
                              <div className={`${menu.groupsSpan} grid gap-8`}>
                                {menu.groups.map((section) => (
                                  <div key={section.title}>
                                    <h4 className="mb-5 text-white font-semibold">
                                      {section.title}
                                    </h4>
                                    <div className="grid grid-flow-col gap-8">
                                      {Array.from(
                                        {
                                          length: Math.ceil(
                                            section.items.length / 4,
                                          ),
                                        },
                                        (_, chunkIndex) => (
                                          <ul
                                            key={chunkIndex}
                                            className="space-y-3"
                                          >
                                            {section.items
                                              .slice(
                                                chunkIndex * 5,
                                                chunkIndex * 5 + 5,
                                              )
                                              .map((item, index) => (
                                                <li key={index}>
                                                  <Link
                                                    href={item.href}
                                                    className={`flex items-center gap-2 text-sm ${getLinkClasses(
                                                      item.href,
                                                    )}`}
                                                  >
                                                    {item.label}
                                                  </Link>
                                                </li>
                                              ))}
                                          </ul>
                                        ),
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="flex items-center -mt-6 justify-center ">
                                <div className="rounded-2xl h-56 w-56 shadow-[0_0_80px_rgba(37,99,235,0.45)]">
                                  <Image
                                    src={menu.image}
                                    width={280}
                                    height={220}
                                    alt="menu"
                                    className="rounded-2xl h-full w-full drop-shadow-[0_25px_50px_rgba(37,99,235,0.35)]"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-md ${getLinkClasses(link.href)}`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* 🔹 Right Section — Button */}
          <div className="hidden lg:flex items-center">
            <GlowButton buttonText="Get In Touch" Buttonlink="/contact" />
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
        className={`lg:hidden transition-all duration-300 overflow-y-auto bg-black/70 ${
          isMobileMenuOpen
            ? "max-h-[760px] opacity-100 py-4"
            : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col space-y-3 pb-10 px-6">
          {links.map((link) =>
            link.megaMenu ? (
              <div
                key={link.label}
                className="rounded-lg border border-white/10 bg-white/5"
              >
                <button
                  type="button"
                  onClick={() =>
                    setMobileOpenMegaMenu(
                      mobileOpenMegaMenu === link.megaMenu
                        ? null
                        : link.megaMenu,
                    )
                  }
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-white/80"
                >
                  <span>{link.label}</span>
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      mobileOpenMegaMenu === link.megaMenu ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    mobileOpenMegaMenu === link.megaMenu
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-4 border-t border-white/10 px-4 py-3">
                      {megaMenus[link.megaMenu]?.groups.map((section) => (
                        <div key={section.title} className="pb-2">
                          <p className="mb-2 text-sm font-semibold text-blue-400">
                            {section.title}
                          </p>
                          <div className="space-y-2">
                            {section.items.map((item, index) => (
                              <Link
                                key={`${section.title}-${index}`}
                                href={item.href}
                                className={`block text-sm ${getLinkClasses(item.href)}`}
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setMobileOpenMegaMenu(null);
                                }}
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 ${getLinkClasses(link.href)}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}

          <div className="pt-3">
            <HeaderButton
              ButtonText="Get In Touch"
              Buttonlink="/contact"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
