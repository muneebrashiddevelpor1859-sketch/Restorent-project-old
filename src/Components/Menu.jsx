"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

const menuItems = [
  {
    image: "/menu images/Menu112.jpg",
    hoverImage: "/menu images/Menu114.jpg",
    category: "SPECIAL",
    title: "The Catalyzer",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    rating: "4.9",
  },
  {
    image: "/menu images/Menu114.jpg",
    hoverImage: "/menu images/Menu115.jpg",
    category: "CHEF'S CHOICE",
    title: "The 400 Blows",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    rating: "4.8",
  },
  {
    image: "/menu images/Menu115.jpg",
    hoverImage: "/menu images/Menu112.jpg",
    category: "SIGNATURE",
    title: "Shooting Stars",
    description:
      "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
    rating: "4.9",
  },
];

function Menu() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f6] py-24 text-slate-900 sm:py-28">

      {/* BACKGROUND DECORATIONS */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          {/* BADGE */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
              Our Menu
            </span>
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Something delicious

            <span className="block text-cyan-700">
              for everyone.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Carefully prepared dishes, fresh ingredients, and flavors
            created to make every visit to WAKHA memorable.
          </p>
        </motion.div>

        {/* MENU CARDS */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {menuItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white shadow-sm transition-shadow duration-500 hover:shadow-2xl hover:shadow-slate-300/30"
            >

              {/* IMAGE */}
              <div className="group/image relative h-72 overflow-hidden sm:h-80">

                {/* ORIGINAL IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    transition-all
                    duration-700
                    ease-out
                    group-hover/image:scale-110
                    group-hover/image:opacity-0
                  "
                />

                {/* HOVER IMAGE */}
                <img
                  src={item.hoverImage}
                  alt={`${item.title} alternate`}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    opacity-0
                    scale-105
                    transition-all
                    duration-700
                    ease-out
                    group-hover/image:scale-110
                    group-hover/image:opacity-100
                  "
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80" />

                {/* CATEGORY */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* ARROW */}
                <motion.div
                  whileHover={{
                    rotate: 45,
                  }}
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg transition-transform duration-300"
                >
                  <ArrowUpRight size={19} />
                </motion.div>

                {/* HOVER LABEL */}
                <div
                  className="
                    absolute
                    bottom-5
                    right-5
                    rounded-full
                    border
                    border-white/20
                    bg-black/30
                    px-3
                    py-2
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-white
                    opacity-0
                    backdrop-blur-md
                    transition-all
                    duration-500
                    group-hover/image:opacity-100
                  "
                >
                  View Dish
                </div>

                {/* RATING */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-lg backdrop-blur-md">
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-amber-500"
                  />

                  <span className="text-xs font-semibold text-slate-800">
                    {item.rating}
                  </span>
                </div>

              </div>

              {/* CARD CONTENT */}
              <div className="p-6 sm:p-7">

                {/* TITLE */}
                <div className="mb-3 flex items-start justify-between gap-4">

                  <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <span className="text-sm font-semibold text-cyan-700">
                    ★
                  </span>

                </div>

                {/* DESCRIPTION */}
                <p className="min-h-[72px] text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* CARD FOOTER */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                  <button className="group/link flex items-center gap-2 text-sm font-semibold text-cyan-700">

                    Learn More

                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />

                  </button>

                  <span className="text-xs font-medium text-slate-400">
                    WAKHA SPECIAL
                  </span>

                </div>
              </div>

            </motion.article>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              flex
              items-center
              gap-3
              rounded-full
              bg-slate-900
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-xl
              shadow-slate-300/30
              transition-all
              duration-300
              hover:bg-cyan-800
            "
          >
            View Full Menu

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-white
                text-slate-900
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight size={15} />
            </span>

          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}

export default Menu;