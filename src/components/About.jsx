import { motion } from "framer-motion";
import { GraduationCap, Target, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about-details" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side: Bio & Goals */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Professional Profile
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              I am a dedicated Software Engineering Undergraduate at SLIIT with
              a passion for building scalable, user-centric web applications. My
              journey in tech is driven by a curiosity for how complex systems
              interact and a desire to simplify user experiences through clean
              code.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-white rounded-xl shadow-sm h-fit">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Career Goals</h4>
                  <p className="text-sm text-slate-600">
                    Aspiring to become a Full-Stack Architect, focusing on
                    AI-integrated web solutions and high-performance cloud
                    infrastructure.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-white rounded-xl shadow-sm h-fit">
                  <Briefcase className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Interests</h4>
                  <p className="text-sm text-slate-600">
                    Deeply interested in MERN Stack development, DevOps
                    automation, and exploring the potential of LLMs in software
                    workflows.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl border border-slate-200 bg-slate-50/50"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <GraduationCap className="text-primary" /> Education
            </h2>

            <div className="relative border-l-2 border-slate-200 pl-8 space-y-10">
              <div className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-white shadow-sm" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  2022 - Present
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  BSc (Hons) in Information Technology
                </h3>
                <p className="text-slate-700 font-medium italic">
                  Specializing in Software Engineering
                </p>
                <p className="text-slate-500 mt-2 text-sm font-semibold">
                  Sri Lanka Institute of Information Technology (SLIIT)
                </p>
              </div>

              <div className="relative opacity-90 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-300 border-4 border-white group-hover:bg-slate-400 transition-colors" />

                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Secondary Education
                </span>

                {/* G.C.E. Advanced Level */}
                <h3 className="text-lg font-bold text-slate-900 mt-1">
                  G.C.E. Advanced Level
                </h3>

                <p className="text-slate-700 font-semibold text-sm">
                  Physical Science Stream
                </p>

                <p className="text-slate-500 text-sm mt-1">
                  Passed in Physics, Combined Mathematics, and Chemistry
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
