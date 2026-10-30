import { ArrowRight, Phone } from 'lucide-react';
import { BUSINESS } from '@/lib/business';
import { useReveal } from '@/hooks/useReveal';

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative py-20 sm:py-28">
      <div className="container">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-nardo-700/40 via-ink-soft to-ink p-10 sm:p-16 text-center"
        >
          <div className="absolute inset-0 grain opacity-20" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-white text-balance">
              Ready to get the gear on site?
            </h2>
            <p className="mt-5 text-nardo-300 max-w-xl mx-auto leading-relaxed">
              Free quotes, same-day hire when available. Call now or send a message and Keaton or
              Sarah will sort you out.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-600 text-ink hover:bg-nardo-200 transition-all duration-300"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${BUSINESS.phoneHref}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-500 text-white hover:bg-white/5 transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
