// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Our Creation", link: "/creation" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
  ];

  const social = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/gloitel-consulting-private-limited/posts/?feedView=all",
    },
    { name: "Instagram", link: "https://www.instagram.com/gloitel/?hl=en" },
    {
      name: "YouTube",
      link: "https://www.youtube.com/channel/UCbsa6keJ58aYzKDeKPa_P9Q",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/people/Gloitel-Consulting-Pvt-Ltd/61573055576386/",
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
            <p className="text-sm text-white/40">Technology made with Trust</p>
          </div>

          <div className="flex items-center rounded-xl overflow-hidden border border-gray-800 bg-black/20">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-3 py-2 sm:px-4 sm:py-3 font-medium bg-transparent text-sm focus:outline-none w-full"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-r-xl shadow-[0_0_25px_rgba(59,130,246,0.2)] whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="font-semibold text-white mb-4">Important Links</h2>
          <ul className="space-y-3 text-sm sm:text-base text-white/50">
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="font-semibold text-white mb-4">Social Links</h2>
          <ul className="space-y-3 text-sm sm:text-base text-white/50">
            {social.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Address & Contact */}
        <div>
          <h2 className="font-semibold text-white mb-3">Address</h2>
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
