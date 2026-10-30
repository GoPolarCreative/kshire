import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Equipment from '@/components/Equipment';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS } from '@/lib/business';
import { useRevealAll } from '@/hooks/useReveal';

export default function App() {
  useRevealAll();
  return (
    <div className="min-h-screen bg-ink text-nardo-100">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Equipment />
        <About />
        <CTA />
        <ContactSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-nardo-400">Get in touch</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-700 tracking-tight text-white text-balance">
            Book your hire or ask anything
          </h2>
          <p className="mt-5 text-nardo-300 leading-relaxed max-w-md">
            Send a message and we will come back to you fast. Prefer to talk? Call or text us
            directly.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`tel:${BUSINESS.phoneHref}`}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-nardo-500">Phone</div>
                <div className="text-white">{BUSINESS.phone}</div>
              </div>
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:border-white/20 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-nardo-500">Email</div>
                <div className="text-white break-all">{BUSINESS.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-nardo-500">Based in</div>
                <div className="text-white">{BUSINESS.address}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
