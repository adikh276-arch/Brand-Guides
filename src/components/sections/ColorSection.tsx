import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/brand/Section";
import { ColorSwatch } from "@/components/brand/ColorSwatch";

export function ColorSection() {
  return (
    <Section
      id="color" eyebrow="04 · Color System"
      title="A trusted, premium healthcare palette."
      description="Deep navies anchor the system with authority. Action Blue signals interaction. Soft blues create warmth, calm and space to breathe."
    >
      <div className="space-y-10">
        <ColorGroup title="Primary">
          <ColorSwatch name="Deep Navy" hex="#020817" rgb="2 · 8 · 23" textOnDark usage="Headlines, primary text, hover state." />
          <ColorSwatch name="Brand Blue" hex="#043570" rgb="4 · 53 · 112" textOnDark usage="Navigation, primary buttons, key surfaces." />
          <ColorSwatch name="Accent Blue" hex="#00C0FF" rgb="0 · 192 · 255" textOnDark usage="Links, highlights, active indicators." />
        </ColorGroup>
        <ColorGroup title="Secondary">
          <ColorSwatch name="Light Blue" hex="#A7CDFF" rgb="167 · 205 · 255" usage="Card hover, illustrations, badges." />
          <ColorSwatch name="Soft Sky Blue" hex="#D8F1FF" rgb="216 · 241 · 255" usage="Card borders, subtle surfaces, tags." />
        </ColorGroup>
        <ColorGroup title="Neutrals">
          <ColorSwatch name="Background" hex="#F3FAFF" rgb="243 · 250 · 255" usage="Primary page & section background." />
          <ColorSwatch name="Slate Gray" hex="#64748B" rgb="100 · 116 · 139" textOnDark usage="Body text, descriptions, captions." />
          <ColorSwatch name="Pure White" hex="#FFFFFF" rgb="255 · 255 · 255" usage="Cards & primary surfaces." />
        </ColorGroup>

        <div>
          <div className="mb-4 flex items-baseline justify-between">
            <h3 className="text-xl font-semibold">Brand-approved gradients</h3>
            <div className="h-px flex-1 mx-6 bg-border/60" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Gradient 01", from: "#020817", to: "#043570", css: "#020817 → #043570" },
              { name: "Gradient 02", from: "#043570", to: "#00C0FF", css: "#043570 → #00C0FF" },
              { name: "Gradient 03", from: "#D8F1FF", to: "#A7CDFF", css: "#D8F1FF → #A7CDFF" },
              { name: "Gradient 04", from: "#020817", to: "#00C0FF", css: "#020817 → #00C0FF" },
            ].map((g) => (
              <div key={g.name} className="rounded-3xl overflow-hidden border border-border/60 bg-card hover:-translate-y-1 hover:shadow-premium transition-all">
                <div className="aspect-[4/3]" style={{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }} />
                <div className="p-5">
                  <div className="font-semibold text-primary">{g.name}</div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">{g.css}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-border/60 bg-card p-7">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-action">
            <ShieldCheck className="size-4" /> Accessibility
          </div>
          <h4 className="mt-2 text-xl font-semibold">All key combinations meet WCAG 2.2 AA.</h4>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { fg: "#FFFFFF", bg: "#020817", ratio: "19.4", level: "AAA" },
              { fg: "#FFFFFF", bg: "#043570", ratio: "11.8", level: "AAA" },
              { fg: "#020817", bg: "#00C0FF", ratio: "8.9", level: "AAA" },
              { fg: "#020817", bg: "#F3FAFF", ratio: "18.7", level: "AAA" },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl p-4 ring-1 ring-border/60" style={{ background: c.bg, color: c.fg }}>
                <div className="text-xs uppercase tracking-wider opacity-80">Contrast</div>
                <div className="font-display text-3xl font-bold mt-1">{c.ratio}:1</div>
                <div className="text-xs mt-2 opacity-90">{c.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ColorGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="h-px flex-1 mx-6 bg-border/60" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{children}</div>
    </div>
  );
}
