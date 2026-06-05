import { footer, profile, navLinks, socials } from '../data';
import { SocialIcon } from './SocialIcon';

export default function Footer() {
  return (
    <footer className="relative border-t border-purple-500/10 mt-12">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                {profile.name.charAt(0)}
              </div>
              <span className="font-semibold text-white">{profile.nickname}</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {profile.role} — {profile.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Ikuti</h4>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-lg glass hover:bg-purple-500/20 hover:border-purple-500/40 text-gray-300 hover:text-white flex items-center justify-center transition-all"
                >
                  <SocialIcon name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-sm text-purple-300 hover:text-white transition-colors"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-1">
            {footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
