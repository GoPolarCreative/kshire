import { Home, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS } from '@/lib/business';
import { useReveal } from '@/hooks/useReveal';

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container grid lg:grid-cols-12 gap-12 items-center">
        <div ref={ref} className="reveal lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <img
              src="/IMG_6602.jpeg"
              alt="K&S Hire excavator loaded on trailer ready for delivery in Warrnambool"
              loading="lazy"
              className="w-full h-[460px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-xl bg-ink/70 backdrop-blur-md border border-white/10 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-ink">
                <Home className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-600 text-white">Family owned</div>
                <div className="text-xs text-nardo-400">Keaton &amp; Sarah Grainger</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-nardo-400">About us</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-white text-balance">
            A small family business with a simple idea
          </h2>
          <div className="mt-6 space-y-4 text-nardo-300 leading-relaxed">
            <p>
              K&amp;S Hire is a small, family-owned business run by Keaton and Sarah Grainger. We
              offer hire of a 1.9 tonne excavator paired with an 8x5 tipper trailer around
              Warrnambool and South West Victoria, with delivery available and a full set of
              standard attachments included.
            </p>
            <p>
              We saw tradies and owner-builders paying twice for one job: an excavator from one
              yard and waste removal from another. So we put both in one package. You dig it, you
              haul it, you tip it. We can also deliver the equipment to your site, making the whole
              job simpler from the first booking to the final load.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <InfoTile icon={MapPin} label="Based in" value="Warrnambool" />
            <InfoTile icon={Phone} label="Call" value={BUSINESS.phone} />
            <InfoTile icon={Mail} label="Email" value={BUSINESS.email} />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Home;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <Icon className="h-5 w-5 text-nardo-400" />
      <div className="mt-3 text-xs uppercase tracking-wider text-nardo-500">{label}</div>
      <div className="mt-1 text-sm text-white break-words">{value}</div>
    </div>
  );
}
