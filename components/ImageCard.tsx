import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardDescription, CardTitle } from '@/components';

const ImageCard = ({
  className: _className = '',
  cradClass,
  padding = '',
  cardtitle = 'Healthcare Client ',
  carddescription = 'Deployed a private LLM for clinical documentation summarization. 70% reduction in admin time per consultation. Zero PHI data leaves the VPC.',
  buttintext = 'View Case Study ',
  buttonurl = '/',
  buttonicon,
  image = '',
}) => {
  return (
    <div>
      {' '}
      <Card className={cradClass}>
        <div>
          <div className=' '>
            <div className='mb-5 flex h-[270px] w-full items-center justify-center rounded-2xl bg-none'>
              <Image
                src={image}
                width={280}
                height={220}
                alt='menu'
                className='h-full w-full'
                loading='lazy'
              />
            </div>
          </div>
        </div>
        <CardTitle className='text-title text-[20px]'>{cardtitle}</CardTitle>
        <CardDescription>{carddescription}</CardDescription>
        <div className={[padding, 'relative z-10'].filter(Boolean).join(' ')}>
          {/* <h3
            className={[
              "text-3xl font-normal leading-[1.08] tracking-[-0.04em] text-title text-left",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {cardtitle}
          </h3> */}

          {/* <p
            className={["text-base py-2 leading-6 text-description text-left"]
              .filter(Boolean)
              .join(" ")}
          >
            {carddescription}
          </p> */}
        </div>
        <Link
          href={buttonurl}
          className='text-md text-title absolute bottom-1.5 left-5 flex items-center gap-2 pb-3 group-hover:text-blue-600'
        >
          {buttintext}
          <span className='-mb-1'>{buttonicon}</span>
        </Link>
      </Card>
    </div>
  );
};

export default ImageCard;
