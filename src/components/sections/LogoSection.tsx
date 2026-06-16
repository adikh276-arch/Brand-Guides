import { Download, X } from "lucide-react";
const logo = "https://res.cloudinary.com/dh02ythrk/image/upload/v1781582205/mantracare-brand-guides/mantracare-logo.png";
import { Section } from "@/components/brand/Section";

export function LogoSection() {
  return (
    <Section
      id="logo" eyebrow="03 · Logo"
      title="Our mark is a quiet promise of care."
      description="The MantraCare logo combines a soft heart silhouette with a human figure — a symbol of compassion enveloping the people we serve."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <LogoTile label="Primary · Horizontal" filename="MantraCare-Horizontal.png" href="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582198/mantracare-brand-guides/mantracare-logo-horizontal.png" className="bg-white">
          <img src="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582198/mantracare-brand-guides/mantracare-logo-horizontal.png" alt="" className="max-h-56 w-auto" />
        </LogoTile>
        <LogoTile label="Stacked · Full color" filename="MantraCare-Stacked.png" href="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582201/mantracare-brand-guides/mantracare-logo-stacked.png" className="bg-gradient-to-br from-bgblue to-softblue/60">
          <img src="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582201/mantracare-brand-guides/mantracare-logo-stacked.png" alt="" className="max-h-72 w-auto" />
        </LogoTile>
        <LogoTile label="Reverse · On Deep Navy #020817" filename="MantraCare-Horizontal-White.png" href="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582202/mantracare-brand-guides/mantracare-logo-white-horizontal.png" className="bg-[#020817]">
          <img src="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582202/mantracare-brand-guides/mantracare-logo-white-horizontal.png" alt="" className="max-h-56 w-auto" />
        </LogoTile>
        <LogoTile label="Brand Mark · Icon only" filename="MantraCare-Mark.png" href="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582199/mantracare-brand-guides/mantracare-logo-mark.png" className="bg-grad-1">
          <img src="https://res.cloudinary.com/dh02ythrk/image/upload/v1781582203/mantracare-brand-guides/mantracare-logo-white-mark.png" alt="" className="max-h-64 w-auto" />
        </LogoTile>
      </div>

      <div className="mt-12 grid lg:grid-cols-3 gap-6 items-stretch">
        {/* Clear space */}
        <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 hover:shadow-premium transition-all">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-action">Clear space</div>
          <h4 className="mt-2 font-display text-2xl font-bold text-primary">Protect the mark</h4>
          <p className="mt-2 text-sm text-muted-foreground">Maintain a clear space of <span className="text-foreground font-semibold">1x</span> the height of the heart icon around the mark.</p>
          <div className="mt-6 flex-1 min-h-[280px] rounded-2xl bg-bgblue p-6 relative">
            <div className="absolute inset-6 rounded-xl border-2 border-dashed border-action/60" />
            <div className="absolute inset-12 rounded-xl border-2 border-dashed border-action/30" />
            <div className="relative h-full flex items-center justify-center">
              <img src={logo} alt="" className="max-h-24 w-auto" />
            </div>
          </div>
        </div>

        {/* Minimum size */}
        <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 hover:shadow-premium transition-all">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-action">Minimum size</div>
          <h4 className="mt-2 font-display text-2xl font-bold text-primary">Keep it legible</h4>
          <p className="mt-2 text-sm text-muted-foreground">Never reproduce smaller than the sizes below across digital and print.</p>
          <div className="mt-6 flex-1 min-h-[280px] rounded-2xl bg-bgblue p-6 grid grid-cols-2 gap-4">
            {[
              { label: "Desktop", note: "≥ 64px", h: "h-12" },
              { label: "Tablet", note: "≥ 40px", h: "h-9" },
              { label: "Mobile", note: "≥ 24px", h: "h-6" },
              { label: "Print", note: "≥ 15mm", h: "h-10" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white border border-border/60 flex flex-col items-center justify-center p-3 gap-2">
                <img src={logo} alt="" className={`${s.h} w-auto`} />
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label} · {s.note}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Incorrect usage */}
        <div className="flex flex-col rounded-3xl border border-border/60 bg-card p-8 hover:shadow-premium transition-all">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-destructive">Incorrect usage</div>
          <h4 className="mt-2 font-display text-2xl font-bold text-primary">Never do this</h4>
          <p className="mt-2 text-sm text-muted-foreground">Don't distort, rotate, recolor or place the mark on cluttered surfaces.</p>
          <div className="mt-6 flex-1 min-h-[280px] grid grid-cols-2 gap-3">
            {[
              { cls: "scale-y-150", note: "Stretched", bg: "bg-bgblue" },
              { cls: "rotate-12", note: "Rotated", bg: "bg-bgblue" },
              { cls: "saturate-200 hue-rotate-90", note: "Wrong colors", bg: "bg-bgblue" },
              { cls: "opacity-30", note: "Low contrast", bg: "bg-softblue/70" },
            ].map((c, i) => (
              <div key={i} className={`relative rounded-xl ${c.bg} flex items-center justify-center overflow-hidden border border-destructive/40`}>
                <img src={logo} alt="" className={`max-h-10 w-auto ${c.cls}`} />
                <div className="absolute top-2 right-2 flex size-6 items-center justify-center rounded-full bg-destructive text-white">
                  <X className="size-3.5" strokeWidth={3} />
                </div>
                <div className="absolute bottom-1.5 left-2 text-[10px] uppercase tracking-wider text-destructive font-semibold">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <a
          href="https://res.cloudinary.com/dh02ythrk/raw/upload/v1781582200/mantracare-brand-guides/mantracare-logo-pack.zip"
          download="MantraCare-Logo-Pack.zip"
          className="inline-flex items-center gap-2 rounded-full bg-grad-3 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95 transition shadow-premium"
        >
          <Download className="size-4" /> Download Logo Pack (.ZIP)
        </a>
        {[
          { label: "PNG Assets", href: "https://res.cloudinary.com/dh02ythrk/image/upload/v1781582198/mantracare-brand-guides/mantracare-logo-horizontal.png", file: "MantraCare-Horizontal.png" },
          { label: "Transparent PNG", href: "https://res.cloudinary.com/dh02ythrk/image/upload/v1781582199/mantracare-brand-guides/mantracare-logo-mark.png", file: "MantraCare-Mark.png" },
          { label: "SVG Assets", href: "https://res.cloudinary.com/dh02ythrk/raw/upload/v1781582200/mantracare-brand-guides/mantracare-logo-pack.zip", file: "MantraCare-Logo-Pack.zip" },
        ].map((f) => (
          <a
            key={f.label}
            href={f.href}
            download={f.file}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-bgblue transition"
          >
            <Download className="size-3.5" /> {f.label}
          </a>
        ))}
      </div>
    </Section>
  );
}

function LogoTile({ label, className, filename, href = "https://res.cloudinary.com/dh02ythrk/image/upload/v1781582198/mantracare-brand-guides/mantracare-logo-horizontal.png", children }: { label: string; className: string; filename: string; href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      download={filename}
      className={`rounded-3xl border border-border/60 overflow-hidden ${className} group transition-all hover:-translate-y-1 hover:shadow-premium block cursor-pointer`}
    >
      <div className="h-96 flex items-center justify-center p-12">{children}</div>
      <div className="border-t border-border/40 bg-card/95 backdrop-blur px-5 py-3 text-xs font-medium text-muted-foreground flex items-center justify-between">
        <span>{label}</span>
        <Download className="size-3.5 opacity-60 group-hover:opacity-100" />
      </div>
    </a>
  );
}
