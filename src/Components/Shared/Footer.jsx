import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock3,
  Sparkles,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: "IG",
    },
    {
      name: "Facebook",
      icon: "f",
    },
    {
      name: "Twitter",
      icon: "𝕏",
    },
    {
      name: "LinkedIn",
      icon: "in",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#f4f5f1] text-slate-900">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-[400px] w-[400px] rounded-full bg-amber-100/50 blur-3xl" />

      {/* MAIN FOOTER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-20 sm:px-8 sm:pt-24 lg:px-12">

        {/* TOP BRAND AREA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="grid gap-12 border-b border-slate-200 pb-16 lg:grid-cols-[1.3fr_1fr]"
        >

          {/* BRAND */}
          <div>

            <div className="flex items-center gap-4">

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.05,
                }}
                transition={{ duration: 0.3 }}
                className="relative h-14 w-14 overflow-hidden rounded-2xl bg-white p-1 shadow-lg shadow-slate-200"
              >
                <img
                  src="/logo1.jpg"
                  alt="WAKHA Cafe"
                  className="h-full w-full rounded-xl object-cover"
                />
              </motion.div>

              <div>
                <h2 className="text-xl font-bold tracking-[0.15em] text-slate-900">
                  WAKHA
                </h2>

                <p className="mt-1 text-[9px] font-medium tracking-[0.3em] text-slate-400">
                  CAFE & RESTAURANT
                </p>
              </div>

            </div>

            <h3 className="mt-8 max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Good food.

              <span className="block text-cyan-700">
                Good people. Good moments.
              </span>
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-500">
              Air plant banjo lyft occupy retro adaptogen indego.
              Come together, enjoy great food and make unforgettable
              memories at WAKHA.
            </p>

          </div>

          {/* CONTACT INFO */}
          <div className="lg:pl-10">

            <div className="mb-6 flex items-center gap-2">
              <Sparkles
                size={15}
                className="text-cyan-600"
              />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Visit WAKHA
              </span>
            </div>

            <div className="space-y-3">

              {/* LOCATION */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    WAKHA Cafe & Restaurant
                  </p>
                </div>
              </motion.div>

              {/* PHONE */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    Contact us anytime
                  </p>
                </div>
              </motion.div>

              {/* EMAIL */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-200/50"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    hello@wakha.com
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </motion.div>

        {/* LINKS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4"
        >

          {/* EXPLORE */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Explore
            </h4>

            <ul className="mt-5 space-y-3">
              {["Home", "Menu", "Sitting Area", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="group flex w-fit items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-700"
                    >
                      {item}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Categories
            </h4>

            <ul className="mt-5 space-y-3">
              {[
                "Coffee",
                "Breakfast",
                "Lunch",
                "Dinner",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex w-fit items-center gap-2 text-sm text-slate-600 transition-colors duration-300 hover:text-cyan-700"
                  >
                    {item}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Opening Hours
            </h4>

            <div className="mt-5 flex gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm">
                <Clock3 size={16} />
              </div>

              <div className="text-sm leading-6 text-slate-500">
                <p className="font-medium text-slate-700">
                  Monday – Sunday
                </p>

                <p>
                  09:00 AM – 11:00 PM
                </p>
              </div>

            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
              Follow Us
            </h4>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Stay connected with WAKHA and discover what's happening.
            </p>

            <div className="mt-5 flex gap-2">

              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-500 shadow-sm transition-all duration-300 hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
                >
                  {social.icon}
                </motion.a>
              ))}

            </div>
          </div>

        </motion.div>

        {/* BIG BRAND TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="overflow-hidden border-t border-slate-200 pt-8"
        >

          <div className="flex items-center justify-between gap-6">

            <p className="text-[clamp(4rem,14vw,11rem)] font-black leading-none tracking-[-0.08em] text-slate-200">
              WAKHA
            </p>

            <motion.div
              animate={{
                rotate: [0, 8, 0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-white shadow-xl shadow-cyan-200 sm:flex"
            >
              <ArrowUpRight size={24} />
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 border-t border-slate-200 bg-white/70 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <p className="text-xs text-slate-400">
            © {currentYear} WAKHA Cafe & Restaurant. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Made with</span>

            <span className="font-semibold text-cyan-700">
              good taste
            </span>

            <span>•</span>

            <span>WAKHA</span>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;