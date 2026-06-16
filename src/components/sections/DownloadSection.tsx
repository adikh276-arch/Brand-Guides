import { Download } from "lucide-react";
import { Section } from "@/components/brand/Section";
import { getDownloadUrl } from "@/lib/utils";

export function DownloadSection() {
  type Item = {
    name: string; desc: string; meta: string; type: string; cta: string;
    href: string; filename?: string; external?: boolean; tone: string;
  };
  const items: Item[] = [
    {
      name: "Official Logo Pack",
      desc: "Horizontal, stacked and mark — light + dark surface versions, ready for any application.",
      meta: "ZIP · 6 files · ~150 KB",
      type: ".ZIP",
      cta: "Download Logo Pack",
      href: "https://res.cloudinary.com/dh02ythrk/raw/upload/v1781582200/mantracare-brand-guides/mantracare-logo-pack.zip",
      filename: "MantraCare-Logo-Pack.zip",
      tone: "bg-grad-3",
    },
    {
      name: "Inter Font Package",
      desc: "Official MantraCare heading font. Includes all weights used across our brand system.",
      meta: "Google Fonts · TTF",
      type: "FONT",
      cta: "Download Inter",
      href: "https://fonts.google.com/download?family=Inter",
      external: true,
      tone: "bg-grad-1",
    },
    {
      name: "Roboto Font Package",
      desc: "Official MantraCare body font. Used for descriptions, paragraphs and supporting content.",
      meta: "Google Fonts · TTF",
      type: "FONT",
      cta: "Download Roboto",
      href: "https://fonts.google.com/download?family=Roboto",
      external: true,
      tone: "bg-grad-2",
    },
    {
      name: "Brand Color Palette",
      desc: "Complete palette with HEX and RGB values — drop straight into Figma, Sketch or code.",
      meta: "JSON · HEX & RGB",
      type: ".JSON",
      cta: "Download Palette",
      href: "/mantracare-colors.json",
      filename: "mantracare-colors.json",
      tone: "bg-grad-3",
    },
  ];
  return (
    <Section
      id="download" eyebrow="08 · Download Center"
      title="Everything you need, in one place."
      description="A focused library of approved MantraCare assets — built for designers, marketers, partners and enterprise teams."
    >
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <div
            key={it.name}
            className="group flex flex-col rounded-3xl border border-border/60 bg-card p-8 hover:-translate-y-1 hover:shadow-premium transition-all min-h-[280px]"
          >
            <div className="flex items-start justify-between">
              <div className={`flex size-16 items-center justify-center rounded-2xl ${it.tone} text-white shadow-premium transition-transform group-hover:scale-105`}>
                <Download className="size-7" strokeWidth={2.2} />
              </div>
              <span className="rounded-full border border-border bg-bgblue px-3 py-1 text-[10px] font-mono font-semibold tracking-wider text-primary">{it.type}</span>
            </div>
            <div className="mt-6 font-display text-2xl font-bold text-primary">{it.name}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
              <span className="text-xs text-muted-foreground font-mono">{it.meta}</span>
              <a
                href={getDownloadUrl(it.href)}
                {...(it.filename ? { download: it.filename } : {})}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:bg-primary/90 transition"
              >
                <Download className="size-3.5" /> {it.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
