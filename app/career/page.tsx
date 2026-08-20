import {
  AiAgentsIndustries,
  AiExecutionServices,
  AiRoadmapSection,
  CareerFinalCta,
  CareerHero,
  DiagnoseBeforeDeploy,
  ProductionReadyAi,
} from "@/components/Career";

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
};

export default page;
