import { Brain, Apple, Activity, Heart, Cpu, Briefcase, Stethoscope, ShieldCheck } from "lucide-react";
import { Section } from "@/components/brand/Section";

export function IconographySection() {
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
