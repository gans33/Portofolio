import { Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { about, experiences, stats } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-purple-400 font-medium mb-3">
              <Sparkles className="w-4 h-4" />
              {about.title}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {about.subtitle}
            </h2>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                {about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                {['Desain Antarmuka Modern', 'Performa Tinggi', 'Responsif di Semua Perangkat', 'Praktik Terbaik Industri'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Briefcase className="w-5 h-5 text-purple-400" />
                Pengalaman
              </h3>
              <div className="relative space-y-6 pl-6 border-l border-purple-500/30">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 ring-4 ring-[#030014]" />
                    <div className="glass rounded-xl p-5 hover:border-purple-500/40 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-white">{exp.role}</h4>
                        <span className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <div className="text-sm text-purple-400 mb-2">{exp.company}</div>
                      <p className="text-sm text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 text-center hover:border-purple-500/40 transition-colors group"
              >
                <div className="text-3xl sm:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform">
                  {s.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
