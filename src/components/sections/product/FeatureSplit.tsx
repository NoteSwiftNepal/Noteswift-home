import type { ReactNode } from "react";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Phone from "@/components/phone/Phone";

/** Heading + checklist beside a real app screen. `flip` puts the phone on the left at lg. */
export default function FeatureSplit({
  title,
  lead,
  items,
  phoneLabel,
  screen,
  flip = false,
  footer,
}: {
  title: string;
  lead: string;
  items: string[];
  phoneLabel: string;
  screen: ReactNode;
  flip?: boolean;
  footer?: ReactNode;
}) {
  return (
    <section className="container-site mt-32">
      <div className={`grid items-center gap-14 lg:gap-24 ${flip ? "lg:grid-cols-[auto_1fr]" : "lg:grid-cols-[1fr_auto]"}`}>
        <div className={flip ? "lg:order-2" : ""}>
          <Heading title={title} lead={lead} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal as="li" key={it} delay={i * 60} className="flex items-start gap-3 rounded-2xl border border-line bg-surface px-4 py-3.5 text-[15px] font-medium">
                <CheckCircle aria-hidden size={18} weight="fill" className="mt-0.5 shrink-0 text-brand" />
                {it}
              </Reveal>
            ))}
          </ul>
          {footer && <Reveal className="mt-8">{footer}</Reveal>}
        </div>
        <Reveal className={`relative mx-auto ${flip ? "lg:order-1" : ""}`}>
          <div aria-hidden className="brand-aura absolute -inset-12 -z-10 blur-2xl" />
          <Phone label={phoneLabel} scale={0.64}>
            {screen}
          </Phone>
        </Reveal>
      </div>
    </section>
  );
}
