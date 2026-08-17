import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardTitle } from "../../../components";

interface ImageCardProps {
  data: {
    title: string;
    description: string;
    imageAlt?: string;
    buttonText?: string;
    buttonLink?: string;
  };
}

const ImageCard = ({ data }: ImageCardProps) => {
  const {
    title,
    description,
    imageAlt = title,
    buttonText = "View More",
    buttonLink = "#",
  } = data;

  return (
    <Card className="md:w-[300px] lg:w-[400PX]">
      <div className="flex flex-col gap-y-5">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/10">
          <Image
            src={title}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width:640px) 100vw, 420px"
            unoptimized
            loading="lazy"
          />
        </div>

        {/* Content */}
        <CardTitle className="text-[25px] lg:text-[28px] font-normal leading-8 tracking-[-0.04em] text-title text-left">
          {title}
        </CardTitle>

        <CardDescription className="text-[14px] lg:text-[16px]   text-description  leading-6 text-left">
          {description}
        </CardDescription>

        {/* Link */}
        <Link
          href={buttonLink}
          className="inline-flex items-center gap-2 text-base font-medium transition-opacity hover:opacity-80"
        >
          {buttonText}
          <span className="text-xl leading-none">→</span>
        </Link>
      </div>
    </Card>
  );
};

export default ImageCard;
