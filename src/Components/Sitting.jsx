"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Coffee,
  Sparkles,
  Users,
  ChevronRight,
} from "lucide-react";

const sittingAreas = [
  {
    image: "/Setting img/Menu1.jpg",
    number: "01",
    category: "COZY CORNER",
    title: "The Catalyzer",
    description: "A warm and intimate space for slow mornings and good coffee.",
    size: "2–4 Guests",
  },
  {
    image: "/Setting img/Menu2.jpg",
    number: "02",
    category: "LOUNGE",
    title: "Shooting Stars",
    description: "Relaxed seating designed for conversations, coffee and comfort.",
    size: "4–6 Guests",
  },
  {
    image: "/Setting img/Menu3.jpg",
    number: "03",
    category: "PRIVATE SPACE",
    title: "Neptune",
    description: "A quieter setting when you want to enjoy your time away from the crowd.",
    size: "2–6 Guests",
  },
  {
    image: "/Setting img/Menu4.jpg",
    number: "04",
    category: "SOCIAL TABLE",
    title: "The 400 Blows",
    description: "An open and vibrant area made for friends and shared moments.",
    size: "6–8 Guests",
  },
  {
    image: "/Setting img/Menu5.jpg",
    number: "05",
    category: "WINDOW SIDE",
    title: "The Catalyzer",
    description: "Natural light, comfortable seating and a view worth staying for.",
    size: "2–4 Guests",
  },
  {
    image: "/Setting img/Menu6.jpg",
    number: "06",
    category: "CAFÉ LOUNGE",
    title: "Shooting Stars",
    description: "The perfect place to catch up, work or simply unwind.",
    size: "3–5 Guests",
  },
  {
    image: "/Setting img/Menu7.jpg",
    number: "07",
    category: "RELAXED AREA",
    title: "Neptune",
    description: "Soft surroundings created for relaxed dining and long conversations.",
    size: "2–4 Guests",
  },
  {
    image: "/Setting img/Menu8.jpg",
    number: "08",
    category: "SIGNATURE SPACE",
    title: "The 400 Blows",
    description: "A stylish setting that brings people together around the table.",
    size: "4–8 Guests",
  },
];

function Sitting() {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f0] py-24 text-slate-900 sm:py-32">

      {/* SOFT BACKGROUND SHAPES */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-40 h-[420px] w-[420px] rounded-full bg-amber-100/60 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* ───────────────── HEADER ───────────────── */}
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.8fr]">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* EYEBROW */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
                <Sparkles size={15} />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                WAKHA Spaces
              </span>
            </div>

            {/* HEADING */}
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-slate-900 sm:text-6xl lg:text-7xl">
              Find your
              <span className="block text-cyan-700">
                perfect seat.
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:pb-2"
          >
            <p className="max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
              Every corner of WAKHA is designed with a different mood in
              mind. Whether you're meeting friends, enjoying coffee or
              simply taking a moment for yourself.
            </p>

            <div className="mt-7 flex items-center gap-4">

              <div className="flex -space-x-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f5f5f0] bg-slate-200">
                  <Users size={15} className="text-slate-600" />
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f5f5f0] bg-cyan-100">
                  <Coffee size={15} className="text-cyan-700" />
                </span>
              </div>

              <span className="text-xs font-medium text-slate-500">
                Spaces for every occasion
              </span>

            </div>
          </motion.div>

        </div>

        {/* ───────────────── DIVIDER ───────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 h-px origin-left bg-slate-200"
        />

        {/* ───────────────── FEATURED AREA ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10"
        >

          <div className="group relative min-h-[500px] overflow-hidden rounded-[2rem] bg-slate-900 sm:min-h-[600px]">

            <img
              src="/Setting img/Menu1.jpg"
              alt="WAKHA sitting area"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />

            {/* IMAGE GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

            {/* FEATURED CONTENT */}
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">

              <div className="max-w-xl">

                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Featured Space
                  </span>

                  <span className="text-xs text-white/60">
                    01
                  </span>
                </div>

                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  A place to slow down.
                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
                  Comfortable seating, warm atmosphere and the perfect
                  backdrop for your next WAKHA moment.
                </p>

              </div>

              {/* FEATURED ARROW */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: 45 }}
                className="absolute bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl sm:bottom-10 sm:right-10"
              >
                <ArrowUpRight size={21} />
              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* ───────────────── SECTION LABEL ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 mt-20 flex items-end justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">
              Explore
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              More places to sit.
            </h2>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            08 spaces
          </span>
        </motion.div>

        {/* ───────────────── ASYMMETRIC GRID ───────────────── */}
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

          {sittingAreas.slice(1).map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: (index % 4) * 0.1,
              }}
              className={`group ${
                index % 4 === 1
                  ? "lg:translate-y-10"
                  : index % 4 === 3
                  ? "lg:-translate-y-4"
                  : ""
              }`}
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-200">

                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* NUMBER */}
                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-[10px] font-bold text-white backdrop-blur-md">
                  {item.number}
                </div>

                {/* ARROW */}
                <motion.div
                  whileHover={{
                    rotate: 45,
                  }}
                  className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"
                >
                  <ArrowUpRight size={17} />
                </motion.div>

                {/* IMAGE BOTTOM INFO */}
                <div className="absolute bottom-5 left-5 right-5 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {item.category}
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    {item.title}
                  </p>

                </div>

              </div>

              {/* CARD CONTENT */}
              <div className="px-1 pt-5">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                      {item.category}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h3>
                  </div>

                  <span className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-medium text-slate-500">
                    {item.size}
                  </span>

                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <button className="group/link mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-900 transition-colors hover:text-cyan-700">
                  Explore space

                  <ChevronRight
                    size={15}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </button>

              </div>

            </motion.article>
          ))}

        </div>

        {/* ───────────────── BOTTOM CTA ───────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 overflow-hidden rounded-[2rem] bg-slate-900"
        >

          <div className="relative px-7 py-12 sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:px-16">

            {/* DECORATION */}
            <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative z-10">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Your table is waiting
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Come for the food.
                <span className="block text-white/50">
                  Stay for the atmosphere.
                </span>
              </h2>

            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative z-10 mt-8 flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-cyan-400 lg:mt-0"
            >
              Visit WAKHA

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Sitting;