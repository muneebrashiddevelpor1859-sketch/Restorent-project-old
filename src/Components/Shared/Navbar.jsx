"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full">

      {/* FULL WIDTH NAVBAR */}
      <div className="w-full border-b border-white/10 bg-black/35 backdrop-blur-xl">

        <div className="mx-auto flex h-[82px] w-full max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white p-0.5 shadow-lg">
              <img
                src="/logo1.jpg"
                alt="WAKHA Cafe"
                className="h-full w-full rounded-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="leading-none">
              <h1 className="text-[17px] font-bold tracking-[0.16em] text-white">
                WAKHA
              </h1>

              <p className="mt-1 text-[9px] tracking-[0.3em] text-white/50">
                CAFE & RESTAURANT
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-2 md:flex">

            <Link
              to="/"
              className="group relative px-5 py-3 text-sm font-medium text-white"
            >
              Home
              <span className="absolute bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full bg-cyan-400" />
            </Link>

            <Link
              to="/about"
              className="group relative px-5 py-3 text-sm font-medium text-white/65 transition hover:text-white"
            >
              Menu

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>

            <Link
              to="/services"
              className="group relative px-5 py-3 text-sm font-medium text-white/65 transition hover:text-white"
            >
              Sitting Area

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>

            <Link
              to="/Contact"
              className="group relative px-5 py-3 text-sm font-medium text-white/65 transition hover:text-white"
            >
              Contact

              <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-5" />
            </Link>

          </nav>

          {/* ================= CTA ================= */}
          <Link
            to="/about"
            className="group hidden items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-cyan-400 md:flex"
          >
            Explore Menu

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={15} />
            </span>
          </Link>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md md:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`w-full overflow-hidden bg-black/90 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          open ? "max-h-[420px] border-b border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-4 text-sm font-medium text-white"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-4 text-sm text-white/65 transition hover:text-white"
          >
            Menu
          </Link>

          <Link
            to="/services"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-4 text-sm text-white/65 transition hover:text-white"
          >
            Sitting Area
          </Link>

          <Link
            to="/Contact"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-4 text-sm text-white/65 transition hover:text-white"
          >
            Contact
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-white py-3.5 text-sm font-semibold text-black"
          >
            Explore Menu
            <ArrowUpRight size={17} />
          </Link>

        </nav>
      </div>

    </header>
  );
}

export default Navbar;