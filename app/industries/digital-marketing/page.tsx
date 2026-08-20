import React from 'react';

import HeroSection from '../../../components/HeroSection';
import { realEstateHeroData } from './data';

const page = () => {
  return <HeroSection {...realEstateHeroData} />;
};

export default page;
