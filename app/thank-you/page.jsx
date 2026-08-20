import Link from 'next/link';
import { HeroVideoBg } from 'components/HeroHead';
import { IntroHead } from 'uiComponents/Heading';
import { GlowButton } from 'components/Button';
import GlowPanel from 'components/GlowPanel';
import { HeroBadge } from 'components/HeroBadge';

export default function ThankYouPage() {
  return (
    <>
      <section className='relative isolate h-full w-full overflow-hidden py-16 sm:px-6 lg:px-8 lg:py-30'>
        {/* Background Video */}
        <HeroVideoBg />

        <div className='relative z-10 mx-auto flex min-h-[60vh] flex-col items-center justify-center pt-15 sm:pt-20 md:pt-20 lg:pt-20'>
          {/* Intro */}
          <div className='flex w-full flex-col gap-6 px-5 text-center lg:px-20'>
            <div className='flex items-center justify-center'>
              <div className='w-full max-w-2xl'>
                <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-r from-gray-950/90 to-black/80 p-3 shadow-lg sm:p-2'>
                  <div className='flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-black/70 p-8 text-center shadow-lg sm:p-12'>
                    <div className='mb-6 text-6xl text-green-400'>✓</div>
                    <h1 className='text-title mb-4 text-3xl font-bold'>Thank You!</h1>
                    <p className='mb-6 text-gray-300'>
                      Your message has been sent successfully. We&apos;ve received your inquiry and
                      our team will review it shortly.
                    </p>
                    <p className='mb-8 text-sm text-gray-400'>
                      We typically respond within 24 hours during business days.
                    </p>

                    {/* Navigation Buttons */}
                    <div className='flex w-full flex-col gap-4 sm:flex-row'>
                      <Link
                        href='/'
                        className='text-title inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 font-medium transition hover:from-blue-700 hover:to-blue-600'
                      >
                        ← Back to Home
                      </Link>
                      <Link
                        href='/contact'
                        className='text-title inline-flex flex-1 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-transparent px-6 py-3 font-medium transition hover:bg-white/10'
                      >
                        Send Another Message
                      </Link>
                    </div>

                    {/* Additional Links */}
                    <div className='mt-8 w-full border-t border-white/10 pt-6'>
                      <p className='mb-4 text-sm text-gray-400'>Explore more:</p>
                      <div className='flex flex-wrap justify-center gap-3'>
                        <Link
                          href='/about'
                          className='text-sm text-blue-400 transition hover:text-blue-300'
                        >
                          About Us
                        </Link>
                        <span className='text-gray-600'>•</span>
                        <Link
                          href='/portfolio'
                          className='text-sm text-blue-400 transition hover:text-blue-300'
                        >
                          Our Work
                        </Link>
                        <span className='text-gray-600'>•</span>
                        <Link
                          href='/faq'
                          className='text-sm text-blue-400 transition hover:text-blue-300'
                        >
                          FAQ
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
