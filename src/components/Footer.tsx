import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-soft pt-16 pb-8">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img
                src="/IMG_6664.png"
                alt="K&S Hire"
                className="h-14 w-auto object-contain"
                style={{ filter: 'invert(1)' }}
              />
            </div>
            <p className="mt-4 text-sm text-nardo-400 leading-relaxed max-w-xs">
              Family-owned excavator and tipper trailer dry hire for Warrnambool and South West
              Victoria.
            </p>
          </div>

          <FooterCol title="Contact">
            <li>
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 text-nardo-500" /> {BUSINESS.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors break-all"
              >
                <Mail className="h-4 w-4 text-nardo-500 shrink-0" /> {BUSINESS.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="h-4 w-4 text-nardo-500 shrink-0 mt-0.5" />
              <span>{BUSINESS.address}</span>
            </li>
          </FooterCol>

          <FooterCol title="Explore">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#why" className="hover:text-white transition-colors">Why K&amp;S</a></li>
            <li><a href="#equipment" className="hover:text-white transition-colors">Equipment</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </FooterCol>

          <FooterCol title="Service Area">
            <li>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-nardo-500" /> Warrnambool
              </span>
            </li>
            <li>South West Victoria</li>
            <li>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-nardo-500" /> Same-day hire
              </span>
            </li>
          </FooterCol>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-nardo-500">
          <p>&copy; {new Date().getFullYear()} K&amp;S Hire. All rights reserved.</p>
          <p>
            Website by{' '}
            <a
              href="https://www.itscold.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nardo-400 hover:text-white transition-colors"
            >
              Go Polar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.22em] text-nardo-500 mb-4">{title}</h4>
      <ul className="space-y-3 text-sm text-nardo-300">{children}</ul>
    </div>
  );
}
