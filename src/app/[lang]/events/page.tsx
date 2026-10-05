import { Robot, UsersFour, VideoCamera, Exam, CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { events } from "@/content/events";
import PageHero from "@/components/ui/PageHero";
import Heading from "@/components/ui/Heading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CtaBand from "@/components/ui/CtaBand";

const icons = { robotics: Robot, roundtable: UsersFour, webinar: VideoCamera, prep: Exam } as const;

export async function generateMetadata({ params }: PageProps<"/[lang]/events">) {
  const lang = (await params).lang as Locale;
  return pageMetadata({ locale: lang, path: "/events", ...events[lang].meta });
}

export default async function EventsPage({ params }: PageProps<"/[lang]/events">) {
  const lang = (await params).lang as Locale;
  const t = events[lang];
  const [first, ...rest] = t.programs.items;
  const mail = `mailto:${site.email.contact}?subject=${encodeURIComponent(t.host.subject)}`;

  const Tba = () => (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[12px] text-muted">
      <CalendarBlank aria-hidden size={13} /> {t.programs.tba}
    </span>
  );

  return (
    <>
      <PageHero lang={lang} crumbs={[{ name: t.crumb, path: "/events" }]} title={t.hero.title} lead={t.hero.lead} />

      <section className="container-site">
        <Heading title={t.programs.title} lead={t.programs.lead} />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal className="flex flex-col justify-between gap-12 rounded-[1.25rem] bg-brand p-8 text-on-brand md:row-span-3 md:p-10">
            <Robot aria-hidden size={40} />
            <div>
              <p className="text-[13px] opacity-80">{first.audience}</p>
              <h3 className="t-h3 mt-2">{first.name}</h3>
              <p className="mt-3 max-w-[44ch] opacity-90">{first.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 rounded-full border border-current/40 px-3 py-1 text-[12px]">
                <CalendarBlank aria-hidden size={13} /> {t.programs.tba}
              </span>
            </div>
          </Reveal>
          {rest.map((p, i) => {
            const Icon = icons[p.key as keyof typeof icons];
            return (
              <Reveal key={p.key} delay={(i + 1) * 80} className="rounded-[1.25rem] border border-line bg-surface p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon aria-hidden size={22} />
                  </span>
                  <Tba />
                </div>
                <p className="mt-5 text-[13px] text-muted">{p.audience}</p>
                <h3 className="t-h3 mt-1">{p.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.body}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand title={t.host.title} lead={t.host.lead}>
        <Button href={mail}>{t.host.cta}</Button>
        <Button href={localePath(lang, "/contact")} variant="secondary" arrow={false}>{t.host.contact}</Button>
      </CtaBand>
    </>
  );
}
