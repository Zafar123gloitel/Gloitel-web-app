import React from "react";
import { LeftBadge } from "./Badge";
import { GlowButton } from "./Button";
import { VerticalDivider } from "./SectionDivider";

// FOR HOME PAGE
export const HomeAboutContent = ({
  Buttonlink,
  ButtonText,
  HomeAboutBadge,
  homeAboutHeading,
  HomeAboutSubHeading,
  HomeAboutDescription,
  // children,
  HomeAboutFeatures = [], // array of { icon, title }
  HomeAboutTexts,
}) => {
  return (
    <div className="flex flex-col">
      <HomeAboutContentHead
        HomeAboutBadge={HomeAboutBadge}
        homeAboutHeading={homeAboutHeading}
        HomeAboutSubHeading={HomeAboutSubHeading}
        HomeAboutDescription={HomeAboutDescription}
        HomeAboutTexts={HomeAboutTexts}
      />

      {/* {children}
      {/* Features List */}
      {HomeAboutFeatures.length > 0 && (
        <dl className="mt-6 sm:mt-8 space-y-5 text-gray-400">
          {HomeAboutFeatures.map((feature, i) => (
            <div key={i} className="relative">
              <dt className="flex items-center  gap-4 text-sm sm:text-base lg:text-md">
                <span className="left-1 w-5 h-5 text-indigo-400">
                  <svg
                    className="w-6 h-6 "
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5609 10.7386L20.2009 9.15859C19.9409 8.85859 19.7309 8.29859 19.7309 7.89859V6.19859C19.7309 5.13859 18.8609 4.26859 17.8009 4.26859H16.1009C15.7109 4.26859 15.1409 4.05859 14.8409 3.79859L13.2609 2.43859C12.5709 1.84859 11.4409 1.84859 10.7409 2.43859L9.17086 3.80859C8.87086 4.05859 8.30086 4.26859 7.91086 4.26859H6.18086C5.12086 4.26859 4.25086 5.13859 4.25086 6.19859V7.90859C4.25086 8.29859 4.04086 8.85859 3.79086 9.15859L2.44086 10.7486C1.86086 11.4386 1.86086 12.5586 2.44086 13.2486L3.79086 14.8386C4.04086 15.1386 4.25086 15.6986 4.25086 16.0886V17.7986C4.25086 18.8586 5.12086 19.7286 6.18086 19.7286H7.91086C8.30086 19.7286 8.87086 19.9386 9.17086 20.1986L10.7509 21.5586C11.4409 22.1486 12.5709 22.1486 13.2709 21.5586L14.8509 20.1986C15.1509 19.9386 15.7109 19.7286 16.1109 19.7286H17.8109C18.8709 19.7286 19.7409 18.8586 19.7409 17.7986V16.0986C19.7409 15.7086 19.9509 15.1386 20.2109 14.8386L21.5709 13.2586C22.1509 12.5686 22.1509 11.4286 21.5609 10.7386ZM16.1609 10.1086L11.3309 14.9386C11.1909 15.0786 11.0009 15.1586 10.8009 15.1586C10.6009 15.1586 10.4109 15.0786 10.2709 14.9386L7.85086 12.5186C7.56086 12.2286 7.56086 11.7486 7.85086 11.4586C8.14086 11.1686 8.62086 11.1686 8.91086 11.4586L10.8009 13.3486L15.1009 9.04859C15.3909 8.75859 15.8709 8.75859 16.1609 9.04859C16.4509 9.33859 16.4509 9.81859 16.1609 10.1086Z"
                      fill="#1F51FF"
                    />
                  </svg>
                </span>
                {feature.title}
              </dt>
            </div>
          ))}
        </dl>
      )}
      {/* Buttons & Badge */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <GlowButton ButtonText={ButtonText} Buttonlink={Buttonlink} />
        <VerticalDivider />
        <div className="ml-5 gap-1">
          <div className="flex flex-row gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                fill="#FFFFFF"
                className="w-4 h-4"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="clr-i-solid clr-i-solid-path-1"
                  d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z"
                ></path>
              </svg>
            ))}
          </div>
          <span className="text-gray-400 text-xs sm:text-sm">
            {HomeAboutTexts}
          </span>
        </div>
      </div>
    </div>
  );
};

export const HomeAboutContentHead = ({
  HomeAboutBadge,
  homeAboutHeading,
  HomeAboutSubHeading,
  HomeAboutDescription,
}) => {
  return (
    <div className="flex flex-col">
      {/* Badge */}
      <LeftBadge HomeAboutBadge={HomeAboutBadge} />
      {/* Headings */}
      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">
        {homeAboutHeading}
      </h3>
      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-400 mt-2">
        {HomeAboutSubHeading}
      </h3>
      <p className="text-base sm:text-sm lg:text-base font-medium text-gray-400 mt-2">
        {HomeAboutDescription}
      </p>
    </div>
  );
};

export const HomeAboutImg = ({ ImgLink }) => {
  return (
    <>
      <div className="flex justify-center lg:justify-start">
        <div className="p-3 backdrop-blur-md w-full sm:w-4/5 lg:w-lg rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 ring-1 ring-white/5">
          <img
            src={ImgLink}
            alt="About section"
            className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/5"
          />
        </div>
      </div>
    </>
  );
};

// FOR ABOUT PAGE
export const AboutAboutContent = ({
  // ABOUT FIRST HEADING AND SUB HEADING
  AboutBadge,
  AboutHeading,
  AboutSubHeading,
  AboutContents = [], // array of { title, text }
  AboutButton1,
  HomeAboutTexts1,
  // ABOUT SECOND HEADING AND SUB HEADING
  AboutBadge2,
  AboutHeading2,
  AboutSubHeading2,
  AboutContents2 = [], // array of { title, text }
  AboutButton2,
  HomeAboutTexts2,
}) => {
  return (
    <div className="flex flex-col">
      <AboutAboutContentHead
        // ABOUT FIRST HEADING AND SUB HEADING
        AboutBadge={AboutBadge}
        AboutHeading={AboutHeading}
        AboutSubHeading={AboutSubHeading}
        // ABOUT SECOND HEADING AND SUB HEADING
        AboutBadge2={AboutBadge2}
        AboutHeading2={AboutHeading2}
        AboutSubHeading2={AboutSubHeading2}
      />
      {/* Dynamic Content Blocks */}
      {AboutContents.map((content, i) => (
        <div key={i} className="mt-4 sm:mt-6">
          {content.title && (
            <p className="text-sm sm:text-base font-semibold lg:text-lg text-white leading-relaxed">
              {content.title}
            </p>
          )}
          {content.text && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
              {content.text}
            </p>
          )}
        </div>
      ))}
      {AboutContents2.map((content, i) => (
        <div key={i} className="mt-4 sm:mt-6">
          {content.title && (
            <p className="text-sm sm:text-base font-semibold lg:text-lg text-white leading-relaxed">
              {content.title}
            </p>
          )}
          {content.text && (
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed">
              {content.text}
            </p>
          )}
        </div>
      ))}

      {/* Buttons & Badge */}
      <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <GlowButton AboutButton1={AboutButton1} AboutButton2={AboutButton2} />
        <VerticalDivider />
        <div className="ml-5 gap-1">
          <div className="flex flex-row gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg
                key={i}
                fill="#FFFFFF"
                className="w-4 h-4"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="clr-i-solid clr-i-solid-path-1"
                  d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24Z"
                ></path>
              </svg>
            ))}
          </div>

          <span className="text-gray-400 text-xs sm:text-sm">
            {HomeAboutTexts1}
            {HomeAboutTexts2}
          </span>
        </div>
      </div>
    </div>
  );
};

export const AboutAboutContentHead = ({
  AboutBadge,
  AboutHeading,
  AboutSubHeading,
  AboutBadge2,
  AboutHeading2,
  AboutSubHeading2,
}) => {
  return (
    <div className="flex flex-col">
      {/* Badge */}
      <LeftBadge AboutBadge2={AboutBadge2} AboutBadge={AboutBadge} />
      {/* Headings */}
      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white">
        {AboutHeading}
        {AboutHeading2}
      </h3>
      <h3 className="text-2xl sm:text-3xl lg:text-5xl font-medium text-gray-400 mt-2">
        {AboutSubHeading}
        {AboutSubHeading2}
      </h3>
    </div>
  );
};

export const AboutAboutImg1 = ({ ImgLink }) => {
  return (
    <>
      <div className="flex justify-center lg:justify-start">
        <div className="p-3 backdrop-blur-md w-full sm:w-4/5 lg:w-lg rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 ring-1 ring-white/5">
          <img
            src={ImgLink}
            alt="About section"
            className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/5"
          />
        </div>
      </div>
    </>
  );
};
export const AboutAboutImg2 = ({ ImgLink }) => {
  return (
    <>
      <div className="flex justify-center lg:justify-start">
        <div className="p-3 backdrop-blur-md w-full sm:w-4/5 lg:w-lg rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 ring-1 ring-white/5">
          <img
            src={ImgLink}
            alt="About section"
            className="w-full h-auto rounded-3xl shadow-2xl ring-1 ring-white/5"
          />
        </div>
      </div>
    </>
  );
};
