import { Cpu } from 'lucide-react';
import { skills } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-purple-400 font-medium mb-3">
              <Cpu className="w-4 h-4" />
              Keahlian
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Teknologi & Alat
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Teknologi dan alat yang saya gunakan sehari-hari untuk membangun produk digital.
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="glass rounded-2xl p-6 hover:border-purple-500/40 transition-all hover:-translate-y-1"
              >
                <h3 className="font-semibold text-white mb-4 pb-3 border-b border-purple-500/10">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-gray-300 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 group-hover:scale-150 transition-transform" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
