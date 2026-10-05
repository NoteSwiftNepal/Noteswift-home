import {
  PlayCircle, Notebook, TreeStructure, Question, ClockCounterClockwise, ListChecks, Exam, Broadcast, Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";

const icons = {
  lessons: PlayCircle,
  notes: Notebook,
  mindmaps: TreeStructure,
  important: Question,
  pyq: ClockCounterClockwise,
  mcq: ListChecks,
  tests: Exam,
  live: Broadcast,
  sikai: Sparkle,
} as const;

type Item = { key: string; title: string; body: string };

/** What every course includes. "tiles" is a glass panel of icon tiles, "rows" is a two-column ruled list. */
export default function Includes({
  title,
  lead,
  items,
  variant,
}: {
  title: string;
  lead: string;
  items: Item[];
  variant: "tiles" | "rows";
}) {
  const icon = (k: string, size = 22) => {
    const Icon = icons[k as keyof typeof icons] ?? Sparkle;
    return <Icon aria-hidden size={size} className="text-brand" />;
  };

  if (variant === "rows") {
    return (
      <section className="container-site mt-32">
        <Heading title={title} lead={lead} />
        <ul className="mt-12 grid gap-x-16 border-t border-line md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal as="li" key={it.key} delay={(i % 2) * 70} className="flex items-start gap-4 border-b border-line py-5">
              <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft">{icon(it.key, 20)}</span>
              <span>
                <span className="block font-semibold">{it.title}</span>
                <span className="mt-0.5 block text-[15px] text-muted">{it.body}</span>
              </span>
            </Reveal>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section className="container-site mt-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-8 md:p-14">
        <div aria-hidden className="brand-aura pointer-events-none absolute -right-24 -top-24 h-[120%] w-2/3 blur-3xl" />
        <div className="relative">
          <h2 className="t-h2 max-w-2xl text-balance">{title}</h2>
          <p className="t-lead mt-4 max-w-[54ch]">{lead}</p>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <Reveal as="li" key={it.key} delay={(i % 3) * 70} className="glass rounded-2xl p-5">
                {icon(it.key)}
                <p className="mt-4 font-semibold">{it.title}</p>
                <p className="mt-1 text-[14px] text-muted">{it.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
