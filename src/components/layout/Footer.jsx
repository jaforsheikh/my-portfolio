"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 py-12 text-slate-300">
      <div className="pointer-events-none absolute left-[-80px] top-0 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-80px] h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-2xl font-bold text-white">
              J<span className="text-orange-500">@</span>far
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              I am Md Jafar Ali Shaikh, a Full Stack Web Developer focused on
              building modern, fast, and user-friendly websites and web
              applications.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#home" className="transition hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-orange-500">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="transition hover:text-orange-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-orange-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>

            <div className="mt-4 flex gap-3">
              <motion.a
                href="https://www.facebook.com/Jafor.sheikh12"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaFacebookF size={18} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/jafar-sheikh/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-slate-800 p-3 text-slate-300 transition-all duration-300 hover:bg-orange-500 hover:text-white"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <FaLinkedinIn size={18} />
              </motion.a>

              <motion.a
                href="https://wa.me/8801716506412"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-green-500 p-3 text-white transition-all duration-300 hover:bg-green-600"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <MessageCircle size={18} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          © {new Date().getFullYear()} Md Jafar Ali Shaikh. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}