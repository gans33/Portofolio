import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive('#' + id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? 'glass-strong rounded-2xl mx-4 sm:mx-auto px-5 py-3'
            : ''
        }`}
      >
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
            {profile.name.charAt(0)}
          </div>
          <span className="font-semibold text-white hidden sm:block">
            {profile.nickname}
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  active === link.href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === link.href && (
                  <span className="absolute inset-0 rounded-lg bg-white/5 border border-purple-500/20" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary text-white text-sm font-medium px-5 py-2 rounded-xl"
        >
          Hubungi Saya
        </a>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                    active === link.href
                      ? 'text-white bg-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 btn-primary text-white text-sm font-medium px-5 py-3 rounded-xl"
              >
                Hubungi Saya
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
