"use client";

import type React from "react";

import { useState } from "react";
import {
  Mail,
  User,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { sendMessage } from "@/services/webFromsApi";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    try {
      const res = await sendMessage(data);
      if (res?.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus("idle");
        }, 5000);
      } else {
        setFormStatus("error");

        // Reset error message after 5 seconds
        setTimeout(() => {
          setFormStatus("idle");
        }, 5000);
      }
    } catch (error) {
      setFormStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
          GET IN TOUCH
        </h2>
        <h3 className="text-4xl font-bold relative inline-block">
          Contact <span className="text-[#ff014f]">Me</span>
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff014f] to-transparent"></span>
        </h3>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-2xl font-bold mb-4">Let's Connect</h4>
          <p className="text-gray-400 mb-6">
            I'm currently available for freelance work or full-time positions.
            If you have a project that needs some creative touch, I'd love to
            hear about it.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#191b1e] rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-[#ff014f]" />
              </div>
              <div>
                <h5 className="font-medium mb-1">Email</h5>
                <p className="text-gray-400">shaker.webdev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#191b1e] rounded-lg flex items-center justify-center flex-shrink-0">
                <User size={20} className="text-[#ff014f]" />
              </div>
              <div>
                <h5 className="font-medium mb-1">Location</h5>
                <p className="text-gray-400">
                  Srinagar, Jammu and Kashmir India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#191b1e] rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#212428] border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent"
                  placeholder="Your Name"
                  disabled={formStatus === "submitting"}
                />
                <User
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#212428] border border-gray-700 rounded-lg py-3 px-4 pl-10 text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent"
                  placeholder="Your Email"
                  disabled={formStatus === "submitting"}
                />
                <Mail
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#212428] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#ff014f] focus:border-transparent"
                placeholder="Your Message"
                disabled={formStatus === "submitting"}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="w-full bg-[#ff014f] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#d4013f] transition-colors disabled:opacity-70"
            >
              {formStatus === "idle" && (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}

              {formStatus === "submitting" && (
                <>
                  <Loader size={18} className="animate-spin" />
                  <span>Sending...</span>
                </>
              )}

              {formStatus === "success" && (
                <>
                  <CheckCircle size={18} />
                  <span>Message Sent!</span>
                </>
              )}

              {formStatus === "error" && (
                <>
                  <AlertCircle size={18} />
                  <span>Failed to Send</span>
                </>
              )}
            </button>

            {formStatus === "success" && (
              <div className="mt-4 p-3 bg-green-500/10 text-green-500 rounded-lg flex items-center gap-2">
                <CheckCircle size={16} />
                <span>Your message has been sent successfully!</span>
              </div>
            )}

            {formStatus === "error" && (
              <div className="mt-4 p-3 bg-red-500/10 text-red-500 rounded-lg flex items-center gap-2">
                <AlertCircle size={16} />
                <span>
                  There was an error sending your message. Please try again.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
