import { Menu, X, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 px-6 py-4 bg-slate-100/95 backdrop-blur-sm border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <span className="text-xl font-bold tracking-tighter text-slate-900">
          WATHSIKA<span className="text-[#4f46e5]">.P</span>
        </span>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 font-bold text-slate-600">
          <a href="#about" className="hover:text-[#4f46e5] transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-[#4f46e5] transition-colors">
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-[#4f46e5] transition-colors"
          >
            Projects
          </a>
          <a href="#contact" className="hover:text-[#4f46e5] transition-colors">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="https://github.com/Wathsika"
            target="_blank"
            className="text-slate-500 hover:text-black transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/wathsika-pallimulla-266242344/"
            target="_blank"
            className="text-slate-500 hover:text-[#4f46e5] transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-100 border-b border-slate-200 p-6 flex flex-col space-y-4 font-bold text-slate-700">
          <a href="#about" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
