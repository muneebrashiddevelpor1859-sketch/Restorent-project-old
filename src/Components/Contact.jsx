"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gender: "",
  });

  // APNA WHATSAPP NUMBER YAHAN LIKHEN
  // Example: 923001234567
  const WHATSAPP_NUMBER = "+923254306247";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
Hello WAKHA Cafe & Restaurant,

Name: ${formData.name}
Email: ${formData.email}
Gender: ${formData.gender || "Not selected"}

Message:
${formData.message}
    `.trim();

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f6f7f4] text-slate-900">

      {/* BACKGROUND MAP */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          className="h-full w-full"
          style={{
            filter: "grayscale(1) contrast(1.1) opacity(0.18)",
          }}
        />
      </div>

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f6f7f4]/95 via-[#f6f7f4]/80 to-cyan-50/60" />

      {/* DECORATIVE BLUR */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
              Contact
            </span>
          </div>

          <h1 className="text-5xl font-semibold leading-[1] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">
            Let's make your
            <span className="block text-cyan-700">
              next visit special.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Restorent Contact Form. Pleas Fill This
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex min-h-[560px] flex-col justify-between overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl sm:p-10"
          >

            {/* DECORATION */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative z-10">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                <MessageCircle className="text-cyan-400" size={21} />
              </div>

              <h2 className="mt-8 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
                We'd love to
                <span className="block text-white/40">
                  hear from you.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                Post-ironic portland shabby chic echo park, banjo fashion
                axe
              </p>

            </div>

            {/* CONTACT DETAILS */}
            <div className="relative z-10 mt-12 space-y-4">

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <MapPin size={18} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    WAKHA Cafe & Restaurant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Mail size={18} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                    Contact
                  </p>
                  <p className="mt-1 text-sm text-white/80">
                    Send us a message
                  </p>
                </div>
              </div>

            </div>

            {/* BOTTOM */}
            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-xs text-white/35">
                WAKHA CAFE & RESTAURANT
              </span>

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                <ArrowUpRight size={16} />
              </div>
            </div>

          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="rounded-[2rem] border border-white/80 bg-white/90 p-7 shadow-xl shadow-slate-300/20 backdrop-blur-xl sm:p-10"
          >

            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
                Get in touch
              </p>

              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Restorent Contact Form
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Pleas Fill This
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="group relative mb-5">
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Enter Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* EMAIL */}
              <div className="group relative mb-5">
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your current email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 text-sm text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-slate-500"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="h-36 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/70 px-5 py-4 text-sm leading-6 text-slate-800 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* GENDER */}
              <div className="mb-7">

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Gender
                </p>

                <div className="flex flex-wrap gap-3">

                  {["Male", "Female", "Others"].map((gender) => (
                    <label
                      key={gender}
                      className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm transition-all duration-300 ${
                        formData.gender === gender
                          ? "border-cyan-600 bg-cyan-600 text-white shadow-lg shadow-cyan-200"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-cyan-300 hover:bg-cyan-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleChange}
                        className="sr-only"
                      />

                      {gender}
                    </label>
                  ))}

                </div>
              </div>

              {/* SUBMIT */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-slate-300/30 transition-all duration-300 hover:bg-cyan-700"
              >
                Send on WhatsApp

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-300 group-hover:rotate-45">
                  <Send size={15} />
                </span>
              </motion.button>

              <p className="mt-4 text-center text-xs leading-5 text-slate-400">
                Chicharrones blog helvetica normcore iceland tousled
                brook viral artisan.
              </p>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;