import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function ColorSwatch({
  name,
  hex,
  rgb,
  usage,
  textOnDark,
}: {
  name: string;
  hex: string;
  rgb: string;
  usage?: string;
  textOnDark?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
      <div
        className="relative aspect-[4/3] flex items-end p-5"
        style={{ background: hex }}
      >
        <button
          onClick={onCopy}
          className={`absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium backdrop-blur transition ${
            textOnDark
              ? "bg-white/15 text-white hover:bg-white/25"
              : "bg-black/10 text-black/80 hover:bg-black/20"
          }`}
        >
          {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
          {copied ? "Copied" : "Copy"}
        </button>
        <div className={textOnDark ? "text-white" : "text-black/85"}>
          <div className="font-display text-2xl font-semibold leading-none">{name}</div>
          <div className="mt-1 text-xs opacity-80 font-mono tracking-wide">{hex}</div>
        </div>
      </div>
      <div className="p-5 space-y-1.5">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">RGB</span>
          <span className="font-mono text-foreground/80">{rgb}</span>
        </div>
        {usage && (
          <p className="text-xs text-muted-foreground pt-1">{usage}</p>
        )}
      </div>
    </div>
  );
}