import Reveal from "@/components/ui/Reveal";
import CountUp from "./CountUp";

// Platform totals from the production database on 2026-10-07 (299 videos, 1,685 resources, 397 students, 28 schools),
// shown as round milestones. Update by hand. resources = course notes + DPPs + published resources + tests + mind maps.
const stats = { videos: 290, resources: 1600, students: 500, schools: 28 };
type Key = keyof typeof stats;
type Copy = { title: string; sub: string; items: Record<Key, string> };

export default function StatsBand({ t, locale }: { t: Copy; locale: string }) {
  const rows = Object.keys(stats) as Key[];

  return (
    <section className="container-site mt-28">
      <Reveal className="stat-rule relative max-w-3xl pl-6">
        <h2 className="t-h2 text-balance">
          {t.title} <span className="text-muted">{t.sub}</span>
        </h2>
      </Reveal>
      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
        {rows.map((k, i) => {
          return (
            <Reveal key={k} delay={i * 80} className="flex flex-col-reverse border-l border-line pl-5 md:pl-7">
              <dt className="mt-3 text-[15px] text-muted md:text-[16px]">{t.items[k]}</dt>
              <dd className="text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-none tracking-[-0.045em] text-ink tabular-nums">
                <CountUp value={stats[k]} locale={locale} suffix="+" />
              </dd>
            </Reveal>
          );
        })}
      </dl>
    </section>
  );
}
