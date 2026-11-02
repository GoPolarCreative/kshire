import { Shovel, Truck, Drill, PackageCheck, MapPinned } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  {
    icon: Shovel,
    title: '1.9T Excavator Hire',
    desc: 'A compact 1.9 tonne excavator that fits tight sites but digs like a bigger machine. Perfect for trenches, footings, and site prep.'
  },
  {
    icon: Truck,
    title: '8x5 Tipper Trailer',
    desc: 'Haul away what you dig. The tipper trailer lets you load and dump waste yourself, with no separate removal fee.',
  },
  {
    icon: Drill,
    title: 'Auger Attachments',
    desc: 'Add augers to your excavator hire for fence posts, footings, and tree planting. Drive cleaner holes in less time.',
  },
  {
    icon: PackageCheck,
    title: 'Complete DIY Package',
    desc: 'Excavation plus haulage in one booking. Dig it out, load it up, tip it off. No paying twice for two different services.',
  },
  {
    icon: MapPinned,
    title: 'Delivery Available',
    desc: 'Need a hand getting the equipment to site? Delivery is available around Warrnambool and surrounding South West Victoria areas.',
  },
];

export default function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-nardo-50">
      <div className="container">
        <div ref={ref} className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-nardo-500">What we offer</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-ink text-balance">
            One hire, the whole job sorted
          </h2>
          <p className="mt-5 text-nardo-600 leading-relaxed">
            Everything you need to excavate and remove waste on your own schedule, without juggling
            multiple contractors.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  desc,
  delay,
}: {
  icon: typeof Shovel;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group rounded-2xl border border-nardo-200 bg-white p-6 shadow-sm hover:border-nardo-300 hover:shadow-md transition-all duration-500"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-nardo-100 border border-nardo-200 text-ink transition-all duration-500 group-hover:bg-ink group-hover:border-ink group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-lg font-600 text-ink">{title}</h3>
      <p className="mt-2.5 text-sm text-nardo-600 leading-relaxed">{desc}</p>
    </div>
  );
}
