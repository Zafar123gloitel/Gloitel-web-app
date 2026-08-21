import Image from 'next/image';
import PropTypes from 'prop-types';

export const ImageCard2 = ({ HowWeWorkImg }) => {
  return (
    <>
      <div className='h-full'>
        <div className='sticky top-24'>
          <div className='pointer-events-none absolute bottom-0 h-[50px] w-[40%] translate-x-0 rounded-full bg-blue-700 blur-[30px] sm:bottom-0 sm:w-[40%] md:bottom-0 md:w-[50%] md:translate-x-50 lg:bottom-0 lg:w-[50%] lg:translate-x-30' />
          <div className='h-auto w-full rounded-3xl bg-gray-950/70 from-gray-950/90 to-black/80 p-3 ring-1 ring-white/5 backdrop-blur-md sm:w-4/5 md:h-1/2 md:w-full lg:w-full'>
            {/* Image */}
            <Image
              width={1920}
              height={1080}
              src={HowWeWorkImg}
              alt='About section'
              className='h-auto w-full rounded-3xl border border-gray-300/10 shadow-xl ring-1'
              unoptimized
              loading='lazy'
            />
          </div>

          {/* External Bottom Glow */}
        </div>
      </div>
    </>
  );
};

ImageCard2.propTypes = {
  HowWeWorkImg: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};
