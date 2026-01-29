import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 px-6 bg-slate-100 border-t border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Copyright Section */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-sm text-slate-500 font-semibold tracking-tight">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-900 font-bold underline decoration-[#4f46e5]/30 underline-offset-4">
              Wathsika Pallimulla
            </span>
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-7 order-1 md:order-2">
          <a
            href="https://github.com/Wathsika"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-black transition-all hover:-translate-y-1"
          >
            <Github size={19} />
          </a>
          <a
            href="https://www.linkedin.com/in/wathsika-pallimulla-266242344/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-500 hover:text-[#0077b5] transition-all hover:-translate-y-1"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="mailto:wathsikapallimulla@gmail.com"
            className="text-slate-500 hover:text-[#4f46e5] transition-all hover:-translate-y-1"
          >
            <Mail size={19} />
          </a>
        </div>

        {/* Right: Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-[10px] font-extrabold text-slate-500 hover:text-[#4f46e5] transition-all uppercase tracking-[0.2em] order-3"
        >
          Top{" "}
          <ArrowUp
            size={14}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      </div>
    </footer>
  );
}
