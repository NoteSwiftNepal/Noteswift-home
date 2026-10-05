import type { ReactNode } from "react";
import Reveal from "./Reveal";

/** Closing call-to-action panel: brand-tinted glass over a soft aura. */
export default function CtaBand({ title, lead, children }: { title: string; lead?: string; children: ReactNode }) {
  return (
    <section className="container-site mt-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] border border-line bg-surface px-6 py-16 text-center md:px-12 md:py-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_120%,color-mix(in_oklab,var(--brand)_28%,transparent),transparent_70%)]" />
        <div className="relative">
          <h2 className="t-h2 mx-auto max-w-2xl text-balance">{title}</h2>
          {lead && <p className="t-lead mx-auto mt-4 max-w-xl">{lead}</p>}
          <div className="mt-9 flex flex-wrap justify-center gap-3">{children}</div>
        </div>
      </Reveal>
    </section>
  );
}
