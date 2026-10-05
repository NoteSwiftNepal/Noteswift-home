import { Plus } from "@phosphor-icons/react/dist/ssr";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";

/** Accordion FAQ built on native details/summary, so it needs no client JS. */
export default function Faq({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <section className="container-site mt-32">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Heading title={title} />
        <div className="divide-y divide-line border-y border-line">
          {items.map((it, i) => (
            <Reveal key={it.q} delay={i * 50}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-semibold [&::-webkit-details-marker]:hidden">
                  <span className="text-pretty">{it.q}</span>
                  <Plus aria-hidden size={18} className="mt-1 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45" />
                </summary>
                <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted">{it.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
