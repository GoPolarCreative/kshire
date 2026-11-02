import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b transition-all duration-500 ${
        scrolled ? 'border-nardo-200 shadow-sm py-3' : 'border-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#top" className="flex items-center group">
          <img
            src="/IMG_6664.png"
            alt="K&S Hire logo"
            className="h-12 w-auto object-contain mix-blend-multiply brightness-110 contrast-125 transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-nardo-600 hover:text-ink transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:w-full"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${BUSINESS.phoneHref}`}
            className="flex items-center gap-2 text-sm text-nardo-600 hover:text-ink transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-600 text-white hover:bg-nardo-700 transition-colors duration-300"
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden relative z-50 text-ink p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-0 z-40 bg-white pt-24 px-6">
          <nav className="flex flex-col gap-6">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-600 text-ink border-b border-nardo-200 pb-4"
              >
                {n.label}
              </a>
            ))}
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="flex items-center gap-2 text-nardo-600 mt-2"
            >
              <Phone className="h-5 w-5" /> {BUSINESS.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-ink px-5 py-3 text-center font-600 text-white mt-2"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
