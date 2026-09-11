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
    <div className={['h-full', className].filter(Boolean).join(' ')}>
      <Card
        className={['relative flex h-full flex-col pb-10', cradClass].filter(Boolean).join(' ')}
        padding={padding}
      >
        <div>
          <div className=' '>
            <div className='mb-5 flex h-[330px] w-full items-center justify-center rounded-2xl bg-none'>
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
        <CardTitle className='text-title pb-2 text-[20px]'>{cardtitle}</CardTitle>
        <CardDescription>{carddescription}</CardDescription>
        <Link
          href={buttonurl}
          className='text-md text-title absolute bottom-0 left-5 flex items-center gap-2 pb-3 group-hover:text-blue-600'
        >
          {buttintext}
          <span className='-mb-1'>{buttonicon}</span>
        </Link>
      </Card>
    </div>
  );
};

export default ImageCard;
