import { Download } from "lucide-react";
import { Section } from "@/components/brand/Section";

export function TypographySection() {
  const inter = '"Inter", system-ui, sans-serif';
  const roboto = '"Roboto", system-ui, sans-serif';
  const scale = [
    { name: "H1", className: "text-6xl font-bold tracking-tight", size: "60 / 68", family: inter, label: "Inter" },
    { name: "H2", className: "text-4xl font-bold tracking-tight", size: "40 / 48", family: inter, label: "Inter" },
    { name: "H3", className: "text-2xl font-semibold tracking-tight", size: "24 / 32", family: inter, label: "Inter" },
    { name: "Body", className: "text-base leading-relaxed", size: "16 / 26", family: roboto, label: "Roboto", body: true },
    { name: "Caption", className: "text-xs uppercase tracking-[0.18em] text-muted-foreground", size: "12 / 16", family: roboto, label: "Roboto", body: true },
  ];
  return (
    <Section
      id="type" eyebrow="05 · Typography"
      title="A clear voice, built on two trusted typefaces."
      description="Inter powers headings, navigation and buttons with modern confidence. Roboto delivers calm, highly-legible body copy across every surface."
    >
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-bgblue to-white p-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-[0.18em] text-action">Display · Headings</div>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">Primary</span>
          </div>
          <div className="text-[10rem] font-bold mt-4 leading-none tracking-tight text-primary" style={{ fontFamily: inter }}>Aa</div>
          <div className="mt-8 text-3xl font-bold text-primary" style={{ fontFamily: inter }}>Inter</div>
          <p className="mt-2 text-sm text-muted-foreground" style={{ fontFamily: roboto }}>
            Used for hero headings, section titles, navigation and buttons.
          </p>
          <div className="mt-6 text-base text-foreground/80 leading-relaxed font-mono break-words">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz · 0123456789
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["400", "500", "600", "700", "800"].map((w) => (
              <span key={w} className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-primary" style={{ fontFamily: inter, fontWeight: Number(w) }}>Inter {w}</span>
            ))}
          </div>
          <a
            href="https://fonts.google.com/download?family=Inter"
            target="_blank" rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-grad-3 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95 transition shadow-premium"
          >
            <Download className="size-4" /> Download Inter Font
          </a>
        </div>
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-softblue/30 to-white p-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-[0.18em] text-action">Body · Supporting</div>
            <span className="rounded-full bg-action/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-action">Secondary</span>
          </div>
          <div className="text-[10rem] mt-4 leading-none tracking-tight text-primary" style={{ fontFamily: roboto, fontWeight: 500 }}>Aa</div>
          <div className="mt-8 text-3xl font-bold text-primary" style={{ fontFamily: roboto }}>Roboto</div>
          <p className="mt-2 text-sm text-muted-foreground" style={{ fontFamily: roboto }}>
            Used for body text, descriptions, guidelines and supporting content.
          </p>
          <div className="mt-6 text-base text-foreground/80 leading-relaxed font-mono break-words">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz · 0123456789
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["300", "400", "500", "700"].map((w) => (
              <span key={w} className="rounded-full border border-border bg-white px-3 py-1 text-xs text-primary" style={{ fontFamily: roboto, fontWeight: Number(w) }}>Roboto {w}</span>
            ))}
          </div>
          <a
            href="https://fonts.google.com/download?family=Roboto"
            target="_blank" rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-grad-1 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95 transition shadow-premium"
          >
            <Download className="size-4" /> Download Roboto Font
          </a>
        </div>
      </div>

      <div className="mt-10 rounded-3xl border border-border/60 bg-card divide-y divide-border/60 overflow-hidden">
        {scale.map((s) => (
          <div key={s.name} className="grid grid-cols-[100px_1fr_auto] items-center gap-6 p-6">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-action">{s.name}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{s.size}</div>
            </div>
            <div className={s.className} style={{ fontFamily: s.family }}>
              {s.body ? "Care that meets you where you are — clinical, human, and always within reach." : "Healthier lives, by design."}
            </div>
            <div className="hidden md:block text-xs text-muted-foreground font-mono">{s.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
