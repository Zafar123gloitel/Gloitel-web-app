'use client';

import Not_Every_Problem from 'components/Not_Every_Problem';
import {
  designSystemComponentsData,
  designSystemComponentsSectionHead,
  designSystemDeliverablesData,
  designSystemDeliverablesSectionHead,
  designSystemsCTAData,
  designSystemsHeroData,
  foundationDecisionData,
  maintenanceData,
  maintenanceSectionHead,
} from './data';

import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import ProblemCard from '../../../../components/ProblemCard';
import { CardShowcase } from '../../../../components';
import Execution_Plan from 'uiComponents/Execution_Plan';
// import HeroSection from "../../components/HeroSection";
import ArchitectureCircle from 'uiComponents/ArchitectureCircle';
import HeroSection from '@/components/HeroSection';

const page = () => {
  const positions = {
    top: 'lg:top-0 lg:left-1/2 -translate-x-1/2',
    leftTop: 'lg:left-0 xl:left-10 2xl:left-60 lg:top-40',
    rightTop: 'lg:right-0 xl:right-10 2xl:right-60 lg:top-40',
    leftBottom: 'lg:left-0 xl:left-10 2xl:left-60 lg:bottom-40',
    bottom: 'lg:-bottom-5 lg:left-1/2 -translate-x-1/2',
    rightBottom: 'lg:right-0 xl:right-10 2xl:right-60 lg:bottom-40',
  };
  return (
    <div>
      <HeroSection {...designSystemsHeroData} />
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={designSystemComponentsSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={designSystemComponentsSectionHead.title}
              SectionDescription={designSystemComponentsSectionHead.description}
            />
          </div>
        </div>

        <section className='-mt-10 flex items-center'>
          <ArchitectureCircle
            data={designSystemComponentsData}
            image='https://res.cloudinary.com/dsqu6pi0d/image/upload/v1787033712/Gloitel/Digital%20Experience%20Design/What_a_Design_System_Includes_oghj6c.png'
            positions={positions}
          />
          ;
        </section>
      </section>
      <section>
        <Not_Every_Problem {...foundationDecisionData} />
      </section>
      <section className='overflow-hidden py-12 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={designSystemDeliverablesSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={designSystemDeliverablesSectionHead.title}
              SectionDescription={designSystemDeliverablesSectionHead.description}
            />
          </div>
        </div>

        <section className='-mt-20 grid w-full grid-cols-1 gap-6 px-10 sm:mx-auto md:w-[80%]'>
          {designSystemDeliverablesData.map((item, index) => (
            <ProblemCard
              key={index}
              title={item.text}
              step
              number={index + 1}
              isLast={index === designSystemDeliverablesData.length - 1}
            />
          ))}
        </section>
      </section>
      <section>
        <section className='overflow-hidden'>
          <div className='relative z-10 mx-auto mt-20 flex min-h-[60vh] flex-col items-center justify-center'>
            <BgSquare2 />
            <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
              {/* Badge */}
              <span>
                <StrategyBadge text={maintenanceSectionHead.badgeText} />
              </span>
              <MiddleSectionHeads
                SectionHead={maintenanceSectionHead.title}
                SectionDescription={maintenanceSectionHead.description}
              />
            </div>
          </div>
          <section className='mx-auto -mt-20 w-full sm:w-[90%]'>
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={maintenanceData}
              cardHeight='h-[330px]  max-w-[330px] '
              gridClassName='gap-y-28'
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </section>
        <Execution_Plan
          badgeText={designSystemsCTAData.badgeText}
          title={designSystemsCTAData.title}
          description={designSystemsCTAData.description}
          buttonText={designSystemsCTAData.buttonText}
          buttonLink={designSystemsCTAData.buttonLink}
          onclick={() => undefined}
        />
      </section>
    </div>
  );
};

export default page;
