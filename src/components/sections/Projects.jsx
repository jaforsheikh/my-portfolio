"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute left-[-80px] top-8 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[-80px] h-56 w-56 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            subtitle="My Projects"
            title="Recent Work That I Have Done"
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
          Here are some of my recent projects that showcase my skills in
          frontend, backend, and full stack development.
        </motion.p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              demo={project.demo}
              github={project.github}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}