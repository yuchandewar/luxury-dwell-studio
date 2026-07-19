import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Compass, Heart, Leaf, Sparkles } from "lucide-react";
import readingImg from "@/assets/project-reading.jpg";
import diningImg from "@/assets/project-dining.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maison Atelier" },
      { name: "description", content: "Meet Maison Atelier — a New York interior design studio crafting warm, timeless spaces. Our story, values, and the designers behind the work." },
      { property: "og:title", content: "About — Maison Atelier" },
      { property: "og:description", content: "The story, values, and people behind Maison Atelier." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: readingImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Compass, title: "Intentional", desc: "Every decision earns its place through function, feeling, and form." },
  { icon: Heart, title: "Human", desc: "We design around real rituals — how you actually cook, host, rest." },
  { icon: Leaf, title: "Enduring", desc: "Natural materials, honest craft, interiors made to age beautifully." },
  { icon: Sparkles, title: "Refined", desc: "Quiet luxury over trend. A restraint that reveals more, not less." },
];

const team = [
  { name: "Camille Laurent", role: "Founder & Creative Director" },
  { name: "Idris Okafor", role: "Head of Interior Architecture" },
  { name: "Mei Tanaka", role: "Senior Designer" },
  { name: "Rafael Costa", role: "Project Director" },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-24 pb-16 md:px-8 md:pt-32 md:pb-24">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About the studio</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] text-balance md:text-7xl">
          A studio built on
          <span className="italic text-accent"> quiet craft</span> and considered detail.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Founded in New York in 2011, Maison Atelier is a small, senior team of
          designers, architects, and craftspeople. We take on a limited number
          of projects each year — because great interiors are made by presence,
          not by scale.
        </p>
      </section>

      <section className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
        <img src={diningImg} alt="A Maison Atelier dining room" className="h-full w-full object-cover" loading="lazy" />
      </section>

      {/* Mission */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Our mission</p>
          <h2 className="mt-3 font-display text-4xl leading-[1.05] text-balance md:text-5xl">
            To design interiors that outlast trend.
          </h2>
        </div>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            We believe a home should feel unmistakably like the people inside it.
            Our work begins with listening — to your habits, your objects, and
            the way light moves through your space.
          </p>
          <p>
            Then we design in materials that grow more beautiful over time: oak,
            plaster, travertine, linen. Rooms you'll want to return to for
            decades, not seasons.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">Values that shape every project.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-8">
                <v.icon className="h-6 w-6 text-accent" strokeWidth={1.4} />
                <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The team</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Designers behind the work.</h2>
          </div>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name}>
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                <div className="grid h-full w-full place-items-center bg-gradient-to-br from-secondary to-sand font-display text-6xl text-muted-foreground/40">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="max-w-xl font-display text-4xl md:text-5xl">Recognition & certifications.</h2>
            <Award className="h-10 w-10 text-accent" strokeWidth={1.1} />
          </div>
          <ul className="mt-12 grid gap-6 border-t border-primary-foreground/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["AD100", "2023, 2024"],
              ["ELLE Décor A-List", "2022"],
              ["NCIDQ Certified", "Studio-wide"],
              ["LEED AP", "Sustainability"],
            ].map(([k, v]) => (
              <li key={k}>
                <div className="font-display text-2xl">{k}</div>
                <div className="mt-1 text-sm text-primary-foreground/70">{v}</div>
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Link to="/contact" className="inline-flex items-center rounded-full bg-accent px-6 py-3.5 text-sm uppercase tracking-[0.15em] text-accent-foreground hover:opacity-90">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
