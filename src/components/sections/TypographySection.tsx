import { Download } from "lucide-react";

export function TypographySection() {
  const scale = [
    { name: "Display Large", size: "72px", lh: "72px", tracking: "-2%", w: "800", font: "Inter" },
    { name: "Display Medium", size: "60px", lh: "60px", tracking: "-2%", w: "700", font: "Inter" },
    { name: "Display Small", size: "48px", lh: "48px", tracking: "-2%", w: "700", font: "Inter" },
    { name: "Heading 1", size: "36px", lh: "40px", tracking: "-1%", w: "600", font: "Inter" },
    { name: "Heading 2", size: "30px", lh: "36px", tracking: "-1%", w: "600", font: "Inter" },
    { name: "Heading 3", size: "24px", lh: "32px", tracking: "-1%", w: "600", font: "Inter" },
    { name: "Body Large", size: "18px", lh: "28px", tracking: "0%", w: "400", font: "Roboto" },
    { name: "Body Base", size: "16px", lh: "24px", tracking: "0%", w: "400", font: "Roboto" },
    { name: "Body Small", size: "14px", lh: "20px", tracking: "0%", w: "400", font: "Roboto" },
    { name: "Caption", size: "12px", lh: "16px", tracking: "0%", w: "500", font: "Roboto" },
  ];

  const inter = "'Inter', sans-serif";
  const roboto = "'Roboto', sans-serif";

  return (
    <div id="typography" className="scroll-mt-32">
      <div className="mb-10">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-action mb-3">04 · Typography</div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-primary">Words that comfort.</h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Our typography system is built on Inter for structural headings and Roboto for highly readable supporting text. Both are available via Google Fonts.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-bgblue to-white p-10 flex flex-col">
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-[0.18em] text-action">Headings · Display</div>
            <span className="rounded-full bg-action/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-action">Primary</span>
          </div>
          <div className="text-[10rem] mt-4 leading-none tracking-tight text-primary" style={{ fontFamily: inter, fontWeight: 700 }}>Aa</div>
          <div className="mt-8 text-3xl font-bold text-primary" style={{ fontFamily: inter }}>Inter</div>
          <p className="mt-2 text-sm text-muted-foreground" style={{ fontFamily: inter }}>
            Used exclusively for titles, headings, and large display statements.
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
            href={`${import.meta.env.BASE_URL}Inter-Font.zip`}
            download="Inter-Font.zip"
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
            href={`${import.meta.env.BASE_URL}Roboto-Font.zip`}
            download="Roboto-Font.zip"
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
            <div 
              className="text-primary truncate" 
              style={{ 
                fontFamily: s.font === "Inter" ? inter : roboto, 
                fontSize: s.size, 
                lineHeight: s.lh, 
                letterSpacing: s.tracking,
                fontWeight: Number(s.w) 
              }}
            >
              The quick brown fox jumps over the lazy dog
            </div>
            <div className="hidden sm:block text-right font-mono text-xs text-muted-foreground">
              {s.font} {s.w} <span className="opacity-40 ml-2">LH {s.lh}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
