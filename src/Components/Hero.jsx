"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, MapPin } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="/rectorent main1.jpg"
          alt="WAKHA Cafe & Restaurant"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* BLACK LINEAR GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/3" />

      {/* BOTTOM DARK GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] items-center px-5 py-24 sm:px-8 lg:px-12">

        <div className="max-w-3xl">

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-2 text-sm font-medium tracking-wide text-white/70"
          >
            <MapPin size={16} className="text-cyan-400" />
            <span>Welcome to WAKHA Cafe & Restaurant</span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Taste the
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-white bg-clip-text text-transparent">
              extraordinary.
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
          >
            Discover a place where great food, freshly brewed coffee,
            and unforgettable moments come together. Experience the
            unique taste of WAKHA.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {/* PRIMARY */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400"
            >
              Explore Menu

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </motion.button>

            {/* SECONDARY */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/50 hover:bg-white/20"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black">
                <Play size={13} fill="currentColor" />
              </span>

              Discover WAKHA
            </motion.button>
          </motion.div>

          {/* BOTTOM INFO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 flex flex-wrap items-center gap-8 border-t border-white/15 pt-6"
          >
            <div>
              <p className="text-2xl font-semibold text-white">4.9</p>
              <p className="mt-1 text-xs text-white/50">
                Customer Rating
              </p>
            </div>

            <div className="h-10 w-px bg-white/15" />

            <div>
              <p className="text-2xl font-semibold text-white">100%</p>
              <p className="mt-1 text-xs text-white/50">
                Fresh Ingredients
              </p>
            </div>

            <div className="h-10 w-px bg-white/15" />

            <div>
              <p className="text-sm font-semibold text-white">
                Open Daily
              </p>
              <p className="mt-1 text-xs text-white/50">
                Fresh food · Good vibes
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 lg:flex"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Scroll
        </motion.span>

        <span className="h-10 w-px bg-white/30" />
      </motion.div>

    </section>
  );
}

export default Hero;