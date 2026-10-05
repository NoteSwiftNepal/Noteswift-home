import type { ReactNode } from "react";
import { CellSignalFull, WifiHigh, BatteryFull } from "@phosphor-icons/react/dist/ssr";

/**
 * iPhone-proportioned frame. Screens are authored at real device points (390 x 844)
 * so the student-app spec values map 1:1, then scaled down with --s.
 */
export default function Phone({
  children,
  scale = 0.72,
  label,
  className = "",
  statusDark = false,
}: {
  children: ReactNode;
  scale?: number | string;
  label: string;
  className?: string;
  statusDark?: boolean;
}) {
  return (
    <figure
      role="img"
      aria-label={label}
      className={`relative shrink-0 ${className}`}
      style={{ width: `calc(414px * ${scale})`, height: `calc(868px * ${scale})` }}
    >
      <div
        className="absolute left-0 top-0 origin-top-left rounded-[60px] bg-[#0d0f13] p-3 shadow-[0_50px_100px_-30px_rgb(10_20_40/0.45),0_0_0_1px_rgb(255_255_255/0.06)_inset]"
        style={{ width: 414, height: 868, transform: `scale(${scale})` }}
      >
        <div aria-hidden className="pointer-events-none absolute inset-[3px] rounded-[57px] ring-1 ring-white/10" />
        <div
          className="relative h-[844px] w-[390px] overflow-hidden rounded-[48px] bg-white text-[#111827]"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", Roboto, "Segoe UI", system-ui, sans-serif' }}
        >
          <div className={`absolute inset-x-0 top-0 z-20 flex h-[54px] items-center justify-between px-8 pt-1 text-[16px] font-semibold ${statusDark ? "text-white" : "text-[#0b0d12]"}`}>
            <span>9:41</span>
            <span className="flex items-center gap-1.5">
              <CellSignalFull size={17} weight="fill" />
              <WifiHigh size={17} weight="bold" />
              <BatteryFull size={24} weight="fill" />
            </span>
          </div>
          <div aria-hidden className="absolute left-1/2 top-[11px] z-30 h-[34px] w-[122px] -translate-x-1/2 rounded-full bg-[#0d0f13]" />
          <div className="absolute inset-0 flex flex-col">{children}</div>
          <div aria-hidden className="absolute bottom-[8px] left-1/2 z-30 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-[#0b0d12]/85" />
        </div>
      </div>
    </figure>
  );
}
