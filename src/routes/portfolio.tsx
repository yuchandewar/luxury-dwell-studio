import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bedroomImg from "@/assets/project-bedroom.jpg";
import officeImg from "@/assets/project-office.jpg";
import diningImg from "@/assets/project-dining.jpg";
import bathImg from "@/assets/project-bath.jpg";
import readingImg from "@/assets/project-reading.jpg";
import heroImg from "@/assets/hero-living.jpg";
import afterImg from "@/assets/after.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Maison Atelier" },
      { name: "description", content: "A selection of homes, kitchens, and workplaces designed by Maison Atelier." },
      { property: "og:title", content: "Portfolio — Maison Atelier" },
      { property: "og:description", content: "Refined residential and commercial interior design projects." },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: kitchenImg },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

type Cat = "All" | "Residential" | "Kitchen" | "Commercial" | "Renovation";

const items: { img: string; title: string; place: string; cat: Exclude<Cat, "All">; span?: string }[] = [
  { img: heroImg, title: "Cedar Loft", place: "SoHo · Living", cat: "Residential", span: "md:col-span-2 md:row-span-2" },
  { img: kitchenImg, title: "The Oak Kitchen", place: "West Village", cat: "Kitchen" },
  { img: diningImg, title: "Atelier Dining", place: "Chelsea", cat: "Residential" },
  { img: bathImg, title: "Travertine Bath", place: "Upper East", cat: "Renovation", span: "md:row-span-2" },
  { img: officeImg, title: "Warm Boardroom", place: "Midtown", cat: "Commercial" },
  { img: bedroomImg, title: "Cream Bedroom", place: "West Village", cat: "Residential" },
  { img: readingImg, title: "The Reading Nook", place: "Brooklyn Heights", cat: "Renovation" },
  { img: afterImg, title: "Walnut Living", place: "Tribeca", cat: "Residential", span: "md:col-span-2" },
];

const categories: Cat[] = ["All", "Residential", "Kitchen", "Commercial", "Renovation"];

function Portfolio() {
  const [cat, setCat] = useState<Cat>("All");
  const filtered = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 pt-24 pb-12 md:px-8 md:pt-32 md:pb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Portfolio</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] text-balance md:text-7xl">
          A gallery of homes and workplaces.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A selection of recent Maison Atelier projects — residential, commercial, and everything in between.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.15em] transition",
                cat === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-foreground/40",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px] md:gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              className={cn(
                "group relative overflow-hidden rounded-3xl bg-secondary shadow-soft",
                "aspect-[4/5] sm:aspect-auto sm:min-h-[280px] md:min-h-0",
                p.span,
              )}
            >
              <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/75">{p.cat} · {p.place}</p>
                <h2 className="mt-2 font-display text-2xl">{p.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 py-20 text-center md:px-8 md:py-24">
          <h2 className="font-display text-4xl leading-[1.05] text-balance md:text-5xl">
            Ready to be the next project on this page?
          </h2>
          <Link to="/contact" className="rounded-full bg-primary px-8 py-4 text-sm uppercase tracking-[0.15em] text-primary-foreground hover:bg-primary/90">
            Start with a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
