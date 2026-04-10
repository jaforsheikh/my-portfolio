"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50 py-16 md:py-24"
    >
      <div className="pointer-events-none absolute -top-20 left-[-100px] h-[300px] w-[300px] rounded-full bg-orange-300/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Welcome
          </motion.p>

          <motion.h1
            className="max-w-xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hey I’m{" "}
            <span className="text-blue-600">Md Jafar Ali Shaikh</span>
          </motion.h1>

          <motion.p
            className="mt-5 max-w-lg text-base leading-7 text-slate-600 md:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            I am a Full Stack Web Developer building clean, modern, and
            responsive websites and web applications for businesses, brands,
            and personal portfolios.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <PrimaryButton href="#projects">Hire Me</PrimaryButton>

            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <motion.div whileHover={{ y: -4 }}>
              <span className="block text-2xl font-bold text-slate-900">
                2+
              </span>
              Years Experience
            </motion.div>

            <motion.div whileHover={{ y: -4 }}>
              <span className="block text-2xl font-bold text-slate-900">
                20+
              </span>
              Projects Completed
            </motion.div>

            <motion.div whileHover={{ y: -4 }}>
              <span className="block text-2xl font-bold text-slate-900">
                10+
              </span>
              Happy Clients
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="order-1 flex justify-center md:order-2"
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute -right-6 top-6 h-52 w-52 rounded-full bg-cyan-300/40 blur-3xl" />

            <motion.div
              className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white p-3 shadow-xl"
              whileHover={{ scale: 1.03, rotate: -1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            >
              <div className="relative h-[360px] w-[280px] overflow-hidden rounded-[24px] bg-slate-200 md:h-[430px] md:w-[330px]">
                <Image
                  src="/images/hero/hero-main.jpg"
                  alt="Md Jafar Ali Shaikh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}