import React from "react";
import { HorizontalDivider } from "./SectionDivider";
import Link from "next/link";

const ContactForm = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-3 border border-white/10 rounded-3xl shadow-lg p-3 relative bg-gradient-to-r from-gray-950/90 to-black/80  sm:p-2  overflow-hidden ">
          <div className="lg:col-span-3 bg-black/70 border border-white/10 rounded-3xl shadow-lg p-6 sm:p-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    First name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  How can we reach you?*
                </label>
                <input
                  type="email"
                  placeholder="Example@mail.com"
                  className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Where Are you from?*
                  </label>
                  <select className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select your country...</option>
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    What’s the type of your company?*
                  </label>
                  <select className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <option>Select Category</option>
                    <option>IT</option>
                    <option>Finance</option>
                    <option>Education</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message*
                </label>
                <textarea
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 rounded-lg transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className=" bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-2 rounded-3xl shadow-lg border border-white/10">
            <div className="bg-black-700 border border-white/10 rounded-3xl p-6 ">
              <p className="flex items-center justify-between text-white text-sm font-medium">
                <span className="flex items-center gap-2">✉️ Email</span>
                <span className="bg-blue-600 text-xs font-semibold px-2 py-0.5 rounded">
                  24/7
                </span>
              </p>
              <HorizontalDivider />
              <Link
                className="mt-2 text-gray-400 text-sm"
                href={"mailto:gloitel-it@gloitel.in"}
              >
                gloitel-it@gloitel.in
              </Link>
            </div>
          </div>

          <div className=" bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-2 rounded-3xl shadow-lg border border-white/10">
            <div className="bg-black-700 border border-white/10 rounded-3xl p-6">
              <p className="flex items-center gap-2 text-white text-sm font-medium">
                📞 Phone
              </p>
              <HorizontalDivider />
              <Link
                className="mt-2 text-gray-400 text-sm"
                href={"tel:+919711203424"}
              >
                (+91) 9711203424
              </Link>
            </div>
          </div>

          <div className=" bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-2 rounded-3xl shadow-lg border border-white/10">
            <div className="bg-black-700 border border-white/10 rounded-3xl p-6">
              <p className="flex items-center justify-between text-white text-sm font-medium">
                <span className="flex items-center gap-2">📍 Address</span>
                <span className="bg-blue-600 text-xs font-semibold px-2 py-0.5 rounded">
                  OFFICE
                </span>
              </p>
              <HorizontalDivider />
              <Link
                target="_blank"
                href="https://maps.app.goo.gl/uNbYXqo81S7Wfuj37"
                className="mt-2 text-gray-400 text-sm leading-relaxed"
              >
                477/4, Muskan Residency road, Lalpur, Pachpedi Naka, <br />
                Raipur, Chhattisgarh 492001
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
