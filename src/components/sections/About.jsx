"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import PrimaryButton from "@/components/ui/PrimaryButton";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="pointer-events-none absolute left-[-90px] top-10 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-90px] h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <motion.div
            className="relative h-[480px] w-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/hero/hero.jpg"
              alt="Md Jafar Ali Shaikh"
              fill
              unoptimized
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              subtitle="About Me"
              title="Full Stack Web Developer"
            />
          </motion.div>

          <motion.p
            className="mt-5 text-base leading-8 text-slate-600 md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            I am Md Jafar Ali Shaikh, a passionate Full Stack Web Developer. I
            specialize in building modern, responsive, and high-performing
            websites and web applications that help businesses grow and stand
            out online.
          </motion.p>

          <motion.p
            className="mt-6 text-base leading-8 text-slate-600 md:text-lg"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I work with technologies like React, Next.js, Node.js, and MongoDB
            to deliver scalable and user-friendly digital solutions.
          </motion.p>

          <div className="mt-8 grid gap-5 text-base text-slate-700 sm:grid-cols-2">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.28 }}
            >
              <span className="font-semibold text-slate-900">Name:</span>{" "}
              Md Jafar Ali Shaikh
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.34 }}
            >
              <span className="font-semibold text-slate-900">Role:</span> Full
              Stack Developer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4 }}
            >
              <span className="font-semibold text-slate-900">Experience:</span>{" "}
              2+ Years
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.46 }}
            >
              <span className="font-semibold text-slate-900">Location:</span>{" "}
              Bangladesh
            </motion.p>
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.54 }}
            whileHover={{ scale: 1.02 }}
          >
            <PrimaryButton href="#contact">Hire Me</PrimaryButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}