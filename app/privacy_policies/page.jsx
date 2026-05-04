import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] font-[Montserrat]">
      <Head>
        <title>Fitbattle Privacy Policy</title>
        <meta
          name="description"
          content="Fitbattle Privacy Policy - Effective from 29 April 2025"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-4xl px-4 pt-[130px] pb-12">
        <div className="bg-white rounded-2xl shadow-md p-8">
          {/* HEADER */}
          <h1 className="text-3xl font-bold mb-2">Fitbattle Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: 29 April 2025</p>

          {/* INTRO */}
          <section className="space-y-4 text-gray-700">
            <p>
              Welcome to Fitbattle, operated by Prowfit Health Private Limited
              (“Fitbattle”, “we”, “us”, or “our”). Your privacy is paramount,
              and we are committed to protecting your personal information.
            </p>

            <p>
              For questions or concerns, contact us at{" "}
              <Link
                href="mailto:js@prowfit.in"
                className="text-blue-600 underline"
              >
                js@prowfit.in
              </Link>
              .
            </p>

            <p>
              Apple Inc. is not a sponsor or involved in any contests or
              competitions offered in this app.
            </p>

            <p className="font-semibold">
              If you do not agree with this Privacy Policy, please do not use
              our Website or App.
            </p>
          </section>

          {/* TABLE OF CONTENTS */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {[
                "What Data Do We Collect?",
                "How Do We Use Your Data?",
                "Will Your Data Be Shared?",
                "With Whom Do We Share Your Data?",
                "Cookies & Tracking",
                "Google Maps",
                "Social Media Logins",
                "Global Transfers",
                "Data Retention",
                "Data Security",
                "Minors",
                "Your Privacy Rights",
                "Do-Not-Track",
                "Policy Updates",
                "Contact Us",
                "Access / Update / Delete Data",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* SECTION TEMPLATE */}
          <Section title="A. What Data Do We Collect?">
            <p>
              We collect personal data you provide when creating an account,
              including name and email.
            </p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Date of birth, gender, phone number</li>
              <li>
                Health & fitness data (weight, steps, sleep, workouts,
                nutrition, etc.)
              </li>
            </ul>

            <p>
              Payments are securely processed by PhonePe. We do not store card
              details.
            </p>
          </Section>

          <Section title="B. How Do We Use Your Data?">
            <ul className="list-disc pl-6 space-y-2">
              <li>Account creation and authentication</li>
              <li>Personalized fitness & nutrition plans</li>
              <li>Order processing and payments</li>
              <li>Customer support and communication</li>
              <li>Marketing (only with consent)</li>
              <li>Security, fraud prevention, and compliance</li>
            </ul>
          </Section>

          <Section title="C. Will Your Data Be Shared?">
            <p>
              We only share your data when legally required, necessary to
              provide services, or with your consent.
            </p>
          </Section>

          <Section title="D. With Whom Do We Share Your Data?">
            <ul className="list-disc pl-6 space-y-1">
              <li>AWS (Cloud Hosting)</li>
              <li>PhonePe (Payments)</li>
              <li>Google & Apple (Authentication)</li>
              <li>Google Analytics & Firebase</li>
              <li>WhatsApp (User communication)</li>
            </ul>
          </Section>

          <Section title="E. Cookies & Tracking">
            <p>
              We use cookies and Google Analytics to improve performance and
              user experience. You can manage cookies via browser settings.
            </p>
          </Section>

          <Section title="F. Google Maps">
            <p>
              We use Google Maps APIs. Use of Maps is subject to Google’s Terms
              of Service.
            </p>
          </Section>

          <Section title="G. Social Media Logins">
            <p>
              Logging in via Google or Apple provides us with limited profile
              data required for authentication.
            </p>
          </Section>

          <Section title="H. Global Data Transfers">
            <p>
              Data is stored on AWS servers in India and may be processed
              globally where legally permitted.
            </p>
          </Section>

          <Section title="I. Data Retention">
            <p>
              We retain personal data only while your account is active or as
              required by law.
            </p>
          </Section>

          <Section title="J. Data Security">
            <p>
              We use industry-standard security measures, but no system is 100%
              secure.
            </p>
          </Section>

          <Section title="K. Minors">
            <p>
              Our services are not intended for users under 18. Accounts found
              in violation are deleted.
            </p>
          </Section>

          <Section title="L. Your Privacy Rights">
            <p>
              You may request access, correction, or deletion of your data by
              emailing{" "}
              <Link href="mailto:js@prowfit.in" className="text-blue-600">
                js@prowfit.in
              </Link>
              .
            </p>
          </Section>

          <Section title="M. Do-Not-Track">
            <p>We currently do not respond to Do-Not-Track browser signals.</p>
          </Section>

          <Section title="N. Policy Updates">
            <p>We may update this policy. Please review it periodically.</p>
          </Section>

          <Section title="O. Contact Us">
            <p className="font-medium">Prowfit Health Private Limited</p>
            <p>Flat No. D-7, 3F 10-11 Nirwana App, New Delhi – 110030</p>
            <p>
              Email:{" "}
              <Link href="mailto:js@prowfit.in" className="text-blue-600">
                js@prowfit.in
              </Link>
            </p>
          </Section>

          <Section title="P. Access / Update / Delete Data">
            <p>
              Email{" "}
              <Link href="mailto:js@prowfit.in" className="text-blue-600">
                js@prowfit.in
              </Link>{" "}
              and we’ll respond within 30 days.
            </p>
          </Section>
        </div>
      </main>
    </div>
  );
}

/* REUSABLE SECTION COMPONENT */
function Section({ title, children }) {
  return (
    <section className="mt-10 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
      <div className="text-gray-700 space-y-3">{children}</div>
    </section>
  );
}
