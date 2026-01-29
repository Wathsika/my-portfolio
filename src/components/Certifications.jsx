import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

export default function Certifications() {
  const certs = [
    {
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2023",
      color: "border-blue-200 bg-blue-50/30",
    },
    {
      title: "Postman API Fundamentals",
      issuer: "Postman Student Expert",
      date: "2024",
      color: "border-orange-200 bg-orange-50/30",
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`p-8 rounded-3xl border ${cert.color} flex items-start gap-6 transition-all shadow-sm`}
            >
              <div className="p-4 bg-white rounded-2xl shadow-sm text-slate-900">
                <Award size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {cert.title}
                </h3>
                <p className="text-slate-600 font-medium mb-2">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                  <CheckCircle2 size={14} className="text-secondary" />
                  VERIFIED CREDENTIAL • {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
