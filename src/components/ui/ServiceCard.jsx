"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Layers,
  Server,
  ShoppingCart,
  TrendingUp,
  Smartphone,
} from "lucide-react";

const icons = {
  Monitor,
  Layers,
  Server,
  ShoppingCart,
  TrendingUp,
  Smartphone,
};

export default function ServiceCard({ title, description, icon, index = 0 }) {
  const Icon = icons[icon];

  return (
    <motion.div
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
        {Icon && <Icon size={22} />}
      </div>

      <h3 className="mb-2 text-lg font-semibold text-slate-900">{title}</h3>

      <p className="text-sm leading-6 text-slate-600">{description}</p>
    </motion.div>
  );
}