import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageSquare,
  Phone,
  MapPin,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function Contact() {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' or 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setIsSending(false);
        formRef.current.reset();
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((error) => {
        console.error("Email Error:", error);
        setStatus("error");
        setIsSending(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Side: Professional Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="text-[#4f46e5] font-bold tracking-widest uppercase text-sm">
                Contact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 tracking-tight">
                Let’s discuss your <br />
                <span className="text-[#4f46e5] italic font-serif">
                  next innovation.
                </span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
                I am currently seeking opportunities to apply my technical
                expertise in a professional environment. I am open to discussing
                internship roles or potential collaborations.
              </p>

              {/* High-Visibility 4 Buttons Grid - Muted Colors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Call Me */}
                <a
                  href="tel:+94704583306"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-emerald-100/60 bg-emerald-50/20 hover:bg-emerald-50 hover:border-emerald-200 transition-all group shadow-sm"
                >
                  <div className="p-4 bg-white rounded-xl shadow-sm text-emerald-600 group-hover:scale-110 transition-transform border border-emerald-50">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-emerald-600/70 uppercase tracking-widest">
                      Call Me
                    </p>
                    <p className="text-slate-900 font-bold">+94 70 458 3306</p>
                  </div>
                </a>

                {/* Mail Me */}
                <a
                  href="mailto:wathsikapallimulla@gmail.com"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-indigo-100/60 bg-indigo-50/20 hover:bg-indigo-50 hover:border-indigo-200 transition-all group shadow-sm"
                >
                  <div className="p-4 bg-white rounded-xl shadow-sm text-[#4f46e5] group-hover:scale-110 transition-transform border border-indigo-50">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-[#4f46e5]/70 uppercase tracking-widest">
                      Mail Me
                    </p>
                    <p className="text-slate-900 font-bold text-sm">
                      wathsikapallimulla@
                      <br />
                      gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/wathsika-pallimulla-266242344/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-blue-100/60 bg-blue-50/20 hover:bg-blue-50 hover:border-blue-200 transition-all group shadow-sm"
                >
                  <div className="p-4 bg-white rounded-xl shadow-sm text-[#0077b5] group-hover:scale-110 transition-transform border border-blue-50">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-[#0077b5]/70 uppercase tracking-widest">
                      LinkedIn
                    </p>
                    <p className="text-slate-900 font-bold text-sm">
                      Professional Profile
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Wathsika"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/50 bg-slate-50/50 hover:bg-slate-100 hover:border-slate-300 transition-all group shadow-sm"
                >
                  <div className="p-4 bg-white rounded-xl shadow-sm text-slate-900 group-hover:scale-110 transition-transform border border-slate-100">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                      GitHub
                    </p>
                    <p className="text-slate-900 font-bold text-sm">
                      Code Repository
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location Bar */}
            <div className="flex items-center gap-4 p-4 mt-6 rounded-2xl border border-rose-100/50 bg-rose-50/15">
              <div className="p-3 bg-white rounded-xl text-rose-500 shadow-sm border border-rose-50">
                <MapPin size={20} />
              </div>
              <p className="text-slate-500 font-medium text-sm md:text-base">
                Currently based in{" "}
                <span className="text-slate-900 font-bold">
                  Colombo, Sri Lanka
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Side: Professional Contact Form - Highlighted Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 bg-slate-50/80 border border-indigo-100 rounded-[2.5rem] shadow-2xl shadow-indigo-100/50 flex flex-col h-full ring-1 ring-white/50"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#4f46e5] border border-indigo-50">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Direct Message
              </h3>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-6 flex flex-col flex-grow"
            >
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-[#4f46e5]/80 uppercase ml-1 tracking-wider">
                  Full Name
                </label>
                <input
                  name="user_name"
                  type="text"
                  required
                  placeholder="Your Full Name"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-500/5 outline-none text-slate-900 transition-all shadow-sm placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-[#4f46e5]/80 uppercase ml-1 tracking-wider">
                  Email Address
                </label>
                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="email@example.com"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-500/5 outline-none text-slate-900 transition-all shadow-sm placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2 flex flex-col flex-grow">
                <label className="text-xs font-extrabold text-[#4f46e5]/80 uppercase ml-1 tracking-wider">
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Describe your inquiry or project details..."
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:border-[#4f46e5] focus:ring-4 focus:ring-indigo-500/5 outline-none text-slate-900 resize-none transition-all flex-grow min-h-[150px] shadow-sm placeholder:text-slate-400"
                ></textarea>
              </div>

              {/* Status Notifications */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                  <CheckCircle size={18} /> Mail sent successfully!
                </div>
              )}
              {status === "error" && (
                <div className="text-red-600 font-bold text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                disabled={isSending}
                type="submit"
                className={`w-full py-4 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] mt-4 shadow-lg ${
                  isSending
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-[#4f46e5] hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200"
                }`}
              >
                {isSending ? (
                  <>
                    Sending <Loader2 size={18} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Submit Inquiry <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
