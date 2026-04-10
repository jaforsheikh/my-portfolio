"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBar from "@/components/ui/SkillBar";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-80px] h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            subtitle="My Skills"
            title="Technologies I Use To Build Modern Web Experiences"
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
          I work with modern frontend and backend technologies to create clean,
          responsive, and scalable websites and web applications.
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}