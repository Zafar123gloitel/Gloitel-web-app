import Link from "next/link";
import { HeroVideoBg } from "../component/HeroHead";
import { IntroHead } from "../uiComponents/Heading";
import { GlowButton } from "../component/Button";
import GlowPanel from "../component/GlowPanel";
import { HeroBadge } from "../component/HeroBadge";

export default function ThankYouPage() {
  return (
    <>
      <section className="relative isolate sm:px-6 lg:px-8 py-16 lg:py-30 w-full h-full overflow-hidden">
        {/* Background Video */}
        <HeroVideoBg />

        <div className="flex flex-col items-center justify-center mx-auto min-h-[60vh] relative z-10 pt-15 sm:pt-20 md:pt-20 lg:pt-20">
          {/* Intro */}
          <div className="flex flex-col w-full text-center px-5 lg:px-20 gap-6">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <div className="border border-white/10 rounded-3xl shadow-lg p-3 relative bg-linear-to-r from-gray-950/90 to-black/80 sm:p-2 overflow-hidden">
                  <div className="bg-black/70 border border-white/10 rounded-3xl shadow-lg p-8 sm:p-12 flex flex-col items-center justify-center text-center">
                    <div className="text-green-400 text-6xl mb-6">✓</div>
                    <h1 className="text-3xl font-bold text-title mb-4">
                      Thank You!
                    </h1>
                    <p className="text-gray-300 mb-6">
                      Your message has been sent successfully. We&apos;ve
                      received your inquiry and our team will review it shortly.
                    </p>
                    <p className="text-gray-400 text-sm mb-8">
                      We typically respond within 24 hours during business days.
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-title font-medium py-3 px-6 rounded-lg transition cursor-pointer"
                      >
                        ← Back to Home
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center flex-1 bg-transparent border border-white/20 hover:bg-white/10 text-title font-medium py-3 px-6 rounded-lg transition cursor-pointer"
                      >
                        Send Another Message
                      </Link>
                    </div>

                    {/* Additional Links */}
                    <div className="mt-8 pt-6 border-t border-white/10 w-full">
                      <p className="text-gray-400 text-sm mb-4">
                        Explore more:
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        <Link
                          href="/about"
                          className="text-blue-400 hover:text-blue-300 text-sm transition"
                        >
                          About Us
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link
                          href="/portfolio"
                          className="text-blue-400 hover:text-blue-300 text-sm transition"
                        >
                          Our Work
                        </Link>
                        <span className="text-gray-600">•</span>
                        <Link
                          href="/faq"
                          className="text-blue-400 hover:text-blue-300 text-sm transition"
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
