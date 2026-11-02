import { Check, X } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const ADVANTAGES = [
  'Excavator and tipper trailer in one hire, no double booking fees',
  'DIY waste removal means no paying someone else to cart it away',
  'Augers available to add on for post holes and footings',
  'Family owned and operated, you talk to the people who run it',
  'Delivery available to get the equipment to your site',
  'Same-day and emergency hire when the job cannot wait',
  'Free, no-obligation quotes on every job',
];

const TRADE = [
  'Pay for an excavator and a separate waste removal service',
  'Wait days for a haulage contractor to clear your site',
  'Deal with big depots where you are just another number',
  'Book days ahead when timing slips on your project',
];

export default function WhyUs() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" className="relative py-24 sm:py-32 bg-white">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div ref={ref} className="reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-nardo-500">Why K&amp;S</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-ink text-balance">
            Built different from the big hire yards
          </h2>
          <p className="mt-5 text-nardo-600 leading-relaxed">
            We started K&amp;S Hire because tradies and owner-builders around Warrnambool were
            paying twice: once to dig, once to haul. Our package puts both in your hands for one
            hire, so you keep control of the whole job.
          </p>

          <div className="mt-8 rounded-2xl border border-nardo-200 bg-nardo-50 p-6">
            <ul className="space-y-3.5">
              {ADVANTAGES.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal">
          <div className="rounded-2xl border border-nardo-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-nardo-200" />
              <span className="text-xs uppercase tracking-[0.25em] text-nardo-500">
                The old way
              </span>
              <div className="h-px flex-1 bg-nardo-200" />
            </div>
            <ul className="space-y-3.5">
              {TRADE.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-nardo-500 line-through decoration-nardo-300">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500 no-underline">
                    <X className="h-3.5 w-3.5" />
                  </span>
                  <span className="no-underline">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
