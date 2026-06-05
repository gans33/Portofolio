import { useState } from 'react';
import { ExternalLink, Folder, Star } from 'lucide-react';
import { SocialIcon } from './SocialIcon';
import { projects } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function Projects() {
  const ref = useReveal();
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filtered = filter === 'featured' ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-sm text-purple-400 font-medium mb-3">
              <Folder className="w-4 h-4" />
              Portofolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Proyek Unggulan
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Beberapa karya yang telah saya kerjakan. Setiap proyek adalah kesempatan untuk belajar dan berkembang.
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          </div>

          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'featured'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                  : 'glass text-gray-400 hover:text-white'
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              Unggulan
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <article
                key={project.title}
                className="group glass rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2.5 py-1 rounded-full">
                      <Star className="w-3 h-3 fill-current" />
                      Unggulan
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2.5 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-purple-500/10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-purple-300 hover:text-white transition-colors"
                    >
                      <SocialIcon name="github" className="w-4 h-4" />
                      Kode
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
