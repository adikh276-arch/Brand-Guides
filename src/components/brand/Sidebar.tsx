import { useEffect, useState } from "react";
import { motion } from "motion/react";
const logo = "https://res.cloudinary.com/dh02ythrk/image/upload/v1781582205/mantracare-brand-guides/mantracare-logo.png";
import {
  Sparkles, Compass, Hexagon, Palette, Type, Camera, Shapes, Download,
} from "lucide-react";

export const sections = [
  { id: "hero", label: "Introduction", icon: Sparkles },
  { id: "overview", label: "Brand Overview", icon: Compass },
  { id: "logo", label: "Logo", icon: Hexagon },
  { id: "color", label: "Color System", icon: Palette },
  { id: "type", label: "Typography", icon: Type },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "icons", label: "Iconography", icon: Shapes },
  { id: "download", label: "Download Center", icon: Download },
];

export function BrandSidebar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col border-r border-border/60 bg-sidebar/90 backdrop-blur-xl z-30">
      <a href="#hero" className="flex items-center justify-center px-5 pt-8 pb-6">
        <img src={logo} alt="MantraCare" className="w-full max-w-[220px] h-auto" />
      </a>
      <div className="px-7 pb-5">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11px] font-medium text-muted-foreground">
          <span className="size-1.5 rounded-full bg-action" />
          Brand System · v3.0
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 pb-8">
        {sections.map((s, i) => {
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                isActive
                  ? "text-primary bg-sidebar-accent font-semibold"
                  : "text-sidebar-foreground/70 hover:text-foreground hover:bg-sidebar-accent/60"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="side-pill"
                  className="absolute inset-0 rounded-xl ring-1 ring-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-lg bg-background/70 text-[13px] tabular-nums text-muted-foreground/80 ring-1 ring-border/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className="relative z-10 size-4 opacity-70 group-hover:opacity-100" />
              <span className="relative z-10">{s.label}</span>
            </a>
          );
        })}
      </nav>
      <div className="border-t border-border/60 px-6 py-4 text-[11px] text-muted-foreground">
        © MantraCare · Brand Guidelines
      </div>
    </aside>
  );
}

export function MobileTopBar() {
  return (
    <div className="lg:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border/60 bg-background/85 px-4 py-3 backdrop-blur-xl">
      <a href="#hero" className="flex items-center gap-2">
        <img src={logo} alt="MantraCare" className="h-14 w-auto" />
      </a>
      <a
        href="#download"
        className="rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-medium"
      >
        Downloads
      </a>
    </div>
  );
}
