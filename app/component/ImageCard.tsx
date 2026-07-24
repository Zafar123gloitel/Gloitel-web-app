import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageCard = ({
  className = "",
  padding = "",
  cardtitle = "Healthcare Client ",
  carddescription = "Deployed a private LLM for clinical documentation summarization. 70% reduction in admin time per consultation. Zero PHI data leaves the VPC.",
  buttintext = "View Case Study ",
  buttonurl = "/",
  buttonicon,
  image = "",
}) => {
  return (
    <div>
      {" "}
      <article
        className={[
          "group relative overflow-hidden rounded-[28px] border border-white/10",
          // "bg-[linear-gradient(180deg,rgba(82,84,103,0.96)_0%,rgba(87,88,98,0.96)_100%)]",
          "shadow-[0_22px_40px_rgba(15,23,42,0.22)] transition-all duration-300 ease-out",
          " hover:border-blue-500/80",
          "before:pointer-events-none before:absolute before:left-1/2 before:top-0 before:h-px before:w-[60%] before:-translate-x-1/2",
          "before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent",
          "after:pointer-events-none after:absolute after:inset-0 after:rounded-[28px]",
          "after:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_top_right,rgba(96,165,250,0.08),transparent_26%)]",
          "after:opacity-80",
          "flex flex-col w-[394px] h-[475px]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div>
          <div className=" ">
            <div className="flex items-center justify-center bg-none m-4 bg-white rounded-2xl">
              <Image src={image} width={280} height={220} alt="menu" />
            </div>
          </div>
        </div>
        <div className={[padding, "relative z-10 "].filter(Boolean).join(" ")}>
          <h3
            className={[
              "text-3xl font-normal leading-[1.08] tracking-[-0.04em] text-white text-left",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {cardtitle}
          </h3>
          <p
            className={["text-base py-2 leading-6 text-white/45 text-left"]
              .filter(Boolean)
              .join(" ")}
          >
            {carddescription}
          </p>
        </div>
        <Link
          href={buttonurl}
          className="flex gap-2 pb-3 pt-2 absolute bottom-1.5 left-5 text-base group-hover:text-blue-600 items-center  "
        >
          {buttintext}
          <span className="rotate-90 -mb-1">{buttonicon}</span>
        </Link>
      </article>
    </div>
  );
};

export default ImageCard;
