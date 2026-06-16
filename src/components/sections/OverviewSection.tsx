import { Heart, ShieldCheck, Users, Cpu, Sparkles } from "lucide-react";
import { Section } from "@/components/brand/Section";

export function OverviewSection() {
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
