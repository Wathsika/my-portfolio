import { motion } from "framer-motion";
import { FileText, ArrowRight, Sparkles, GraduationCap } from "lucide-react";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 bg-[#fdfeff]">
      {/* Premium Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.4] -z-10"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Updated Badge Text */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            <span>Available for Internship</span>
          </div>

          {/* Name in one line */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-[#4f46e5] whitespace-nowrap">
              Wathsika Pallimulla
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3 text-xl md:text-2xl text-slate-700 font-medium">
            <GraduationCap className="text-[#4f46e5]" size={28} />
            <p>
              Software Engineer Undergraduate at{" "}
              <span className="font-bold text-slate-900">SLIIT</span>
            </p>
          </div>

          <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-lg">
            Software Engineer focused on architecting{" "}
            <span className="text-slate-900 font-semibold">
              intelligent, scalable solutions
            </span>
            . Dedicated to the intersection of AI integration and
            high-performance technical design.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-[#4f46e5] transition-all duration-300 flex items-center gap-2 font-bold shadow-lg shadow-slate-200"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/Wathsika_CV.pdf"
              download="Wathsika_CV.pdf"
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-900 rounded-xl hover:border-[#4f46e5] hover:text-[#4f46e5] transition-all duration-300 flex items-center gap-2 font-bold"
            >
              Download CV <FileText size={18} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Geometric Profile Picture Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* IMPROVED VISIBILITY: Rotating Dashed Frame */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              // Increased border to [3px], used indigo-400 with 40% opacity,
              // and used -inset-4 to make it larger than the photo
              className="absolute -inset-4 border-[3px] border-dashed border-[#4f46e5]/40 rounded-[48px]"
            />

            {/* IMPROVED VISIBILITY: Solid Floating Background Frame */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              // Increased border thickness and opacity
              className="absolute inset-2 border-[2px] border-[#4f46e5]/20 rounded-[32px] -z-10 bg-[#4f46e5]/5 shadow-inner"
            />

            {/* Main Image Container */}
            <div className="w-full h-full rounded-[32px] overflow-hidden border-4 border-white shadow-2xl relative z-10 group bg-slate-100">
              <img
                src={profileImg}
                alt="Wathsika Pallimulla"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Subtle Blue Tint on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4f46e5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
