"use client";

import { useId, useRef, useState } from "react";
import type { ContactCopy } from "@/content/contact";

type Errors = { name?: string; email?: string; message?: string };

const field = "mt-2 block w-full rounded-xl border bg-bg px-4 py-3 text-[16px] text-ink placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

/**
 * There is no backend yet, so submitting validates on the client and composes a mailto: link.
 * Replace the mailto step with a POST when a form endpoint exists.
 */
export default function ContactForm({ t, supportEmail, contactEmail }: { t: ContactCopy["form"]; supportEmail: string; contactEmail: string }) {
  const id = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const email = String(f.get("email") ?? "").trim();
    const topicIndex = Number(f.get("topic") ?? 0);
    const message = String(f.get("message") ?? "").trim();
    const next: Errors = {};
    if (!name) next.name = t.errors.name;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t.errors.email;
    if (message.length < 10) next.message = t.errors.message;
    setErrors(next);
    setSent(false);
    if (Object.keys(next).length) {
      const first = (["name", "email", "message"] as const).find((k) => next[k]);
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const to = topicIndex === 2 || topicIndex === 3 ? contactEmail : supportEmail;
    const body = `${message}\n\n${name}\n${email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(t.topics[topicIndex] ?? t.topics[0])}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const err = (k: keyof Errors) => (errors[k] ? `${id}-${k}-err` : undefined);
  const help = (k: string) => `${id}-${k}-help`;
  const describe = (k: keyof Errors, hasHelp: boolean) => [hasHelp ? help(k) : null, err(k)].filter(Boolean).join(" ") || undefined;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor={`${id}-name`} className="text-[15px] font-medium text-ink">{t.name}</label>
        <input id={`${id}-name`} name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} aria-describedby={describe("name", false)} className={`${field} ${errors.name ? "border-[#DC2626] dark:border-[#F87171]" : "border-line"}`} />
        {errors.name && <p id={err("name")} className="mt-2 text-sm text-[#DC2626] dark:text-[#F87171]">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="text-[15px] font-medium text-ink">{t.email}</label>
        <input id={`${id}-email`} name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={describe("email", true)} className={`${field} ${errors.email ? "border-[#DC2626] dark:border-[#F87171]" : "border-line"}`} />
        <p id={help("email")} className="mt-2 text-sm text-muted">{t.emailHelp}</p>
        {errors.email && <p id={err("email")} className="text-sm text-[#DC2626] dark:text-[#F87171]">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor={`${id}-topic`} className="text-[15px] font-medium text-ink">{t.topic}</label>
        <select id={`${id}-topic`} name="topic" defaultValue="0" className={`${field} border-line`}>
          {t.topics.map((x, i) => <option key={x} value={i}>{x}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="text-[15px] font-medium text-ink">{t.message}</label>
        <textarea id={`${id}-message`} name="message" rows={5} required aria-invalid={!!errors.message} aria-describedby={describe("message", true)} className={`${field} resize-y ${errors.message ? "border-[#DC2626] dark:border-[#F87171]" : "border-line"}`} />
        <p id={help("message")} className="mt-2 text-sm text-muted">{t.messageHelp}</p>
        {errors.message && <p id={err("message")} className="text-sm text-[#DC2626] dark:text-[#F87171]">{errors.message}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="press inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-[15px] font-medium text-on-brand hover:bg-brand-strong">
          {t.submit}
        </button>
      </div>
      <div role="status" aria-live="polite" className="text-sm text-ink-soft">
        {sent && (
          <p>
            {t.sent} <a className="font-medium text-brand underline underline-offset-2" href={`mailto:${supportEmail}`}>{supportEmail}</a>
          </p>
        )}
        {!sent && Object.keys(errors).length > 0 && <p className="text-[#DC2626] dark:text-[#F87171]">{t.errorSummary}</p>}
      </div>
    </form>
  );
}
