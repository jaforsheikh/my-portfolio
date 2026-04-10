"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactInfo from "@/components/ui/ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-20"
    >
      <div className="pointer-events-none absolute left-[-80px] top-0 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-80px] h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            subtitle="Contact Me"
            title="Let’s Work Together"
            center={true}
          />
        </motion.div>

        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Have a project in mind or need a modern website or web application?
          Feel free to reach out. I am available for freelance work and new
          opportunities.
        </motion.p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            whileHover={{ y: -4 }}
          >
            <ContactInfo />
          </motion.div>

          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            whileHover={{ y: -4 }}
          >
            <form className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-orange-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.22 }}
              >
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-orange-500"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.29 }}
              >
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-orange-500"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.36 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}