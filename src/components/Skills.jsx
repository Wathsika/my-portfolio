import { skillCategories } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-primary transition-colors"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-slate-600 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
