import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const FAQS = [
  {
    q: 'What exactly comes in the hire package?',
    a: 'A 1.9 tonne excavator and an 8x5 tipper trailer, hired together as one DIY package. Standard excavator hire includes a 900mm mud bucket, 450mm GP bucket, 300mm GP bucket, ripper, and hydraulic quick hitch.'
  },
  {
    q: 'Do you offer same-day or emergency hire?',
    a: 'Yes. Same-day and emergency services are available when the gear is free. Call us and we will do our best to get you sorted the same day.',
  },
  {
    q: 'What areas do you service?',
    a: 'We are based in Warrnambool and service Warrnambool and surrounding areas across South West Victoria. Get in touch and we will confirm whether we can reach your site.',
  },
  {
    q: 'Can you deliver the equipment to my site?',
    a: 'Yes. Delivery is available around Warrnambool and surrounding South West Victoria areas. Mention your site location when requesting a quote and we will confirm the delivery details.',
  },
  {
    q: 'Do I need to arrange waste removal separately?',
    a: 'No. That is the point of the package. The tipper trailer lets you load and tip the spoil yourself, so there is no separate removal fee. Delivery to site can also be arranged if required.'
  },
  {
    q: 'Are quotes free?',
    a: 'Yes, every quote is free with no obligation. Tell us about your job, dates, and location and we will come back to you with the details.',
  },
  {
    q: 'How do I book?',
    a: 'Call, text, email, or send a message through the form on this page. We are happy to take enquiries any way that suits you.',
  },
];

export default function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-ink-soft">
      <div className="container grid lg:grid-cols-12 gap-12">
        <div ref={ref} className="reveal lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.25em] text-nardo-400">FAQ</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-700 tracking-tight text-white text-balance">
            Questions, answered
          </h2>
          <p className="mt-5 text-nardo-300 leading-relaxed">
            Still unsure? Give us a call and we will talk you through it.
          </p>
        </div>

        <div className="lg:col-span-8 space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={f.q}
              className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden transition-colors duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <span className="font-display text-base sm:text-lg font-500 text-white">{f.q}</span>
                <span className="shrink-0 text-nardo-400">
                  {open === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </button>
              <div
                className={`grid transition-all duration-400 ${
                  open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-nardo-300 leading-relaxed text-sm">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
