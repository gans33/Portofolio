import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { contact, profile, socials } from '../data';
import { SocialIcon } from './SocialIcon';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend. For now, open mailto.
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm text-purple-400 font-medium mb-3">
              <Mail className="w-4 h-4" />
              Kontak
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {contact.title}
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">{contact.subtitle}</p>
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-gray-300 leading-relaxed mb-8">{contact.description}</p>

              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20">
                    <Mail className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Email</div>
                    <div className="text-white font-medium">{profile.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:border-purple-500/40 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Telepon</div>
                    <div className="text-white font-medium">{profile.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 glass rounded-xl p-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Lokasi</div>
                    <div className="text-white font-medium">{profile.location}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-sm text-gray-400 mb-3">Ikuti saya</div>
                <div className="flex gap-3">
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
            </div>

            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama kamu"
                  className="w-full bg-[#0a0520] border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@contoh.com"
                  className="w-full bg-[#0a0520] border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tuliskan pesan kamu di sini..."
                  className="w-full bg-[#0a0520] border border-purple-500/20 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sent}
                className="w-full btn-primary inline-flex items-center justify-center gap-2 text-white font-medium px-6 py-3 rounded-xl disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Terkirim!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
