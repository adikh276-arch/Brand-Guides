import { motion } from "motion/react";
const logo = "https://res.cloudinary.com/dh02ythrk/image/upload/v1781582205/mantracare-brand-guides/mantracare-logo.png";
import { Sparkles, Download, ArrowRight } from "lucide-react";

export function HeroSection() {
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
