import React from "react";

import { digitalMarketingData } from "../data";
import HeroSection from "../../../components/HeroSection";

const page = () => {
  return <HeroSection {...digitalMarketingData} />;
};

export default page;
