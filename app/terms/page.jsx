import { HeroBadge2 } from "components/HeroBadge";

export default function TermsPage() {
  return (
    <>
      <section className="relative isolate px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full h-full z-10  overflow-hidden">
        {/* Background Video */}
        <video
          src="https://res.cloudinary.com/dsqu6pi0d/video/upload/v1762846419/Gloitel/bg_cij8h5.mp4"
          type="video/mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          unoptimized="true"
        ></video>
        <div className="relative z-10 max-w-4xl mx-auto text-title py-16 px-6">
          {/* Container */}
          <div className="max-w-4xl mx-auto">
            <div className="flex">
              <HeroBadge2
                HomeHeroBadge="READ"
                HomeSubHeroBadge="Terms & Conditions"
              />
            </div>
            {/* Title */}
            <h1 className="text-xl sm:text-4xl lg:text-7xl mb-2">
              Terms & Conditions
            </h1>

            {/* Date */}
            <p className="text-gray-400 text-sm mb-10">
              Last Updated: Oct 15, 2025, 10:00 AM
            </p>

            {/* Content */}
            <div className="space-y-10 leading-relaxed text-[15px] sm:text-base">
              {/* 1 */}
              <section>
                <h2 className=" text-3xl mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-400">
                  By using Global Consultancy Pvt. Ltd (the “Site” or “we”), you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms and Conditions (“Terms”) and our Privacy
                  Policy. These Terms apply to all users of our platforms and
                  services, including visitors, clients, and anyone involved in
                  accessing Global’s digital platforms.
                </p>
              </section>

              {/* 2 */}
              <section>
                <h2 className=" text-3xl mb-6">
                  2. Use of Website and Services
                </h2>
                <p className="text-gray-400 mb-3">
                  To access our services and create user agreements, users must
                  comply with the following guidelines when accessing or using
                  the Global Website:
                </p>
                <ul className="list-disc pl-6 text-gray-400 space-y-1">
                  <li>
                    Eligibility: You must be at least 18 years of age to access
                    or use the Website.
                  </li>
                  <li>User Account Management:</li>
                  <ul className="list-[circle] pl-6 space-y-1">
                    <li>Do not share passwords.</li>
                    <li>
                      Do not transmit harmful, defamatory, or offensive content.
                    </li>
                    <li>
                      Ensure the information shared is accurate and free of
                      impersonation.
                    </li>
                  </ul>
                  <li>
                    Global reserves the right to immediately suspend any account
                    that violates this policy.
                  </li>
                </ul>
              </section>

              {/* 3 */}
              <section>
                <h2 className=" text-3xl mb-6">
                  3. Use of Website and Data Policies
                </h2>
                <p className="text-gray-400">
                  Users must comply with the security functionality and best
                  practices of this Website.
                </p>
              </section>

              {/* 4 */}
              <section>
                <h2 className=" text-3xl mb-6">4. Intellectual Property</h2>
                <p className="text-gray-400">
                  All content, trademarks, visuals, and other digital elements
                  on the Global Website are the property of Global Consulting
                  Pvt. Ltd. and cannot be used without written permission.
                </p>
              </section>

              {/* 5 */}
              <section>
                <h2 className=" text-3xl mb-6">5. Disclaimer of Warranty</h2>
                <p className="text-gray-400">
                  All content, services, and information available on this
                  Website are provided “as is” and “as available” basis. Global
                  makes no warranties—express or implied—regarding the
                  reliability, accuracy, or availability of the Website or its
                  content. We do not guarantee that the Website will be free
                  from errors or interruptions.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h2 className=" text-3xl mb-6">6. Limitation of Liability</h2>
                <p className="text-gray-400">
                  To the maximum extent permitted by law, Global Consultancy
                  Pvt. Ltd. shall not be held liable for any direct, indirect,
                  incidental, or consequential damages resulting from the use or
                  inability to use this Website. This includes damages arising
                  from data loss or unauthorized access to user data.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2 className=" text-3xl mb-6">7. Use of Images and Videos</h2>
                <p className="text-gray-400">
                  Global may use images, videos, and client-related materials
                  that have been sourced from public domains or platforms like
                  Google. Users retain rights to their materials unless stated
                  otherwise.
                </p>
              </section>

              {/* 8 */}
              <section>
                <h2 className=" text-3xl mb-6">8. Software and Downloads</h2>
                <p className="text-gray-400">
                  The software, digital tools, and files offered on this Website
                  are protected under applicable copyright and intellectual
                  property laws. Users may download materials strictly for
                  personal use.
                </p>
              </section>

              {/* 9 */}
              <section>
                <h2 className=" text-3xl mb-6">9. Termination</h2>
                <p className="text-gray-400">
                  Global reserves the right to terminate or restrict user access
                  to the Website without notice for any reason, including
                  violation of these Terms.
                </p>
              </section>

              {/* 10 */}
              <section>
                <h2 className=" text-3xl mb-6">10. Governing Law</h2>
                <p className="text-gray-400">
                  These Terms are governed by and construed in accordance with
                  applicable laws of India.
                </p>
              </section>

              {/* 11 */}
              <section>
                <h2 className=" text-3xl mb-6">11. Contact Us</h2>
                <p className="text-gray-400">
                  For any questions or concerns regarding these Terms, contact
                  us at:
                  <span className="text-blue-400"> info@gloitel.com</span>
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
