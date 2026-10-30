import ContactForm from './ContactForm';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/IMG_6599.jpeg"
          alt="K&S Hire SANY SY18U excavator ready for hire in Warrnambool"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
        <div className="absolute inset-0 grain opacity-30 mix-blend-overlay" />
      </div>

      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-nardo-200 backdrop-blur-sm">
            <MapPin className="h-3.5 w-3.5" />
            {BUSINESS.area}
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-700 leading-[1.05] tracking-tight text-white text-balance">
            Dig it. Haul it.
            <br />
            <span className="text-nardo-300">All in one hire.</span>
          </h1>

          <p className="mt-6 text-lg text-nardo-200 leading-relaxed max-w-xl">
            A complete DIY package from a family-owned business in Warrnambool. Hire a 1.9 tonne
            excavator paired with an 8x5 tipper trailer, with delivery available across the local
            area. No need to pay extra for waste removal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-600 text-ink hover:bg-nardo-200 transition-all duration-300"
            >
              Book Your Hire
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-500 text-white hover:bg-white/5 transition-all duration-300"
            >
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
            <Stat value="1.9T" label="Excavator" />
            <Stat value="8x5" label="Tipper trailer" />
            <Stat value="Same-day" label="Hire available" />
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-4">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent blur-xl" />
            <div className="relative">
              <ContactForm />
            </div>
          </div>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-nardo-400">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            Free quotes and delivery available
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-700 text-white">{value}</div>
      <div className="text-xs uppercase tracking-wider text-nardo-400 mt-0.5">{label}</div>
    </div>
  );
}
