// components/ServiceCard.js
import Image from "next/image";
import Link from "next/link";
import { HorizontalDivider } from "./SectionDivider";

export default function ServiceCard({
  image,
  title,
  description,
  buttons = [],
  badge,
}) {
  return (
    <div className=" from-blue-900/20 via-indigo-800/20 to-transparent rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col justify-between transition pb-10 border-2 border-gray-400/10">
      {/* Image */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          unoptimized
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-title text-xl font-semibold">{title}</h3>
          {badge && (
            <span className="text-xs bg-blue-600 text-title px-2 py-0.5 rounded-full">
              {badge}
            </span>
          )}
        </div>
        <HorizontalDivider />
        <p className="text-gray-400 text-md sm:text-md md:text-md mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Buttons */}
      {buttons.length > 0 && (
        <div className="flex gap-3 mt-6 flex-wrap">
          {buttons.map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              className={`px-5 py-2 rounded-md text-sm font-medium transition ${
                btn.primary
                  ? "text-title bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/30 hover:from-blue-600 hover:to-blue-800"
                  : "text-gray-200 bg-[#1e293b] hover:bg-[#334155]"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
