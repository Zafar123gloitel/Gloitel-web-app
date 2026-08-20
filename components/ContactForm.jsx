"use client";

import React, { useState } from "react";
import { HorizontalDivider } from "./SectionDivider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "./Button";

const ContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    companyType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    https: try {
      // Send to Google Sheets API (no-cors required for Google Apps Script)

      const formData1 = new FormData();

      // Map fields exactly as Apps Script expects
      formData1.append("firstName", formData.firstName);
      formData1.append("lastName", formData.lastName);
      formData1.append("email", formData.email);
      formData1.append("country", formData.country);
      formData1.append("companyType", formData.companyType);
      formData1.append("message", formData.message);

      console.log("Sending data to Google Sheets...", formData1);
      const sheetsResponse = await fetch(
        "https://script.google.com/macros/s/AKfycbyZIi7rXRJpXo9w7TBJ7W2HrvlePb_ats__aLx3aqbDo1aarKHeNVFMzLkde1vbXfYW/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: formData1,
        },
      );

      // With no-cors, we can't read the response, but if no error thrown, assume success
      console.log("Data sent to Google Sheets (no-cors mode)");

      toast.success("Message sent successfully!");

      // Redirect to thank you page
      router.push("/thank-you");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="form"
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-3 border border-white/10 rounded-3xl shadow-lg p-3 relative bg-gradient-to-r from-gray-950/90 to-black/80  sm:p-2  overflow-hidden ">
          <div className="lg:col-span-3 bg-black/70 border border-white/10 rounded-3xl shadow-lg p-6 sm:p-10">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    First name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter First Name"
                    className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-title placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter Last Name"
                    className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-title placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  How can we reach you?*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Example@mail.com"
                  className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-title placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    Where Are you from?*
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-title focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select your country...</option>
                    <option value="India">India</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-title mb-2">
                    What’s the type of your company?*
                  </label>
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-title focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select Category</option>
                    <option value="Agency">Agency</option>
                    <option value="SAAS">SAAS</option>
                    <option value="Banking">Banking</option>
                    <option value="Business">Business</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-title mb-2">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full rounded-lg bg-neutral-950 border border-white/10 px-4 py-3 text-sm text-title placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="glow"
                disabled={isSubmitting}
                // className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-title font-medium py-3 rounded-lg transition cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Submit Now"}
              </Button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className=" bg-gradient-to-r from-gray-950/90 to-black/80 p-2 sm:p-2 rounded-3xl shadow-lg border border-white/10">
            <div className="bg-black-700 border border-white/10 rounded-3xl p-6 ">
              <p className="flex items-center justify-between text-title text-sm font-medium">
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
              <p className="flex items-center gap-2 text-title text-sm font-medium">
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
              <p className="flex items-center justify-between text-title text-sm font-medium">
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
