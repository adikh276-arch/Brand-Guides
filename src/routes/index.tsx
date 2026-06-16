import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import logo from "@/assets/mantracare-logo.png";
import { BrandSidebar, MobileTopBar } from "@/components/brand/Sidebar";
import { Section } from "@/components/brand/Section";
import { ColorSwatch } from "@/components/brand/ColorSwatch";
import {
  ArrowRight, Download, Heart, Brain, Activity, Apple, Briefcase, Cpu,
  Check, X, Sparkles, ShieldCheck, Stethoscope, Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MantraCare — Brand Guidelines" },
      { name: "description", content: "The official MantraCare brand system: logo, color, typography, photography and assets for trusted healthcare communication." },
      { property: "og:title", content: "MantraCare — Brand Guidelines" },
      { property: "og:description", content: "Building healthier lives through accessible care. The official MantraCare brand system." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Floating background shapes */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-lightblue/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-action/15 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-softblue/20 blur-3xl" />
      </div>

      <BrandSidebar />
      <MobileTopBar />

      <a
        href="#download"
        className="hidden lg:inline-flex fixed top-6 right-6 z-40 items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary hover:shadow-premium transition"
      >
        <Download className="size-3.5" />
        Brand assets
      </a>

      <main className="lg:pl-72">
        <div className="mx-auto max-w-6xl px-6 lg:px-14">
          <Hero />
          <Overview />
          <LogoSection />
          <ColorSection />
          <TypographySection />
          <PhotographySection />
          <IconographySection />
          <DownloadSection />
          <Footer />
        </div>
      </main>
    </div>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section id="hero" className="relative pt-28 lg:pt-40 pb-32 lg:pb-44 scroll-mt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-[900px] bg-mantra-gradient rounded-b-[3rem]" />

      <motion.div
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary"
      >
        <Sparkles className="size-3.5" />
        MantraCare Brand System · v3.0
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.05 }}
        className="mt-12 text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[1.02] tracking-tight max-w-5xl"
      >
        Building <span className="text-gradient">healthier lives</span><br />
        through accessible care.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
        className="mt-12 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
      >
        The official MantraCare brand system, designed to create consistent, trusted,
        and impactful healthcare experiences across every touchpoint.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
        className="mt-14 flex flex-wrap items-center gap-3"
      >
        <a href="#download" className="group inline-flex items-center gap-2 rounded-full bg-grad-3 text-white px-6 py-3.5 text-sm font-semibold hover:opacity-95 hover:-translate-y-0.5 transition shadow-premium">
          <Download className="size-4" />
          Download Brand Assets
        </a>
        <a href="#overview" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-6 py-3.5 text-sm font-semibold text-primary hover:bg-card transition">
          Explore Guidelines
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.35 }}
        className="mt-28 relative rounded-[2rem] overflow-hidden border border-border/60 bg-card ring-soft"
      >
        <div className="grid md:grid-cols-2">
          <div className="relative flex items-center justify-center px-8 py-16 md:px-12 md:py-20 bg-gradient-to-br from-bgblue via-white to-softblue/40 min-h-[420px] overflow-hidden">
            <div aria-hidden className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-action/10 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-softblue/40 blur-3xl" />
            <img src={logo} alt="MantraCare logo" className="w-full max-w-md md:max-w-lg relative z-10" />
          </div>
          <div className="p-10 md:p-12 flex flex-col justify-between gap-10 border-t md:border-t-0 md:border-l border-border/60">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-action">Wordmark</div>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">MantraCare</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A symbol of compassionate, accessible healthcare. The heart and human figure
                together represent the person at the center of every care experience.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-4 text-sm">
              <Stat label="Sections" value="9" />
              <Stat label="Colors" value="10" />
              <Stat label="Assets" value="40+" />
            </dl>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gradient">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ───────────────────────── OVERVIEW ───────────────────────── */
function Overview() {
  const values = [
    { icon: Heart, label: "Care", desc: "Every interaction is rooted in empathy." },
    { icon: ShieldCheck, label: "Accessibility", desc: "Quality healthcare for every life, every stage." },
    { icon: Users, label: "Trust", desc: "Earned through clinical credibility & transparency." },
    { icon: Cpu, label: "Innovation", desc: "Human-first AI and digital-first design." },
    { icon: Sparkles, label: "Wellbeing", desc: "A whole-person view of health and happiness." },
  ];
  return (
    <Section
      id="overview" eyebrow="02 · Brand Overview"
      title="A global healthcare brand built around the human at the center."
      description="MantraCare makes quality care more accessible — through therapy, wellness, physiotherapy, nutrition and healthcare technology."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Pillar title="Mission" body="Make quality healthcare and wellbeing universally accessible — from first message to lifelong care." />
        <Pillar title="Vision" body="A world where every person, employee and family can access compassionate, expert care without barriers." />
        <Pillar title="Promise" body="Care that meets you where you are — clinical, human, and always within reach." />
        <Pillar title="Position" body="The trusted partner for global employers, families and individuals investing in lifelong wellbeing." />
      </div>

      <div className="mt-14">
        <h3 className="text-xl font-semibold mb-5">Core values</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((v) => (
            <div key={v.label} className="group rounded-2xl border border-border/60 bg-card p-6 hover:-translate-y-1 hover:shadow-premium transition-all">
              <div className="flex size-11 items-center justify-center rounded-xl bg-grad-1 text-white shadow-premium">
                <v.icon className="size-5" />
              </div>
              <div className="mt-4 font-semibold text-primary">{v.label}</div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-border/60 bg-card p-7 hover:shadow-premium transition-all">
      <div className="text-xs font-medium uppercase tracking-[0.18em] text-action">{title}</div>
      <p className="mt-3 text-base leading-relaxed text-foreground/85">{body}</p>
    </div>
  );
}

/* ───────────────────────── LOGO ───────────────────────── */
function LogoSection() {
  return (
    <Section
      id="logo" eyebrow="03 · Logo"
      title="Our mark is a quiet promise of care."
      description="The MantraCare logo combines a soft heart silhouette with a human figure — a symbol of compassion enveloping the people we serve."
    >
      <div className="grid md:grid-cols-2 gap-6">
        <LogoTile label="Primary · Horizontal" filename="MantraCare-Horizontal.png" href="/mantracare-logo-horizontal.png" className="bg-white">
          <img src="/mantracare-logo-horizontal.png" alt="" className="max-h-56 w-auto" />
        </LogoTile>
        <LogoTile label="Stacked · Full color" filename="MantraCare-Stacked.png" href="/mantracare-logo-stacked.png" className="bg-gradient-to-br from-bgblue to-softblue/60">
          <img src="/mantracare-logo-stacked.png" alt="" className="max-h-72 w-auto" />
        </LogoTile>
        <LogoTile label="Reverse · On Deep Navy #020817" filename="MantraCare-Horizontal-White.png" href="/mantracare-logo-white-horizontal.png" className="bg-[#020817]">
          <img src="/mantracare-logo-white-horizontal.png" alt="" className="max-h-56 w-auto" />
        </LogoTile>
        <LogoTile label="Brand Mark · Icon only" filename="MantraCare-Mark.png" href="/mantracare-logo-mark.png" className="bg-grad-1">
          <img src="/mantracare-logo-white-mark.png" alt="" className="max-h-64 w-auto" />
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
          href="/mantracare-logo-pack.zip"
          download="MantraCare-Logo-Pack.zip"
          className="inline-flex items-center gap-2 rounded-full bg-grad-3 text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95 transition shadow-premium"
        >
          <Download className="size-4" /> Download Logo Pack (.ZIP)
        </a>
        {[
          { label: "PNG Assets", href: "/mantracare-logo-horizontal.png", file: "MantraCare-Horizontal.png" },
          { label: "Transparent PNG", href: "/mantracare-logo-mark.png", file: "MantraCare-Mark.png" },
          { label: "SVG Assets", href: "/mantracare-logo-pack.zip", file: "MantraCare-Logo-Pack.zip" },
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

function LogoTile({ label, className, filename, href = "/mantracare-logo-horizontal.png", children }: { label: string; className: string; filename: string; href?: string; children: React.ReactNode }) {
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

/* ───────────────────────── COLOR ───────────────────────── */
function ColorSection() {
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

/* ───────────────────────── TYPOGRAPHY ───────────────────────── */
function TypographySection() {
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

/* ───────────────────────── PHOTOGRAPHY ───────────────────────── */
function PhotographySection() {
  const dos = ["Real people, real moments", "Warm, natural lighting", "Diverse ages & backgrounds", "Honest, hopeful emotions"];
  const donts = ["Posed stock medical imagery", "Clinical white rooms", "Stethoscopes & lab coats", "Stress, fear or alarm cues"];
  const tiles = [
    { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=80&auto=format&fit=crop", label: "Online therapy" },
    { src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80&auto=format&fit=crop", label: "Workplace wellbeing" },
    { src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1400&q=80&auto=format&fit=crop", label: "Nutrition coaching" },
    { src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1400&q=80&auto=format&fit=crop", label: "Physiotherapy & movement" },
    { src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1400&q=80&auto=format&fit=crop", label: "Mindfulness & meditation" },
    { src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&q=80&auto=format&fit=crop", label: "Clinical care" },
  ];
  return (
    <Section
      id="photography" eyebrow="06 · Photography"
      title="Real humans. Genuine moments. Soft, natural light."
      description="Our imagery reflects the people we serve — diverse, calm, hopeful — never clinical or staged."
    >
      <div className="grid grid-cols-12 auto-rows-[180px] md:auto-rows-[220px] gap-4">
        {tiles.map((t, i) => {
          const span = [
            "col-span-12 md:col-span-7 row-span-2",
            "col-span-12 md:col-span-5 row-span-1",
            "col-span-6 md:col-span-5 row-span-1",
            "col-span-6 md:col-span-4 row-span-2",
            "col-span-6 md:col-span-4 row-span-2",
            "col-span-12 md:col-span-4 row-span-2",
          ][i];
          return (
            <div key={i} className={`relative overflow-hidden rounded-3xl group ${span}`}>
              <img src={t.src} alt={t.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Care moment</div>
                <div className="font-display font-semibold text-lg">{t.label}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-success/30 bg-success/5 p-6">
          <div className="flex items-center gap-2 text-success text-xs font-semibold uppercase tracking-wider">
            <Check className="size-3.5" /> Always
          </div>
          <ul className="mt-3 space-y-2 text-sm">{dos.map((d) => <li key={d} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-success" />{d}</li>)}</ul>
        </div>
        <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
          <div className="flex items-center gap-2 text-destructive text-xs font-semibold uppercase tracking-wider">
            <X className="size-3.5" /> Never
          </div>
          <ul className="mt-3 space-y-2 text-sm">{donts.map((d) => <li key={d} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-destructive" />{d}</li>)}</ul>
        </div>
      </div>
    </Section>
  );
}

/* ───────────────────────── ICONOGRAPHY ───────────────────────── */
function IconographySection() {
  const items = [
    { icon: Brain, label: "Mental Health" },
    { icon: Apple, label: "Nutrition" },
    { icon: Activity, label: "Physiotherapy" },
    { icon: Heart, label: "Wellness" },
    { icon: Cpu, label: "AI Healthcare" },
    { icon: Briefcase, label: "Employee Assistance" },
    { icon: Stethoscope, label: "Clinical Care" },
    { icon: ShieldCheck, label: "Safety & Privacy" },
  ];
  return (
    <Section
      id="icons" eyebrow="07 · Iconography"
      title="Soft, rounded, healthcare-tech."
      description="Icons are minimal, rounded, and rendered with a calm blue gradient. Always set them on a soft tinted surface."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {items.map((it) => (
          <div key={it.label} className="group rounded-3xl border border-border/60 bg-card p-6 text-center hover:-translate-y-1 hover:shadow-premium transition-all">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-grad-1 text-white shadow-premium">
              <it.icon className="size-7" strokeWidth={1.7} />
            </div>
            <div className="mt-4 text-sm font-semibold text-primary">{it.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────── DOWNLOAD ───────────────────────── */
function DownloadSection() {
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
      href: "/mantracare-logo-pack.zip",
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
                href={it.href}
                {...(it.filename ? { download: it.filename } : {})}
                {...(it.external ? { target: "_blank", rel: "noreferrer" } : {})}
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

/* ───────────────────────── FOOTER ───────────────────────── */
function Footer() {
  return (
    <footer className="py-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground border-t border-border/60 mt-12">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" className="h-6 opacity-90" />
        <span>© 2026 MantraCare. All rights reserved.</span>
      </div>
      <div>Brand Guidelines · v3.0 · Crafted with care.</div>
    </footer>
  );
}
