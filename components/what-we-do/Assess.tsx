import Image from 'next/image';
// import StrategyBadge from "../../../components/StrategyBadge";
// import ProblemCard from "../../../components/ProblemCard";
import { WhiteButton } from 'components/Button';
import { ArrowRightIcon } from 'components/SvgIcon';
import ProblemCard from '../ProblemCard';
import StrategyBadge from '../StrategyBadge';

interface AssessProps {
  badgeText: string;
  title: string;
  subtitle?: string;
  description: string;
  cardTitle?: string;
  buttonText?: string;
  buttonLink?: string;
  image: string;
  imageAlt?: string;
}

const Assess = ({
  badgeText,
  title,
  subtitle,
  description,
  cardTitle,
  buttonText,
  buttonLink,
  image,
  imageAlt = 'Section Image',
}: AssessProps) => {
  return (
    <section className='discover-section max-w-8xl m-auto mt-16 flex flex-col justify-between gap-33.25 overflow-hidden px-6 py-10 sm:px-10 md:mt-24.25 lg:flex-row-reverse lg:px-14 lg:py-14 xl:mx-20'>
      {/* Content */}
      <div className='flex-1'>
        <span className='mb-6 block'>
          <StrategyBadge text={badgeText} />
        </span>

        <span className='flex gap-5'>
          <h2 className='text-title mb-6 text-5xl sm:text-[48px]'>{title}</h2>
          {subtitle && (
            <h3 className='text-description mb-6 text-4xl sm:text-[35px]'>{subtitle}</h3>
          )}
        </span>

        <p className='text-md text-description leading-5 sm:text-[20px] sm:leading-8'>
          {description}
        </p>

        {cardTitle && (
          <div className='mt-10 inline-block'>
            <ProblemCard title={cardTitle} />
          </div>
        )}
        {buttonText && buttonLink && (
          <WhiteButton
            buttonText={buttonText}
            buttonLink={buttonLink}
            icon={<ArrowRightIcon size={20} />}
            className='mt-4'
          />
        )}
      </div>

      {/* Image */}
      <div className='flex-1 lg:max-w-[50%]'>
        <div className='relative aspect-[4/3] overflow-hidden rounded-[1.4rem] shadow-[0_0_60px_rgba(255,255,255,0.25)]'>
          <Image
            src={image}
            alt={imageAlt}
            width={455}
            height={445}
            className='h-full w-full rounded-[24px] object-cover'
            unoptimized
            loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent' />
        </div>
      </div>
    </section>
  );
};

export default Assess;
