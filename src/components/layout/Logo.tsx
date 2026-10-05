import Image from "next/image";

/** Real Note Swift mark (from the app icon set) + wordmark set in Geist. */
export default function Logo({ inverted = false, className = "" }: { inverted?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image src="/brand/mark.png" alt="" width={34} height={22} priority className={inverted ? "hidden" : "h-[22px] w-auto dark:hidden"} />
      <Image src="/brand/mark-dark.png" alt="" width={34} height={22} priority className={inverted ? "h-[22px] w-auto" : "hidden h-[22px] w-auto dark:block"} />
      <span className={`text-[1.05rem] font-semibold tracking-[-0.02em] ${inverted ? "text-white" : "text-ink"}`}>Note Swift</span>
    </span>
  );
}
