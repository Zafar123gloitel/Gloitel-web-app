import { LeftSectionHeads } from 'components/SectionHeads';
import StrategyBadge from '@/components/StrategyBadge';
import { Card, CardDescription, CardIcon, CardTitle } from '../atoms/card';

const Strategy = ({
  cardData,
  SectionHead,
  SectionSubHead,
  SectionDescription,
  StrategyBadgeText,
  headingTag = 'h2',
  subHeadingTag = 'h3',
}) => {
  return (
    <section className='max-w-8xl mx-auto mb-10 px-4 sm:px-6 sm:py-10 lg:px-8 lg:pt-10 lg:pb-20 xl:px-20'>
      <div className='grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16'>
        {/* LEFT */}
        <div className='flex flex-col gap-4'>
          <span>
            <StrategyBadge text={StrategyBadgeText} />
          </span>
          <LeftSectionHeads
            SectionHead={SectionHead}
            SectionSubHead={SectionSubHead}
            SectionDescription={SectionDescription}
            headingTag={headingTag}
            subHeadingTag={subHeadingTag}
          />

          <div className='mt-2 grid gap-4 sm:mt-4 sm:gap-6'></div>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-4 lg:justify-end'>
          {cardData.map(item => (
            <Card key={item.id} className='w-[20rem]'>
              {item.icon && <CardIcon>{item.icon}</CardIcon>}
              {item.title && <CardTitle className='mb-5 text-3xl'>{item.title}</CardTitle>}
              <CardDescription>{item.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategy;
