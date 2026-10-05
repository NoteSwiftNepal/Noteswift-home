import Reveal from "./Reveal";

/** Stacked section heading. Eyebrows are rationed: at most one per three sections. */
export default function Heading({
  eyebrow,
  title,
  lead,
  center = false,
  as = "h2",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  const H = as;
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className="mb-4 text-[13px] font-medium uppercase tracking-[0.14em] text-brand">{eyebrow}</p>}
      <H className={`${as === "h1" ? "t-display" : "t-h2"} text-balance text-ink`}>{title}</H>
      {lead && <p className={`t-lead mt-5 max-w-[60ch] text-pretty ${center ? "mx-auto" : ""}`}>{lead}</p>}
    </Reveal>
  );
}
