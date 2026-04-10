"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-slate-50 py-20">
      <div className="pointer-events-none absolute left-[-90px] top-10 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-90px] h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            subtitle="My Services"
            title="What I Can Do For You"
            center={true}
          />
        </motion.div>

        <motion.p
          className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-slate-600"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          I provide high-quality web development services to help businesses
          grow online with modern, scalable, and user-friendly solutions.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}