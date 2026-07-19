import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display">M</span>
            <span className="font-display text-xl">Maison Atelier</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            An interior design studio crafting refined, timeless spaces. From concept
            to final styling — we design homes and workplaces meant to be lived in.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-background transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-background transition">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-background transition">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-accent transition">About</Link></li>
            <li><Link to="/services" className="hover:text-accent transition">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent transition">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>42 Rue de l'Atelier</li>
            <li>New York, NY 10012</li>
            <li><a href="tel:+15550142" className="hover:text-foreground">+1 (555) 014-2200</a></li>
            <li><a href="mailto:studio@maisonatelier.co" className="hover:text-foreground">studio@maisonatelier.co</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-8">
          <p>© {new Date().getFullYear()} Maison Atelier. All rights reserved.</p>
          <p>Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
}
