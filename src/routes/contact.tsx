import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maison Atelier" },
      { name: "description", content: "Get in touch with Maison Atelier. Book a free interior design consultation or ask us anything about your upcoming project." },
      { property: "og:title", content: "Contact — Maison Atelier" },
      { property: "og:description", content: "Book a free consultation with our design studio." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pt-24 pb-20 md:px-8 md:pt-32 md:pb-28 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] text-balance md:text-6xl">Let's start a conversation.</h1>
          <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed">
            Tell us a little about your project. We'll get back to you within one business day to schedule a complimentary 45-minute consultation.
          </p>

          <ul className="mt-10 space-y-5">
            <ContactRow icon={MapPin} label="Studio" value="42 Rue de l'Atelier, New York, NY 10012" />
            <ContactRow icon={Phone} label="Phone" value="+1 (555) 014-2200" href="tel:+15550142200" />
            <ContactRow icon={Mail} label="Email" value="studio@maisonatelier.co" href="mailto:studio@maisonatelier.co" />
            <ContactRow icon={MessageCircle} label="WhatsApp" value="Chat with a designer" href="https://wa.me/15550142200" />
            <ContactRow icon={Clock} label="Hours" value="Mon–Fri, 9am–6pm · Sat by appointment" />
          </ul>

          <div className="mt-10 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Studio location map"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0060%2C40.7208%2C-73.9950%2C40.7280&layer=mapnik"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
        >
          <h2 className="font-display text-3xl">Project inquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">All fields are private. We reply within one business day.</p>

          {sent ? (
            <div className="mt-8 rounded-2xl bg-accent/10 p-6 text-sm">
              Thank you — a designer will reach out shortly to schedule your consultation.
            </div>
          ) : (
            <div className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" required />
                <Field label="Last name" name="lastName" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Project type</label>
                <select className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm">
                  <option>Full home design</option>
                  <option>Kitchen</option>
                  <option>Single room</option>
                  <option>Renovation</option>
                  <option>Commercial / office</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Budget range</label>
                <select className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm">
                  <option>Under $75,000</option>
                  <option>$75,000 – $150,000</option>
                  <option>$150,000 – $300,000</option>
                  <option>$300,000 – $600,000</option>
                  <option>$600,000+</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us about your space</label>
                <textarea rows={4} className="w-full rounded-xl border border-input bg-background p-4 text-sm" placeholder="Location, square footage, current state, timeline…" />
              </div>
              <button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90">
                Send inquiry
              </button>
              <p className="text-xs text-muted-foreground">By sending, you agree to our privacy policy. We never share your information.</p>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-secondary">
        <Icon className="h-4 w-4 text-accent" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm">{value}</div>
      </div>
    </div>
  );
  if (href) return <li><a href={href} className="block transition hover:opacity-80">{content}</a></li>;
  return <li>{content}</li>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm" />
    </div>
  );
}
