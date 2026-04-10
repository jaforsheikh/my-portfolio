"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/90 shadow-md backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#home" className="text-2xl font-extrabold tracking-tight">
          <span className="text-orange-500">J@</span>
          <span className="text-blue-600">far</span>
        </a>

        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#home" className="transition hover:text-orange-500">
            Home
          </a>
          <a href="#about" className="transition hover:text-orange-500">
            About
          </a>
          <a href="#projects" className="transition hover:text-orange-500">
            Projects
          </a>
          <a href="#services" className="transition hover:text-orange-500">
            Services
          </a>
          <a href="#contact" className="transition hover:text-orange-500">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
        >
          Let&apos;s Talk
        </a>
      </div>
    </motion.header>
  );
}