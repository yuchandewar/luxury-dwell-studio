import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled ? "glass border-b border-border/50" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg">M</span>
          <span className="font-display text-lg tracking-tight md:text-xl">Maison Atelier</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative text-sm text-foreground/80 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {({ isActive }) => (
                  <span className="relative inline-block">
                    {l.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300",
                        isActive && "scale-x-100",
                      )}
                    />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-primary/90"
          >
            Free Consultation
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-display text-2xl hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm uppercase tracking-widest text-primary-foreground"
              >
                Book Free Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
