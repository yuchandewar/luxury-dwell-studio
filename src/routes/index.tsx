import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle2, Sparkles, Users, Home as HomeIcon, Building2, ChefHat, Sofa, Bed, Briefcase, Ruler, Hammer, Box, Palette, Star } from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-living.jpg";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bedroomImg from "@/assets/project-bedroom.jpg";
import officeImg from "@/assets/project-office.jpg";
import diningImg from "@/assets/project-dining.jpg";
import bathImg from "@/assets/project-bath.jpg";
import readingImg from "@/assets/project-reading.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import { BeforeAfter } from "@/components/before-after";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Atelier — Luxury Interior Design Studio" },
      { name: "description", content: "Award-winning interior design for homes and workplaces. Book a complimentary consultation and transform your space into something extraordinary." },
      { property: "og:title", content: "Maison Atelier — Luxury Interior Design Studio" },
      { property: "og:description", content: "Refined, timeless interiors. Residential, commercial, kitchens, and more." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
  }),
  component: Home,
});

const services = [
  { icon: HomeIcon, title: "Residential", desc: "Homes designed around how you actually live." },
  { icon: Building2, title: "Commercial", desc: "Retail, hospitality, and workspaces that perform." },
  { icon: ChefHat, title: "Modular Kitchen", desc: "Bespoke kitchens engineered for daily rituals." },
  { icon: Sofa, title: "Living Rooms", desc: "Warm, curated rooms with lasting presence." },
  { icon: Bed, title: "Bedrooms", desc: "Restful sanctuaries tailored to your senses." },
  { icon: Briefcase, title: "Office Interiors", desc: "Workspaces that reflect brand and culture." },
  { icon: Ruler, title: "Space Planning", desc: "Layouts that unlock the best of every square foot." },
  { icon: Hammer, title: "Renovation", desc: "End-to-end refurbishment with a single studio." },
  { icon: Box, title: "3D Visualization", desc: "Photoreal previews before a nail is driven." },
  { icon: Palette, title: "Custom Furniture", desc: "Pieces made specifically for your space." },
];

const process = [
  { step: "01", title: "Discovery", desc: "A conversation about your life, taste, and rhythms." },
  { step: "02", title: "Concept", desc: "Mood boards, materials, and layouts brought to life in 3D." },
  { step: "03", title: "Design", desc: "Detailed plans, custom pieces, and considered specifications." },
  { step: "04", title: "Build", desc: "Trusted craftsmen executing every millimeter with care." },
  { step: "05", title: "Reveal", desc: "Styled, photographed, and ready to be lived in." },
];

const testimonials = [
  { name: "Anaïs & Marc D.", quote: "They designed a home that feels like the truest version of us. Every room has a soul.", role: "Homeowners, Tribeca" },
  { name: "Priya Rao", quote: "A rare studio that hears you first and designs second. The result is quietly magnificent.", role: "Founder, Beacon Studio" },
  { name: "James O'Neill", quote: "The renovation was on time, the finish flawless, and the space is genuinely joyful.", role: "Client, Brooklyn Heights" },
];

const projects = [
  { img: kitchenImg, title: "The Oak Kitchen", tag: "Kitchen · SoHo" },
  { img: diningImg, title: "Atelier Dining", tag: "Residential · Chelsea" },
  { img: bathImg, title: "Travertine Bath", tag: "Renovation · Upper East" },
  { img: officeImg, title: "Warm Boardroom", tag: "Commercial · Midtown" },
  { img: bedroomImg, title: "Cream Bedroom", tag: "Residential · West Village" },
  { img: readingImg, title: "The Reading Nook", tag: "Custom Millwork" },
];

const faqs = [
  { q: "Do you offer a free consultation?", a: "Yes — every project starts with a complimentary 45-minute discovery call to understand your space, taste, and goals." },
  { q: "What's your typical project timeline?", a: "A full home refurbishment averages 12–20 weeks. Kitchens and single rooms typically run 6–10 weeks. We share a precise schedule after the discovery stage." },
  { q: "Do you handle renovation, or design only?", a: "Both. We run turnkey projects — design, procurement, and site management — with our vetted network of craftsmen." },
  { q: "What budgets do you work with?", a: "Our projects generally start at $75k for single rooms and $250k+ for full residences. We're transparent about scope and fees from day one." },
  { q: "Do you offer EMI or payment plans?", a: "Yes. We work with financing partners and can structure milestone-based payments to fit your project." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Luxurious modern living room with warm neutral tones and oak accents"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="max-w-3xl animate-float-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white">
              <Sparkles className="h-3.5 w-3.5" /> Est. 2011 · New York
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] text-white text-balance md:text-7xl lg:text-8xl">
              Transform your space into something extraordinary.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Maison Atelier is a design studio for people who care about the details.
              We craft interiors that are warm, timeless, and unmistakably yours.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary transition hover:bg-white/90"
              >
                Book free consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full glass px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white hover:bg-white/15"
              >
                View portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-12 md:grid-cols-4 md:px-8 md:py-16">
          {[
            { k: "14+", v: "Years designing" },
            { k: "320+", v: "Projects delivered" },
            { k: "98%", v: "Happy clients" },
            { k: "22", v: "Design awards" },
          ].map((s) => (
            <div key={s.v} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section id="featured" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Featured Work</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              Interiors with intention. Every one of them.
            </h2>
          </div>
          <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent">
            All projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-6">
          <FeaturedCard className="md:col-span-4 md:row-span-2 md:aspect-auto" img={projects[0].img} title={projects[0].title} tag={projects[0].tag} />
          <FeaturedCard className="md:col-span-2" img={projects[1].img} title={projects[1].title} tag={projects[1].tag} />
          <FeaturedCard className="md:col-span-2" img={projects[2].img} title={projects[2].title} tag={projects[2].tag} />
        </div>
      </section>

      {/* Services */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">What we do</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              A complete studio, from concept to keys.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-background/60 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
              >
                <s.icon className="h-6 w-6 text-accent" strokeWidth={1.4} />
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/services" className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:text-accent">
              Explore all services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Before & After</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-balance md:text-5xl">
              The room you have.
              <br />
              <span className="italic text-accent">The room you deserve.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Drag the slider to see what a full Maison Atelier renovation
              looks like — from bare walls to a completed, styled interior.
            </p>
            <div className="mt-6 space-y-3">
              {["End-to-end project management", "Bespoke furniture and joinery", "Trusted, vetted craftsmen", "Delivered on time, every time"].map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <BeforeAfter before={beforeImg} after={afterImg} alt="Full living room renovation" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">Our Process</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-balance md:text-6xl">
              Considered, calm, and never rushed.
            </h2>
          </div>
          <ol className="mt-16 grid gap-8 md:grid-cols-5">
            {process.map((p, i) => (
              <li key={p.step} className="relative">
                <div className="font-display text-5xl text-accent">{p.step}</div>
                <h3 className="mt-4 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="mt-6 hidden h-px w-full bg-primary-foreground/15 md:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Kind Words</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-balance md:text-6xl">Trusted by discerning clients.</h2>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">4.9 · 180+ reviews</span>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:shadow-elegant">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-2xl leading-snug text-balance">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ + Quick lead form */}
      <section className="bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">FAQ</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] text-balance md:text-5xl">Answers to what most clients ask.</h2>
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <QuickInquiry />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <img src={diningImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center text-primary-foreground md:py-32">
          <Award className="mx-auto h-8 w-8 text-accent" strokeWidth={1.2} />
          <h2 className="mt-6 font-display text-5xl leading-[1.02] text-balance md:text-7xl">
            Let's design your next chapter.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
            A 45-minute consultation, on us. No obligation — just a conversation about what your space could become.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-accent-foreground transition hover:opacity-90">
            <Users className="h-4 w-4" /> Book free consultation
          </Link>
        </div>
      </section>
    </>
  );
}

function FeaturedCard({ img, title, tag, className = "" }: { img: string; title: string; tag: string; className?: string }) {
  return (
    <Link to="/portfolio" className={`group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-soft ${className}`}>
      <img src={img} alt={title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
        <p className="text-xs uppercase tracking-[0.25em] text-white/75">{tag}</p>
        <h3 className="mt-2 font-display text-2xl md:text-3xl">{title}</h3>
      </div>
    </Link>
  );
}

function QuickInquiry() {
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
    >
      <h3 className="font-display text-3xl">Get a free consultation</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Tell us about your space. We'll respond within one business day.
      </p>
      {sent ? (
        <div className="mt-8 rounded-2xl bg-accent/10 p-6 text-sm">
          Thank you. A designer will reach out within one business day.
        </div>
      ) : (
        <div className="mt-6 grid gap-4">
          <Field label="Your name" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Phone (optional)" name="phone" />
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Project type</label>
            <select className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm">
              <option>Full home design</option>
              <option>Kitchen</option>
              <option>Single room</option>
              <option>Office / commercial</option>
              <option>Renovation</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
            <textarea rows={3} className="w-full rounded-xl border border-input bg-background p-4 text-sm" placeholder="Tell us about your space…" />
          </div>
          <button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-primary text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90">
            Request consultation
          </button>
        </div>
      )}
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} className="h-12 w-full rounded-xl border border-input bg-background px-4 text-sm" />
    </div>
  );
}
