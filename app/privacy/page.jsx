import { HeroBadge2 } from "../component/HeroBadge";

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
        {/* Container */}
        <div className="relative z-10 max-w-4xl mx-auto text-title py-16 px-6">
          {/* Title */}
          <div className="flex">
            <HeroBadge2 HomeHeroBadge="READ" HomeSubHeroBadge="Latest Policy" />
          </div>
          <h1 className="text-xl sm:text-4xl lg:text-7xl mb-2">
            Privacy Policy
          </h1>

          {/* Date */}
          <p className="text-gray-400 text-sm mb-10">
            Updated On: Oct 15, 2025, 10:00 AM
          </p>

          {/* MAIN CONTENT */}
          <div className="space-y-10 leading-relaxed text-[15px] sm:text-base">
            {/* 1. Information We Collect */}
            <section>
              <h2 className=" text-3xl mb-6">1. Information We Collect</h2>

              <p className="text-title mb-4">Personal Information</p>
              <p className="text-gray-400 mb-4">
                We may collect personal details such as your name, email
                address, phone number, employment information to process
                transactions, provide customer support, and offer personalized
                experiences.
              </p>

              <p className="text-title mb-4">Device and Usage Data</p>
              <p className="text-gray-400 mb-4">
                We automatically collect data when you interact with our
                services, including IP address, device details, operating
                system, browser version, and activity logs.
              </p>

              <p className="text-title mb-4">
                Cookies and Tracking Technologies
              </p>
              <p className="text-gray-400 mb-4">
                We use cookies and similar technologies to enhance your
                experience, remember preferences, and analyze site traffic. You
                can manage cookie settings through your browser.
              </p>
            </section>

            {/* 2. How We Use Your Information */}
            <section>
              <h2 className=" text-3xl mb-6">2. How We Use Your Information</h2>

              <p className="text-gray-400 mb-4">
                We use your information to enhance your experience and improve
                our services.
              </p>

              <ul className="list-disc pl-6 text-gray-400 space-y-1">
                <li>
                  Service Delivery: For tasks like registration, communication,
                  suggestions, and other features.
                </li>
                <li>
                  Improvement: To understand how you use our platform and
                  improve features accordingly.
                </li>
                <li>
                  Customer Support: To respond to support queries, verify your
                  identity, and resolve issues.
                </li>
                <li>
                  Security: To detect fraudulent activities and ensure the
                  safety and security of Global’s platforms.
                </li>
                <li>
                  Insights: Understanding usage behavior to enhance overall user
                  experience.
                </li>
              </ul>
            </section>

            {/* 3. Data Sharing */}
            <section>
              <h2 className=" text-3xl mb-6">3. Data Sharing and Disclosure</h2>
              <p className="text-gray-400 mb-4">
                We do not sell or share your personal information to third
                parties. However, we may share data under the following
                circumstances:
              </p>

              <ul className="list-disc pl-6 text-gray-400 space-y-1">
                <li>
                  Service Providers: With third-party vendors who assist in
                  operating Global’s platform.
                </li>
                <li>
                  Legal Requirements: If required by law or to comply with a
                  legal obligation.
                </li>
                <li>
                  Business Transfers: As part of a merger, acquisition, or
                  restructuring.
                </li>
              </ul>
            </section>

            {/* 4. Data Security */}
            <section>
              <h2 className=" text-3xl mb-6">4. Data Security</h2>
              <p className="text-gray-400">
                We use security measures to protect your data from unauthorized
                access, data breaches, or misuse. However, no online service is
                fully secure, and we cannot guarantee absolute protection.
              </p>
            </section>

            {/* 5. Your Data Rights */}
            <section>
              <h2 className=" text-3xl mb-6">5. Your Data Rights</h2>

              <p className="text-gray-400 mb-4">
                You have rights regarding your personal information, including:
              </p>

              <ul className="list-disc pl-6 text-gray-400 space-y-1">
                <li>Right to access the data we hold about you.</li>
                <li>
                  Right to request correction or deletion of inaccurate
                  information.
                </li>
                <li>
                  Right to withdraw consent at any time, subject to legal
                  obligations.
                </li>
                <li>Right to restrict processing in certain cases.</li>
              </ul>
            </section>

            {/* 6. Third-Party Links */}
            <section>
              <h2 className=" text-3xl mb-6">6. Third-Party Links</h2>
              <p className="text-gray-400">
                Our Website may include links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those websites.
              </p>
            </section>

            {/* 7. Children's Privacy */}
            <section>
              <h2 className=" text-3xl mb-6">7. Children’s Privacy</h2>
              <p className="text-gray-400">
                Our services are not intended for children under the age of 13.
                We do not knowingly collect personal information from children.
              </p>
            </section>

            {/* 8. Changes to Policy */}
            <section>
              <h2 className=" text-3xl mb-6">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-400">
                We may update this Privacy Policy periodically. Changes will
                appear on this page, and we encourage you to review this policy
                regularly.
              </p>
            </section>

            {/* 9. Contact */}
            <section>
              <h2 className=" text-3xl mb-6">9. Contact Us</h2>
              <p className="text-gray-400">
                For questions or concerns regarding this Privacy Policy, contact
                us at:
                <span className="text-blue-400"> info@gloitel.com</span>
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
