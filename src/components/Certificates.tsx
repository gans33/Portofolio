import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data';
import { useReveal } from '../hooks/useReveal';

export default function Certificates() {
  const ref = useReveal();

  return (
    <section id="certificates" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-purple-400 font-medium mb-3">
              <Award className="w-4 h-4" />
              Pencapaian
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Sertifikat
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Sertifikasi yang telah saya peroleh sebagai bukti pembelajaran berkelanjutan.
            </p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certificates.map((cert) => (
              <a
                key={cert.title}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-70" />
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
                    <span>{cert.issuer}</span>
                    <span className="text-purple-400">{cert.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
