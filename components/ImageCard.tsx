import Image from 'next/image';
import Link from 'next/link';
import { Card, CardDescription, CardTitle } from '@/components';

const ImageCard = ({
  className = '',
  cradClass,
  padding = 'p-5 sm:p-6',
  cardtitle = 'Healthcare Client ',
  carddescription = 'Deployed a private LLM for clinical documentation summarization. 70% reduction in admin time per consultation. Zero PHI data leaves the VPC.',
  buttintext = 'View Case Study ',
  buttonurl = '/',
  buttonicon,
  image = '',
}) => {
  return (
    <div className={['group h-full', className].filter(Boolean).join(' ')}>
      <Card
        className={[
          'relative flex h-full flex-col pb-10 transition-all duration-300 ease-out',
          'group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/10',
          cradClass,
        ]
          .filter(Boolean)
          .join(' ')}
        padding={padding}
      >
        <div>
          <div className=' '>
            {/* Image wrapper with diagonal shine sweep */}
            <div className='relative mb-5 flex h-[330px] w-full items-center justify-center overflow-hidden rounded-2xl bg-none'>
              <Image
                src={image}
                width={280}
                height={220}
                alt='menu'
                className='h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]'
                loading='lazy'
              />

              {/* Diagonal shine streak */}
              <div className='pointer-events-none absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%]' />

              {/* Subtle bottom-up tint on hover */}
              <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
            </div>
          </div>
        </div>

        <CardTitle className='text-title pb-2 text-[20px] transition-colors duration-300 group-hover:text-blue-400'>
          {cardtitle}
        </CardTitle>
        <CardDescription>{carddescription}</CardDescription>

        <Link
          href={buttonurl}
          className='text-md text-title absolute bottom-0 left-5 flex w-fit items-center gap-2 pb-3'
        >
          <span className='relative'>
            {buttintext}
            <span className='absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-300 ease-out group-hover:scale-x-100' />
          </span>
          <span className='transition-transform duration-300 ease-out group-hover:translate-x-1'>
            {buttonicon}
          </span>
        </Link>
      </Card>
    </div>
  );
};

export default ImageCard;
