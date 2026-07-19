import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Home as HomeIcon, Building2, ChefHat, Sofa, Bed, Briefcase, Ruler, Hammer, Box, Palette, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Maison Atelier" },
      { name: "description", content: "Residential and commercial interior design, kitchens, renovation, 3D visualization, and custom furniture. Explore what Maison Atelier does." },
      { property: "og:title", content: "Services — Maison Atelier" },
      { property: "og:description", content: "Full-service interior design and renovation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: HomeIcon, title: "Residential Interior", desc: "Full-home design tailored to how you live.", timeline: "12–20 weeks", benefits: ["Custom layouts", "Bespoke joinery", "Complete styling"] },
  { icon: Building2, title: "Commercial Design", desc: "Retail, hospitality, and office spaces with presence.", timeline: "16–24 weeks", benefits: ["Brand-led design", "High traffic durability", "Turn-key delivery"] },
  { icon: ChefHat, title: "Modular Kitchen", desc: "Kitchens engineered around your daily rituals.", timeline: "6–10 weeks", benefits: ["Custom cabinetry", "Premium appliances", "Stone & wood palette"] },
  { icon: Sofa, title: "Living Room Design", desc: "Curated rooms with warmth and lasting presence.", timeline: "5–8 weeks", benefits: ["Custom sofas", "Art curation", "Lighting plan"] },
  { icon: Bed, title: "Bedroom Design", desc: "Sanctuaries tailored to your senses.", timeline: "4–7 weeks", benefits: ["Sleep-first layouts", "Bespoke wardrobes", "Textile styling"] },
  { icon: Briefcase, title: "Office Interior", desc: "Workspaces that reflect brand and culture.", timeline: "8–14 weeks", benefits: ["Team-first zoning", "Acoustic design", "Signature reception"] },
  { icon: Ruler, title: "Space Planning", desc: "Unlock the best of every square foot.", timeline: "2–4 weeks", benefits: ["3D floor plans", "Traffic-flow study", "Furniture spec"] },
  { icon: Hammer, title: "Renovation", desc: "End-to-end refurbishment with a single studio.", timeline: "12–24 weeks", benefits: ["Site management", "Vetted craftsmen", "Fixed timeline"] },
  { icon: Box, title: "3D Visualization", desc: "Photoreal previews before a nail is driven.", timeline: "1–3 weeks", benefits: ["Photoreal renders", "Walkthrough video", "Material samples"] },
  { icon: Palette, title: "Custom Furniture", desc: "Pieces made specifically for your space.", timeline: "8–14 weeks", benefits: ["One-of-a-kind pieces", "Local craftsmen", "Sustainable timber"] },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-24 pb-12 md:px-8 md:pt-32 md:pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Services</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] text-balance md:text-7xl">
          Everything your space needs, under one studio.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Ten specialisms. One coordinated team. Each service is delivered with
          the same standards of craft, care, and clarity.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <s.icon className="h-8 w-8 text-accent" strokeWidth={1.3} />
              <h2 className="mt-6 font-display text-2xl">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>

              <ul className="mt-6 space-y-2 text-sm">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {s.timeline}
                </div>
                <Link to="/contact" className="group/link inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent">
                  Enquire <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:px-8 md:py-28">
          <h2 className="font-display text-4xl leading-[1.05] text-balance md:text-6xl">Not sure where to start?</h2>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
            Book a complimentary consultation — we'll help scope the right service and timeline for your space.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center rounded-full bg-accent px-8 py-4 text-sm uppercase tracking-[0.15em] text-accent-foreground hover:opacity-90">
            Book free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
