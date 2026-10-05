import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "secondary" | "ghost" | "light";

const styles: Record<Variant, string> = {
  primary: "bg-brand text-on-brand hover:bg-brand-strong shadow-[0_8px_24px_-10px_var(--brand)]",
  secondary: "bg-surface text-ink border border-line hover:border-ink/30",
  ghost: "text-ink hover:bg-surface-2",
  light: "bg-white text-[#0b0d12] hover:bg-white/90",
};

/** Pill link-button. External hrefs open in a new tab with an up-right arrow. */
export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "sm" | "md";
  arrow?: boolean;
  className?: string;
}) {
  const external = /^https?:|^mailto:|^tel:/.test(href);
  const cls = `press group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium ${
    size === "sm" ? "h-9 px-4 text-sm" : "h-12 px-6 text-[15px]"
  } ${styles[variant]} ${className}`;
  const Icon = external ? ArrowUpRight : ArrowRight;
  const icon = arrow && <Icon aria-hidden size={size === "sm" ? 14 : 16} weight="bold" className="transition-transform duration-300 group-hover:translate-x-0.5" />;

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
      {icon}
    </Link>
  );
}
