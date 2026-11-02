import ContactForm from './ContactForm';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src="/IMG_6599.jpeg"
          alt="K&S Hire SANY SY18U excavator ready for hire in Warrnambool"
          className="h-full w-full object-cover object-center"
        />
        {/* Light scrim: solid white behind the copy, the machine shows through on the right */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/80 lg:bg-gradient-to-r lg:from-white lg:from-35% lg:via-white/85 lg:via-55% lg:to-white/0" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-nardo-200 bg-white px-4 py-1.5 text-xs text-nardo-600 shadow-sm">
            <MapPin className="h-3.5 w-3.5" />
            {BUSINESS.area}
          </div>

          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-700 leading-[1.05] tracking-tight text-ink text-balance">
            Dig it. Haul it.
            <br />
            <span className="text-nardo-500">All in one hire.</span>
          </h1>

          <p className="mt-6 text-lg text-nardo-600 leading-relaxed max-w-xl">
            A complete DIY package from a family-owned business in Warrnambool. Hire a 1.9 tonne
            excavator paired with an 8x5 tipper trailer, with delivery available across the local
            area. No need to pay extra for waste removal.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-600 text-white hover:bg-nardo-700 transition-all duration-300"
            >
              Book Your Hire
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-nardo-300 bg-white px-7 py-3.5 font-500 text-ink hover:border-ink transition-all duration-300"
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
          <ContactForm />
          <p className="mt-4 mx-auto flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-nardo-600 shadow-sm">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
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
      <div className="font-display text-2xl font-700 text-ink">{value}</div>
      <div className="text-xs uppercase tracking-wider text-nardo-500 mt-0.5">{label}</div>
    </div>
  );
}
