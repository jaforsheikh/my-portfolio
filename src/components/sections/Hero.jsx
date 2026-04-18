"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 text-white md:px-12 md:py-24">
      <div className="absolute inset-0 -z-20 bg-[#08111f]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[280px] w-[280px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
            Available for freelance projects
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              MERN Stack Developer
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              I Build Modern
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Fast &amp; Scalable
              </span>
              Web Applications
            </h1>

            <p className="max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              I create clean, responsive, and high-performing websites using
              MongoDB, Express.js, React, Next.js, and Node.js with a strong
              focus on smooth user experience and modern design.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
            >
              Hire Me
            </a>
          </div>

          <div className="grid max-w-lg grid-cols-3 gap-4 pt-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">10+</h3>
              <p className="mt-1 text-sm text-white/60">Projects Built</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">MERN</h3>
              <p className="mt-1 text-sm text-white/60">Modern Stack</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white">100%</h3>
              <p className="mt-1 text-sm text-white/60">Responsive</p>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="absolute h-[320px] w-[320px] rounded-full bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-3xl sm:h-[420px] sm:w-[420px]" />

          <div className="relative h-[320px] w-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-md sm:h-[420px] sm:w-[420px]">
            <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-[#0d1726]">
              <Image
                src="/images/hero/hero.jpg"
                alt="Md Jafar Ali Shaikh - MERN Stack Developer"
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 320px, 420px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-0 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:left-8">
            <p className="text-xs text-white/60">Focused On</p>
            <p className="text-sm font-semibold text-white">
              React • Next.js • Node.js
            </p>
          </div>

          <div className="absolute right-0 top-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md sm:right-6">
            <p className="text-xs text-white/60">Specialty</p>
            <p className="text-sm font-semibold text-white">
              Clean UI &amp; Smooth UX
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}