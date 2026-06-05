import { ArrowDown, Download, MapPin } from 'lucide-react';
import { profile, socials, stats } from '../data';
import { SocialIcon } from './SocialIcon';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-5 overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px] animate-blob" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] animate-blob" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-pink-600/10 blur-[100px] animate-blob" style={{ animationDelay: '8s' }} />
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-gray-300">Tersedia untuk proyek baru</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white animate-fade-up delay-100">
            Halo, saya{' '}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl text-gray-300 font-medium animate-fade-up delay-200">
            {profile.role}
          </p>

          <p className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl animate-fade-up delay-300">
            {profile.description}
          </p>

          <div className="mt-4 flex items-center gap-2 text-gray-400 animate-fade-up delay-300 justify-center md:justify-start">
            <MapPin className="w-4 h-4 text-purple-400" />
            <span className="text-sm">{profile.location}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start animate-fade-up delay-400">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 text-white font-medium px-6 py-3 rounded-xl"
            >
              Hubungi Saya
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 glass hover:border-purple-500/40 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-3 justify-center md:justify-start animate-fade-up delay-400">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-11 h-11 rounded-xl glass hover:bg-purple-500/20 hover:border-purple-500/40 text-gray-300 hover:text-white flex items-center justify-center transition-all hover:-translate-y-1"
              >
                <SocialIcon name={s.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-up delay-200">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 blur-2xl opacity-40 animate-pulse-glow" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 animate-float">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover border-4 border-[#030014]"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23a855f7"/><text x="50" y="62" font-size="40" font-family="Arial" text-anchor="middle" fill="white" font-weight="bold">?</text></svg>';
                }}
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass-strong px-4 py-2 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-xs text-gray-400">Pengalaman</div>
              <div className="text-white font-bold">{stats[0].value}</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-strong px-4 py-2 rounded-2xl animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-xs text-gray-400">Proyek</div>
              <div className="text-white font-bold">{stats[1].value}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-float"
        aria-label="Scroll"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
