import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/content";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Selected Works
            </h2>
            <p className="text-slate-500 mt-2">
              Built with modern tech and clean architecture.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={idx}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-primary"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
