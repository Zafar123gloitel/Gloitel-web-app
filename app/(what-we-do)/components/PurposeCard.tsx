// import React from "react";
// import { Card, CardIcon } from "../../../components";

// interface purposeCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   className: string;
// }

// const PurposeCard = ({
//   icon,
//   title,
//   description,
//   className,
// }: purposeCardProps) => {
//   return (



// <Card className="flex items-center">
//   <div className="flex w-full items-center justify-center gap-6 px-6 ">
    
//     {/* Icon */}
//     <CardIcon className="h-14 w-14 shrink-0">
//       {icon}
//     </CardIcon>

//     {/* Content */}
//     <div>
//       <h3 className="text-xl font-semibold text-white md:text-[32px]">
//         {title}
//       </h3>

//       <p className="mt-2 text-[14px] leading-6 text-gray-400 md:text-[16px]">
//         {description}
//       </p>
//     </div>

//   </div>
// </Card>

//   );
// };

// export default PurposeCard;



import React from "react";
import Image from "next/image";
import { Card, CardIcon } from "../../../components";


interface PurposeCardProps {
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  title: string;
  description: string;
  className?: string;
  view?:string;
}

const PurposeCard = ({
  icon,
  image,
  imageAlt = "",
  title,
  description,
  className,
  view,
}: PurposeCardProps) => {
  const content = (
    <div>
      <h3 className="text-xl font-semibold text-white md:text-[32px]">
        {title}
      </h3>

      <p className="mt-2 text-[14px] leading-6 text-gray-400 md:text-[16px]">
        {description}
      </p>
    </div>
  );

  const imageBlock = image ? (
    <div className="relative shrink-0 overflow-hidden h-[173px] w-[182px]">
      <Image
        src={image}
        alt={imageAlt}
        objectFit="cover"
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  ) : null;

  const iconBlock = icon ? (
    <CardIcon className="h-14 w-14 shrink-0">{icon}</CardIcon>
  ) : null;

  const viewBox = view ? (
    <a
      href={view}
      className="group absolute bottom-5 left-12 inline-flex items-center gap-3 text-[14px] font-normal text-white transition-all duration-300 md:text-[16px]"
    >
      <span>{view}</span>

      {/* Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    </a>
  ) : null;

  return (
    <Card className={`flex items-center ${className ?? ""}`}>
      <div className="flex w-full items-center justify-center gap-6  px-6">
        {image ? (
          // Image case: text left, image right
          <span className="flex flex-col-reverse md:flex-row w-full pb-10 items-center justify-between gap-6">
            {content}
            {imageBlock}
            {viewBox}
          </span>
        ) : (
          // Icon case: icon left, text right
          <>
            {iconBlock}
            {content}
          </>
        )}
      </div>
    </Card>
  );
};

export default PurposeCard;