import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import { BUSINESS } from '@/lib/business';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', BUSINESS.web3formsKey);
    formData.append('subject', `New enquiry from ${formData.get('name')}`);
    formData.append('from_name', 'K&S Hire Website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please call us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 p-8 rounded-2xl bg-white/[0.04] border border-white/10 min-h-[420px]">
        <CheckCircle2 className="h-14 w-14 text-emerald-400" />
        <h3 className="font-display text-2xl font-600 text-white">Message sent</h3>
        <p className="text-nardo-300 max-w-xs">
          Thanks for reaching out. Keaton or Sarah will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm text-nardo-200 hover:text-white underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 sm:p-8 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-display text-xl font-600 text-white">Get a free quote</h3>
          <p className="text-xs text-nardo-400 mt-1">We reply fast, usually same day.</p>
        </div>
        <span className="hidden sm:flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <div className="space-y-4">
        <Field label="Name" name="name" type="text" placeholder="Your name" required />
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Phone" name="phone" type="tel" placeholder="04XX XXX XXX" required />
          <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wider text-nardo-400 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows={4}
            required
            placeholder="Tell us about your job, dates, and location."
            className="w-full rounded-xl bg-ink-soft border border-white/10 px-4 py-3 text-white placeholder:text-nardo-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all resize-none"
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-4 flex items-start gap-2 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-300">
          <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-600 text-ink hover:bg-nardo-200 transition-all duration-300 disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Enquiry <Send className="h-4 w-4" />
          </>
        )}
      </button>
      {/* Honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-nardo-400 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl bg-ink-soft border border-white/10 px-4 py-3 text-white placeholder:text-nardo-500 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/20 transition-all"
      />
    </div>
  );
}
