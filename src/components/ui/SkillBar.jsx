"use client";

import { motion } from "framer-motion";

export default function SkillBar({ name, level, index = 0 }) {
  return (
    <motion.div
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-800">{name}</h3>
        <span className="text-sm font-semibold text-orange-500">{level}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-slate-200">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-orange-500 via-purple-400 to-blue-600"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 1,
            delay: 0.2 + index * 0.08,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}