import { Check } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const GEAR = [
  {
    name: '1.9 Tonne Excavator',
    spec: 'SANY SY18U',
    desc: 'Fits through gates and into tight residential sites. Strong enough for trenches, footings, stump removal, and light demolition.',
    img: '/IMG_6599.jpeg',
    alt: 'SANY SY18U 1.9 tonne excavator available for hire in Warrnambool',
  },
  {
    name: 'Excavator Bucket',
    spec: 'Impact attachments',
    desc: 'Heavy-duty bucket and ripper combo for breaking hard ground, clearing rock, and handling the tough digs others shy away from.',
    img: '/IMG_6623.jpeg',
    alt: 'Close-up of excavator bucket and ripper attachment',
  },
  {
    name: '8x5 Tipper Trailer',
    spec: 'Hydraulic tip',
    desc: 'Load your spoil straight from the bucket and tip it where you want. No shovelling into a ute, no second trip to the tip.',
    img: '/IMG_6649.jpeg',
    alt: '8x5 hydraulic tipper trailer tipped up and ready to unload',
  },
];

export default function Equipment() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="equipment" className="relative py-24 sm:py-32 bg-ink-soft">
      <div className="container">
        <div ref={ref} className="reveal max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-nardo-400">The gear</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-white text-balance">
            The equipment you get
          </h2>
          <p className="mt-5 text-nardo-300 leading-relaxed">
            Compact, capable, and ready to work. Everything is maintained and hire-ready, with delivery available when you need it.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-nardo-200">
            <span className="w-full text-xs uppercase tracking-[0.2em] text-nardo-500">Standard hire includes</span>
            {['900mm mud bucket', '450mm GP bucket', '300mm GP bucket', 'Ripper', 'Hydraulic quick hitch'].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEAR.map((g, i) => (
            <GearCard key={g.name} name={g.name} spec={g.spec} desc={g.desc} img={g.img} alt={g.alt} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GearCard({
  name,
  spec,
  desc,
  img,
  alt,
  delay,
}: {
  name: string;
  spec: string;
  desc: string;
  img: string;
  alt: string;
  delay: number;
}) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-nardo-400">{spec}</span>
        <h3 className="mt-1 font-display text-xl font-600 text-white">{name}</h3>
        <p className="mt-2 text-sm text-nardo-300 leading-relaxed max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
          {desc}
        </p>
      </div>
    </article>
  );
}
