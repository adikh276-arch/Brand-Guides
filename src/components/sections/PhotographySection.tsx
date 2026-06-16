import { Check, X } from "lucide-react";
import { Section } from "@/components/brand/Section";

export function PhotographySection() {
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
