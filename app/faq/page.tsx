import { FAQPage } from '@/components/Faq';
import JoinUsNow from '@/components/JoinUsNow';
const page = () => {
  return (
    <div>
      <section className='relative py-30 sm:px-6 sm:py-16 lg:px-8 lg:py-30'>
        {/* Background Video */}

        <video
          src='https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4'
          className='absolute top-0 left-0 h-full w-full object-cover'
          autoPlay
          muted
          loop
          playsInline
        />

        <div className='relative'>
          <FAQPage />
        </div>
        <JoinUsNow />
      </section>
    </div>
  );
};

export default page;
