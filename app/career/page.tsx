import React from 'react'
import { AiAgentsIndustries, AiExecutionServices,  AiRoadmapSection, CareerFinalCta, CareerHero, DiagnoseBeforeDeploy, ProductionReadyAi } from '../component/Career';

const page = () => {
  return (
    <>
      <CareerHero />

      <AiRoadmapSection />

      {/* <AiRoadmapCapabilities /> */}

      <AiExecutionServices />

      <DiagnoseBeforeDeploy />

      <AiAgentsIndustries />

      <ProductionReadyAi />

      <CareerFinalCta />
    </>
  );
}

export default page