import { getJobs } from '@/lib/jobs';
import {
  AiAgentsIndustries,
  AiExecutionServices,
  AiRoadmapSection,
  CareerFinalCta,
  CareerHero,
  DiagnoseBeforeDeploy,
  ProductionReadyAi,
} from '@/components/Career';

export const dynamic = 'force-dynamic';

const page = async () => {
  const jobs = await (await getJobs()).find({ status: 'active' }).sort({ createdAt: -1 }).toArray();
  return (
    <>
      <CareerHero />

      <AiRoadmapSection />

      {/* <AiRoadmapCapabilities /> */}

      <AiExecutionServices
        jobs={jobs.map(job => ({
          id: job._id.toHexString(),
          title: job.title,
          department: job.department,
          location: job.location,
          type: job.type,
          description: job.description,
        }))}
      />

      <DiagnoseBeforeDeploy />

      <AiAgentsIndustries />

      <ProductionReadyAi />

      <CareerFinalCta />
    </>
  );
};

export default page;
