import Image from 'next/image';

interface TestimonialCardProps {
  name?: string;
  designation?: string;
  description?: string;
  avatar?: string;
}

const TestimonialCard = ({
  name = 'Durgesh Sahu',
  designation = 'Founder and Director',
  description = `Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing. Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing. Move from a single server to horizontally scalable infrastructure. Container orchestration, auto-scaling groups, load balancing.`,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className='relative w-[300px] min-sm:w-[355px]'>
      {/* Testimonial Badge */}

      {/* Outer Purple Border */}
      <div className='relative rounded-none p-[2px] shadow-[0_0_18px_rgba(147,51,234,0.18)]'>
        {/* Inner Card */}
        <div className='relative min-h-[325px] overflow-hidden rounded-[18px] border border-white/10 bg-[#05050d] px-7 py-7'>
          {/* Subtle top/right glow */}
          <div className='pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-600/10 blur-3xl' />

          {/* User Info */}
          <div className='relative flex items-center gap-4'>
            {/* Avatar */}
            <div className='relative h-[50px] w-[50px] shrink-0'>
              {avatar ? (
                <Image
                  src={avatar}
                  alt={name}
                  width={50}
                  height={50}
                  className='h-full w-full rounded-full object-cover'
                  loading='lazy'
                />
              ) : (
                <div className='h-full w-full rounded-full bg-white shadow-[0_0_18px_rgba(59,130,246,0.35)]' />
              )}
            </div>

            {/* Name + Designation */}
            <div>
              <h3 className='text-title text-[20px] font-medium'>{name}</h3>

              <p className='mt-1 text-[14px] text-[#2563eb]'>{designation}</p>
            </div>
          </div>

          {/* Divider */}
          <div className='my-7 h-px w-full bg-white/[0.07]' />

          {/* Testimonial */}
          <p className='text-description text-[16px] leading-[1.65] font-normal'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
