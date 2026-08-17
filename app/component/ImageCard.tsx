import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardTitle } from "../../components";

const ImageCard = ({
  className = "",
  cradClass,
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
      <Card className={cradClass}>
        <div>
          <div className=" ">
            <div className="flex items-center justify-center bg-none m-4 h-[295.47px] rounded-2xl">
              <Image src={image} width={280} height={220} alt="menu" loading="lazy"/>
            </div>
          </div>
        </div>
         <CardTitle>
          {cardtitle}
          </CardTitle>
          <CardDescription>
            {carddescription}
          </CardDescription>
        <div className={[padding, "relative z-10 "].filter(Boolean).join(" ")}>
          {/* <h3
            className={[
              "text-3xl font-normal leading-[1.08] tracking-[-0.04em] text-title text-left",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {cardtitle}
          </h3> */}
         
          {/* <p
            className={["text-base py-2 leading-6 text-description text-left"]
              .filter(Boolean)
              .join(" ")}
          >
            {carddescription}
          </p> */}
          
        </div>
        <Link
          href={buttonurl}
          className="flex gap-2 pb-3 pt-2 absolute bottom-1.5 left-5 text-base group-hover:text-blue-600 items-center  "
        >
          {buttintext}
          <span className="-mb-1">{buttonicon}</span>
        </Link>
      </Card>
    </div>
  );
};

export default ImageCard;
