'use client';

// import HeroSection from "../../components/HeroSection";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
// import PurposeCard from "../../components/PurposeCard";
// import Discover from "../../components/Discover";
// import Assess from "../../components/Assess";
import Not_Every_Problem from 'components/Not_Every_Problem';
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
import {
  aiSolutionsDataJson,
  baselineBenchmarkingStep,
  dataAssessmentStep,
  featureEngineeringStep,
  modelDevelopmentSelectionStep,
  notEveryProblemData,
  outcomesData2,
  validationTestingStep,
} from './data';
import { ArrowRightIcon } from 'components/SvgIcon';
import HeroSection from '@/components/HeroSection';
import Assess from '@/components/what-we-do/Assess';
import Discover from '@/components/what-we-do/Discover';
import PurposeCard from '@/components/what-we-do/PurposeCard';

const page = () => {
  return (
    <div className='overflow-hidden'>
      <section>
        <HeroSection
          badgeText='ML & Predictive Analytics'
          title='Models Built for Your Data. Validated on Your Metrics.'
          description='General-purpose AI answers general questions. If your business has specific prediction needs - demand forecasting, churn prediction, fraud detection, quality control - you need models trained on your data, optimized for your outcomes.'
          image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1786613038/Gloitel/what%20we%20do/ML_Predictive_Analytics_lkiy5f.png'
          imageAlt='Hero Image'
          video='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          primaryButton={{
            href: '/contact',
            text: 'Discuss Your Prediction Challenge',
          }}
          secondaryButton={{
            href: '/case-studies',
            text: 'Explore ML Case Studies',
            icon: <ArrowRightIcon size={20} />,
          }}
        />
      </section>
      <section>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-40 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text='ML Solutions We Build' />
            </span>
            <MiddleSectionHeads
              SectionHead='Purpose-Built Models. Measurable Outcomes.'
              SectionSubHead=''
              SectionDescription='Custom machine learning solutions designed to improve forecasting, automate decisions, detect anomalies, and unlock value from 
complex datasets.'
            />
          </div>
        </div>

        <div className='mx-auto -mt-10 sm:w-[80%]'>
          <div className='grid grid-cols-1 gap-4 p-5 xl:grid-cols-2'>
            {outcomesData2.map(item => (
              <PurposeCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
                className=''
              />
            ))}
          </div>
        </div>
      </section>
      <section className='relative z-10 mx-auto mt-30 flex min-h-[60vh] flex-col items-center justify-center'>
        <BgSquare2 />
        <div className='-mt-10 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
          {/* Badge */}
          <span>
            <StrategyBadge text='Our ML Development Process' />
          </span>
          <MiddleSectionHeads
            SectionHead='Built, Tested, and Validated for Production'
            SectionSubHead=' '
            SectionDescription='Every model follows a rigorous process of data assessment, feature engineering, validation, and monitoring to ensure 
measurable business outcomes.'
          />
        </div>
        <section className='mx-auto -mt-10 md:w-[80%]'>
          <Discover
            badgeText={dataAssessmentStep.badgeText}
            title={dataAssessmentStep.title}
            description={dataAssessmentStep.description}
            buttonText={dataAssessmentStep.buttonText}
            buttonLink={dataAssessmentStep.buttonLink}
            image={dataAssessmentStep.image}
            imageAlt={dataAssessmentStep.imageAlt}
          />
          <Assess
            badgeText={baselineBenchmarkingStep.badgeText}
            title={baselineBenchmarkingStep.title}
            description={baselineBenchmarkingStep.description}
            buttonText={baselineBenchmarkingStep.buttonText}
            buttonLink={baselineBenchmarkingStep.buttonLink}
            image={baselineBenchmarkingStep.image}
            imageAlt={baselineBenchmarkingStep.imageAlt}
          />
          <Discover
            badgeText={featureEngineeringStep.badgeText}
            title={featureEngineeringStep.title}
            description={featureEngineeringStep.description}
            buttonText={featureEngineeringStep.buttonText}
            buttonLink={featureEngineeringStep.buttonLink}
            image={featureEngineeringStep.image}
            imageAlt={featureEngineeringStep.imageAlt}
          />
          <Assess
            badgeText={modelDevelopmentSelectionStep.badgeText}
            title={modelDevelopmentSelectionStep.title}
            description={modelDevelopmentSelectionStep.description}
            buttonText={modelDevelopmentSelectionStep.buttonText}
            buttonLink={modelDevelopmentSelectionStep.buttonLink}
            image={modelDevelopmentSelectionStep.image}
            imageAlt={modelDevelopmentSelectionStep.imageAlt}
          />
          <Discover
            badgeText={validationTestingStep.badgeText}
            title={validationTestingStep.title}
            description={validationTestingStep.description}
            buttonText={validationTestingStep.buttonText}
            buttonLink={validationTestingStep.buttonLink}
            image={validationTestingStep.image}
            imageAlt={validationTestingStep.imageAlt}
          />
        </section>
      </section>
      <section>
        <AI_Solutions
          badge={aiSolutionsDataJson.badge}
          title={aiSolutionsDataJson.title}
          description={aiSolutionsDataJson.description}
          tabs={aiSolutionsDataJson.tabs}
          technologies={aiSolutionsDataJson.technologies}
        />
      </section>
      <section>
        <Not_Every_Problem {...notEveryProblemData} />
      </section>
      <section>
        <Execution_Plan
          badgeText='Start Your ML Initiative'
          title='Build ML Systems that Measurable Outcomes'
          description="Whether you're exploring your first ML use case or scaling existing models, we help you build solutions that create real operational impact."
          buttonText='Talk to Our ML Team'
          buttonLink='/contact'
          onclick={() => undefined}
        />
      </section>
    </div>
  );
};

export default page;
