'use client';

// import HeroSection from "../components/HeroSection";
import { BgSquare2 } from 'components/BgSquare';
import StrategyBadge from '../../../components/StrategyBadge';
import { MiddleSectionHeads } from 'components/SectionHeads';
import { CardShowcase } from '../../../components';
import GlowPanel from 'components/GlowPanel';
// import Strategy from "../components/Strategy";
import AI_Solutions from 'uiComponents/AI_Solutions';
import Execution_Plan from 'uiComponents/Execution_Plan';
// import Business from "../components/Business";
import {
  productAudienceData,
  productAudienceSectionHead,
  productEngineeringCTAData,
  productEngineeringHeroData,
  productionGradeData,
  productionGradeSectionHead,
  productPracticeData,
  productPracticeSectionHead,
  productStruggleData,
  productStruggleNote,
  productTechStackData,
} from './data';
import { ArrowRightIcon } from 'components/SvgIcon';
import ImageCard from 'components/ImageCard';
import HeroSection from '@/components/HeroSection';
import Business from '@/components/what-we-do/Business';
import Strategy from '@/components/what-we-do/Strategy';

const page = () => {
  return (
    <div>
      <section>
        <HeroSection
          badgeText={productEngineeringHeroData.badgeText}
          title={productEngineeringHeroData.title}
          description={productEngineeringHeroData.description}
          image={productEngineeringHeroData.image}
          imageAlt={productEngineeringHeroData.imageAlt}
          video={productEngineeringHeroData.video}
          primaryButton={productEngineeringHeroData.primaryButton}
          secondaryButton={productEngineeringHeroData.secondaryButton}
        />
      </section>
      <section>
        <GlowPanel />
        <Strategy
          cardData={productStruggleData.items}
          SectionHead={productStruggleData.heading}
          SectionSubHead={''}
          SectionDescription={productStruggleData.description}
          StrategyBadgeText={productStruggleData.badgeText}
        />
        <div
          className='mx-auto mt-4 flex max-w-[75%] items-center gap-3 rounded-2xl border border-transparent p-3'
          style={{
            background: `
                linear-gradient(#080B18, #080B18) padding-box,
                linear-gradient(to left,#372AAC00 0%,#372AAC33 45%,#1C398E66 100%) border-box
              `,
          }}
        >
          <span className='inline-flex h-12 min-w-12 items-center justify-center rounded-full bg-[#1447E633] text-2xl'>
            {productStruggleNote.icon}
          </span>
          <p className='text-title'>{productStruggleNote.text}</p>
        </div>
      </section>
      <section className='overflow-hidden py-20 lg:py-20'>
        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='-mt-44 flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            <span>
              <StrategyBadge text={productPracticeSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={productPracticeSectionHead.title}
              SectionDescription={productPracticeSectionHead.description}
            />
          </div>
        </div>

        <div className='-mt-10 flex flex-wrap items-center justify-center gap-6'>
          {productPracticeData.map(item => (
            <ImageCard
              key={item.id}
              className={''}
              cradClass={'w-[25rem] min-h-[550px]'}
              padding={'px-4'}
              cardtitle={item.title}
              carddescription={item.description}
              buttintext={item.buttonText}
              buttonurl={item.buttonLink}
              buttonicon={<ArrowRightIcon />}
              image={item.image}
            />
          ))}
        </div>
      </section>

      <section>
        <Business
          badgeText={productionGradeSectionHead.badgeText}
          sectionHead={productionGradeSectionHead.title}
          sectionSubHead=''
          sectionDescription={productionGradeSectionHead.description}
          data={productionGradeData}
        />
      </section>

      <section>
        <AI_Solutions
          badge={productTechStackData.badge}
          title={productTechStackData.title}
          description={productTechStackData.description}
          tabs={productTechStackData.tabs}
          technologies={productTechStackData.technologies}
        />
      </section>
      <section className='overflow-hidden'>
        <div className='relative z-10 mx-auto mt-10 flex min-h-[60vh] flex-col items-center justify-center'>
          <BgSquare2 />
          <div className='flex w-full flex-col gap-6.5 text-center sm:w-1/2 lg:w-1/2'>
            {/* Badge */}
            <span>
              <StrategyBadge text={productAudienceSectionHead.badgeText} />
            </span>
            <MiddleSectionHeads
              SectionHead={productAudienceSectionHead.title}
              SectionDescription={productAudienceSectionHead.description}
            />
          </div>
          <section className='mx-auto mt-20 w-full sm:w-[90%]'>
            <CardShowcase
              showStepBadge
              showDivider={false}
              items={productAudienceData}
              cardHeight='h-[250px]   max-w-[300px] '
              gridClassName='gap-y-28'
              titleClassName=''
              descriptionClassName=''
            />
          </section>
        </div>
      </section>
      <section>
        <Execution_Plan
          badgeText={productEngineeringCTAData.badgeText}
          title={productEngineeringCTAData.title}
          description={productEngineeringCTAData.description}
          buttonText={productEngineeringCTAData.buttonText}
          buttonLink={productEngineeringCTAData.buttonLink}
          onclick={() => undefined}
        />
      </section>
    </div>
  );
};

export default page;
