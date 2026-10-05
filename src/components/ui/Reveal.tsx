import type { ElementType, ReactNode } from "react";

/** Fades content in as it scrolls into view (CSS only). `delay` staggers siblings, in ms-like steps of 80. */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  ...rest
}: { as?: ElementType; delay?: number; className?: string; children: ReactNode } & Record<string, unknown>) {
  return (
    <Tag className={`reveal ${className}`} style={{ "--i": Math.round(delay / 80) } as React.CSSProperties} {...rest}>
      {children}
    </Tag>
  );
}
