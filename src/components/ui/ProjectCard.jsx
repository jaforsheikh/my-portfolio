"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  demo,
  github,
  index = 0,
}) {
  return (
    <motion.div
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <motion.div
          className="h-full w-full"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>

        <div className="mt-4 flex gap-3">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Live
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}