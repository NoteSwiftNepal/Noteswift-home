/**
 * Faithful recreations of the Note Swift student app (noteswift-student, Expo + NativeWind).
 * Layout, colours, radii and labels follow the app source; course data is sample content
 * because the app loads it from the API. The app ships a light UI only, so these stay light.
 */
import Image from "next/image";
import type { ReactNode } from "react";
import {
  House, BookOpen, Exam, ChatsCircle, MagnifyingGlass, Bell, User, Circle, Stack, ClockCounterClockwise,
  Question, FilePdf, SquaresFour, DownloadSimple, BookmarkSimple, UsersThree, TrendUp, ArrowLeft, CaretRight,
  BookOpenText, Clock, Television, ListChecks, NotePencil, PaperPlaneRight, ChatCircleDots, Play,
  ArrowCounterClockwise, ArrowClockwise, CornersOut, ThumbsUp, Paperclip, CaretDown, ClipboardText,
  CalendarCheck, CaretLeft, Books,
} from "@phosphor-icons/react/dist/ssr";

const BLUE = "#2563EB";

/* ---------- shared app chrome ---------- */

function TabBar({ active }: { active: "home" | "learn" | "test" | "ask" }) {
  const tabs = [
    { k: "home", label: "Home", Icon: House },
    { k: "learn", label: "Learn", Icon: BookOpen },
    { k: "test", label: "Test", Icon: Exam },
    { k: "ask", label: "Ask", Icon: ChatsCircle },
  ] as const;
  return (
    <div className="mt-auto flex h-[83px] shrink-0 items-start justify-around border-t border-[#E5E7EB] bg-white/90 px-4 pt-2 backdrop-blur">
      {tabs.map(({ k, label, Icon }) => (
        <span key={k} className="flex w-16 flex-col items-center gap-1" style={{ color: k === active ? BLUE : "#434242" }}>
          <Icon size={26} weight={k === active ? "fill" : "regular"} />
          <span className="text-[12px] font-medium">{label}</span>
        </span>
      ))}
    </div>
  );
}

function SearchHeader({ placeholder, back = true }: { placeholder: string; back?: boolean }) {
  return (
    <div className="shrink-0 bg-white pt-[54px]">
      <div className="flex h-[60px] items-center gap-3 border-b border-[#F3F4F6] px-4">
        {back && <ArrowLeft size={24} color="#1A1A2E" />}
        <div className="flex flex-1 items-center gap-2 rounded-full bg-[#F3F4F6] px-4 py-2.5">
          <MagnifyingGlass size={20} color="#9CA3AF" />
          <span className="text-[14px] text-[#9CA3AF]">{placeholder}</span>
        </div>
        <span className="flex size-10 items-center justify-center rounded-full bg-[#F3F4F6]">
          <Bell size={22} color="#1A1A2E" />
        </span>
      </div>
    </div>
  );
}

function SectionHead({ title, action = "View All" }: { title: string; action?: string }) {
  return (
    <div className="mb-4 mt-6 flex items-center justify-between px-4">
      <span className="text-[20px] font-bold text-[#111827]">{title}</span>
      <span className="text-[14px] font-medium text-[#0079D8]">{action}</span>
    </div>
  );
}

const Body = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <div className={`min-h-0 flex-1 overflow-hidden ${className}`}>{children}</div>
);

/* ---------- Home (app/(tabs)/Home/HomePage.tsx) ---------- */

export function HomeScreen() {
  const quick = [
    ["My Batches", Stack], ["My History", ClockCounterClockwise], ["My Doubts", Question],
    ["PDF Bank", FilePdf], ["Dashboard", SquaresFour], ["Downloads", DownloadSimple],
    ["Bookmarks", BookmarkSimple], ["Parent Link", UsersThree], ["My Progress", TrendUp],
  ] as const;
  return (
    <div className="flex h-full flex-col bg-[#F9FAFB]">
      <div className="shrink-0 bg-white pt-[54px] shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#F3F4F6] px-4 py-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#E5E7EB]">
            <User size={22} color="#6B7280" weight="fill" />
          </span>
          <div className="flex flex-1 items-center gap-2 rounded-full bg-[#F3F4F6] px-4 py-2.5">
            <MagnifyingGlass size={20} color="#9CA3AF" />
            <span className="text-[14px] text-[#9CA3AF]">Search courses, topics...</span>
          </div>
          <span className="relative flex size-10 items-center justify-center rounded-full bg-[#F3F4F6]">
            <Bell size={22} color="#1A1A2E" weight="fill" />
            <span className="absolute -right-0.5 -top-0.5 flex size-[18px] items-center justify-center rounded-full bg-[#EF4444] text-[10px] font-bold text-white">3</span>
          </span>
        </div>
      </div>
      <Body className="pt-4">
        <div className="mx-4 aspect-[1280/630] overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#1E40AF,#2563EB_55%,#60A5FA)] p-5 text-white">
          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold tracking-wide">LIVE</span>
          <p className="mt-4 text-[22px] font-extrabold leading-tight">Join Live Classes</p>
          <p className="mt-1 text-[13px] text-white/85">Interactive sessions with top educators</p>
        </div>
        <div className="mt-2 flex justify-center gap-1.5">
          <span className="h-2 w-4 rounded-full bg-[#2563EB]" />
          <span className="size-2 rounded-full bg-[#D1D5DB]" />
          <span className="size-2 rounded-full bg-[#D1D5DB]" />
          <span className="size-2 rounded-full bg-[#D1D5DB]" />
        </div>

        <SectionHead title="Today's Classes" />
        <div className="mx-4 rounded-2xl border border-[#E5E7EB] bg-white p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[14px] font-bold text-[#111827]">Rotational Dynamics</p>
              <p className="text-[11px] text-[#6B7280]">+2 Science (Class 12)</p>
            </div>
            <span className="flex items-center gap-1 text-[12px] font-semibold text-[#EF4444]">
              <Circle size={10} weight="fill" /> Live Now
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-[#E5E7EB] pt-3">
            <span className="text-[12px] text-[#6B7280]">By:- Bishal Thapa</span>
            <span className="rounded-full bg-[#EF4444] px-4 py-2 text-[12px] font-semibold text-white">Join Now</span>
          </div>
        </div>

        <p className="mb-3 mt-6 px-4 text-[20px] font-bold text-[#111827]">Quick Access</p>
        <div className="grid grid-cols-3 gap-x-3 gap-y-4 px-4">
          {quick.map(([label, Icon]) => (
            <span key={label} className="flex flex-col items-center rounded-2xl bg-white px-2 py-4 shadow-sm">
              <Icon size={28} color="#898989" />
              <span className="mt-2 text-[10px] font-semibold text-[#374151]">{label}</span>
            </span>
          ))}
        </div>
      </Body>
      <TabBar active="home" />
    </div>
  );
}

/* ---------- Learn (app/(tabs)/Learn/LearnPage.tsx) ---------- */

export function LearnScreen() {
  const subjects: [string, number][] = [
    ["Physics", 14], ["Chemistry", 12], ["Biology", 16], ["Mathematics", 18], ["English", 10], ["Nepali", 9], ["Computer Science", 11],
  ];
  const pills = [
    ["Subjects", BookOpen, true], ["Live Classes", Television, false], ["Saved Notes", BookmarkSimple, false],
  ] as const;
  return (
    <div className="flex h-full flex-col bg-[#F9FAFB]">
      <SearchHeader placeholder="Search courses..." />
      <Body>
        <div className="flex gap-2 px-4 pt-3">
          {pills.map(([label, Icon, on]) => (
            <span key={label} className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[12px] font-semibold ${on ? "bg-[#2563EB] text-white shadow-[0_4px_10px_-2px_rgb(37_99_235/0.45)]" : "border border-[#E5E7EB] bg-white text-[#4B5563]"}`}>
              <Icon size={16} color={on ? "#fff" : "#6B7280"} /> {label}
            </span>
          ))}
        </div>
        <div className="px-4 pt-2">
          {subjects.map(([name, n]) => (
            <div key={name} className="my-2 flex items-center justify-between rounded-3xl border border-[#E5E7EB] bg-white p-5">
              <div>
                <p className="mb-3 text-[16px] font-semibold text-[#111827]">{name}</p>
                <div className="flex gap-2">
                  <span className="flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-2 py-1 text-[12px] font-medium text-[#374151]">
                    <BookOpenText size={13} color={BLUE} /> {n} Lessons
                  </span>
                  <span className="flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] px-2 py-1 text-[12px] font-medium text-[#374151]">
                    <Clock size={13} color={BLUE} /> ~1 Year
                  </span>
                </div>
              </div>
              <CaretRight size={24} color="#9CA3AF" />
            </div>
          ))}
        </div>
      </Body>
      <TabBar active="learn" />
    </div>
  );
}

/* ---------- Test (app/(tabs)/Test/TestPage.tsx) ---------- */

export function TestScreen() {
  const subjects: [string, number, number][] = [["Physics", 8, 5], ["Chemistry", 6, 3], ["Mathematics", 9, 4]];
  return (
    <div className="flex h-full flex-col bg-[#F9FAFB]">
      <SearchHeader placeholder="Search tests..." />
      <Body className="px-6">
        <div className="mt-6 flex items-center rounded-2xl border border-[#F3F4F6] bg-white p-4">
          {[["Total Tests", "24", "#111827"], ["Completed", "12", "#3B82F6"], ["Avg Score", "78%", "#111827"]].map(([l, v, c], i) => (
            <div key={l} className="flex flex-1 items-center">
              {i > 0 && <span className="mr-3 h-10 w-px bg-[#E5E7EB]" />}
              <div className="flex-1 text-center">
                <p className="text-[14px] text-[#6B7280]">{l}</p>
                <p className="text-[24px] font-bold" style={{ color: c }}>{v}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-3 mt-6 flex items-center justify-between">
          <span className="text-[18px] font-bold">My Subjects</span>
          <span className="text-[16px] font-medium text-[#3B82F6]">View All</span>
        </div>
        <div className="-mr-6 flex gap-3 overflow-hidden">
          {subjects.map(([name, total, done]) => (
            <div key={name} className="w-56 shrink-0 overflow-hidden rounded-2xl border border-[#F3F4F6] bg-white">
              <div className="flex h-28 items-center justify-center bg-[#DBEAFE]">
                <Books size={48} color="#3B82F6" />
              </div>
              <div className="p-3">
                <p className="text-[14px] font-bold">{name}</p>
                <p className="mt-0.5 text-[14px] text-[#4B5563]">
                  {total} Tests <span className="font-medium text-[#3B82F6]">{done} Done</span>
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#F3F4F6]">
                  <div className="h-full rounded-full bg-[#3B82F6]" style={{ width: `${(done / total) * 100}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mb-3 mt-6 text-[18px] font-bold">Your Tests</p>
        <div className="flex rounded-xl bg-[#F3F4F6] p-1 text-[13px]">
          <span className="flex-1 rounded-lg bg-white py-2 text-center font-bold text-[#2563EB] shadow-sm">All: 24</span>
          <span className="flex-1 py-2 text-center text-[#4B5563]">Completed: 12</span>
          <span className="flex-1 py-2 text-center text-[#4B5563]">Pending: 12</span>
        </div>
        <div className="mt-3 space-y-3">
          {[
            { t: "Electrostatics Unit Test", Icon: ListChecks, kind: "MCQ", meta: "30 min • 25 Qs", s: <span className="font-semibold text-[#3B82F6]">Score: 18/25</span> },
            { t: "Organic Chemistry Basics", Icon: ListChecks, kind: "MCQ", meta: "20 min • 15 Qs", s: <span className="text-[#3B82F6]">Continue ›</span> },
            { t: "Thermodynamics Long Questions", Icon: NotePencil, kind: "Subjective", meta: "45 min • 6 Qs", s: <span className="flex items-center gap-1 text-[#B45309]"><Clock size={14} color="#D97706" /> Opens Oct 12, 10:00 AM</span> },
          ].map(({ t, Icon, kind, meta, s }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-[#F3F4F6] bg-white p-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#3B82F6]/10">
                <Icon size={24} color="#3B82F6" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[16px] font-bold">{t}</p>
                <p className="mt-1 flex items-center gap-2 text-[13px] text-[#6B7280]">
                  <span className="rounded-md bg-[#3B82F6]/10 px-2 py-0.5 font-medium text-[#3B82F6]">{kind}</span> {meta}
                </p>
                <p className="mt-1.5 text-[13px]">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </Body>
      <TabBar active="test" />
    </div>
  );
}

/* ---------- SikAI chat (app/Ask/AIChatBot.tsx) ---------- */

function SikaiAvatar({ size }: { size: number }) {
  return (
    <span className="flex items-center justify-center overflow-hidden rounded-full border border-[#BFDBFE] bg-[#EFF6FF]" style={{ width: size, height: size }}>
      <Image src="/brand/sikai.png" alt="" width={size} height={size} />
    </span>
  );
}

export function SikaiChatScreen() {
  return (
    <div className="flex h-full flex-col bg-[#F8FAFC]">
      <div className="shrink-0 border-b border-[#F1F5F9] bg-white pt-[54px]">
        <div className="flex items-center gap-3 px-4 py-3">
          <ArrowLeft size={22} color="#1E293B" />
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-2 text-[16px] font-bold text-[#0F172A]">
              SikAI
              <span className="flex items-center gap-1 rounded-full border border-[#A7F3D0] bg-[#ECFDF5] px-2 py-0.5 text-[10px] font-semibold text-[#047857]">
                <span className="size-1.5 rounded-full bg-[#10B981]" /> Online
              </span>
            </p>
            <p className="text-[12px] text-[#64748B]">+2 Science (Class 12)</p>
          </div>
          <SikaiAvatar size={40} />
          <ClockCounterClockwise size={22} color="#475569" />
          <ChatCircleDots size={22} color={BLUE} />
        </div>
        <div className="flex gap-2 px-4 pb-3">
          {[["Physics", BookOpen], ["Electrostatics", BookmarkSimple]].map(([l, Icon]) => {
            const I = Icon as typeof BookOpen;
            return (
              <span key={l as string} className="flex items-center gap-1.5 rounded-full border border-[#3B82F6] bg-[#EFF6FF] px-3 py-1.5 text-[12px] font-semibold text-[#3462AE]">
                <I size={13} /> {l as string}
              </span>
            );
          })}
        </div>
      </div>
      <Body className="space-y-4 px-4 pt-4">
        <div>
          <p className="mb-1.5 flex items-center gap-2 text-[12px] font-bold text-[#334155]"><SikaiAvatar size={28} /> SikAI</p>
          <div className="max-w-[88%] rounded-[18px] rounded-tl-[4px] border border-[#F1F5F9] bg-white px-4 py-3.5 text-[13.5px] leading-relaxed text-[#1E293B]">
            Hello! I&apos;m SikAI, your AI Learning Assistant. Ask me anything from Electrostatics.
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-[18px] rounded-tr-[4px] bg-[#2563EB] px-4 py-3 text-[15px] leading-snug text-white">
            Why is the electric field inside a conductor zero?
          </div>
        </div>
        <div>
          <p className="mb-1.5 flex items-center gap-2 text-[12px] font-bold text-[#334155]"><SikaiAvatar size={28} /> SikAI</p>
          <div className="max-w-[88%] rounded-[18px] rounded-tl-[4px] border border-[#F1F5F9] bg-white px-4 py-3.5 text-[13.5px] leading-relaxed text-[#1E293B]">
            In electrostatic equilibrium, free electrons move until the forces on them cancel.
            <ul className="mt-2 space-y-1.5">
              <li><span className="mr-1.5 text-[#2563EB]">•</span>Any field inside would push the free electrons.</li>
              <li><span className="mr-1.5 text-[#2563EB]">•</span>They rearrange on the surface until the inside field is cancelled.</li>
              <li><span className="mr-1.5 text-[#2563EB]">•</span>So E = 0 inside, and all charge sits on the surface.</li>
            </ul>
          </div>
          <p className="mt-1 text-[10px] text-[#94A3B8]">9:41 AM</p>
        </div>
        <div className="flex gap-1 pl-1">
          <span className="size-1.5 rounded-full bg-[#94A3B8]" />
          <span className="size-1.5 rounded-full bg-[#94A3B8]/70" />
          <span className="size-1.5 rounded-full bg-[#94A3B8]/40" />
        </div>
      </Body>
      <div className="flex shrink-0 items-center gap-2 border-t border-[#F1F5F9] bg-white px-4 pb-8 pt-3">
        <span className="flex-1 rounded-[22px] border border-[#93C5FD] bg-[#F8FAFC] px-4 py-2.5 text-[14px] text-[#94A3B8]">Ask a question about Electrostatics...</span>
        <span className="flex size-11 items-center justify-center rounded-full bg-[#2563EB]">
          <PaperPlaneRight size={20} color="#fff" weight="fill" />
        </span>
      </div>
    </div>
  );
}

/* SikAI welcome (AIChatBot.tsx, first screen) */
export function SikaiWelcomeScreen() {
  return (
    <div className="flex h-full flex-col bg-[#3462AE] px-5 pt-[64px] text-white">
      <div className="flex items-center justify-between">
        <span className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/15"><ArrowLeft size={20} /></span>
        <span className="flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-[13px] font-bold"><ClockCounterClockwise size={16} /> History</span>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Image src="/brand/sikai-hero-white.png" alt="" width={145} height={108} />
      </div>
      <div className="flex flex-col items-center pb-16">
        <p className="text-[15px] font-medium">How can I help you?</p>
        <span className="mt-4 w-full max-w-[340px] rounded-full bg-white py-3.5 text-center text-[15px] font-bold text-[#3462AE] shadow-lg">Start a new chat</span>
      </div>
    </div>
  );
}

/* ---------- Lesson / video (app/Chapter/ChapterDetail/ChapterDetailCard.tsx) ---------- */

export function LessonScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="shrink-0 bg-black pt-[54px]">
        <div className="relative aspect-video overflow-hidden bg-[radial-gradient(120%_90%_at_30%_30%,#1f2a3a,#0b0f16)]">
          <div className="absolute inset-0 flex items-center justify-center font-mono text-[34px] tracking-tight text-white/85">τ = r × F</div>
          <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent px-4 pb-6 pt-3 text-[14px] font-semibold text-white">Torque and angular momentum</div>
          <div className="absolute inset-0 flex items-center justify-center gap-7">
            <span className="flex size-11 items-center justify-center rounded-full bg-black/55"><ArrowCounterClockwise size={22} color="#3B82F6" weight="bold" /></span>
            <span className="flex size-16 items-center justify-center rounded-full bg-black/55"><Play size={30} color="#3B82F6" weight="fill" /></span>
            <span className="flex size-11 items-center justify-center rounded-full bg-black/55"><ArrowClockwise size={22} color="#3B82F6" weight="bold" /></span>
          </div>
          <div className="absolute inset-x-0 bottom-0 px-4 pb-2">
            <div className="mb-2 flex items-center justify-between text-[12px] text-white">
              <span>04:12 / 18:30</span>
              <CornersOut size={18} />
            </div>
            <div className="relative h-1 rounded-full bg-white/30">
              <div className="h-full w-[23%] rounded-full bg-[#3B82F6]" />
              <span className="absolute left-[23%] top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3B82F6]" />
            </div>
          </div>
        </div>
      </div>
      <Body className="px-4 pt-4">
        <div className="flex items-start justify-between">
          <p className="text-[20px] font-semibold leading-snug text-[#111827]">Rotational Dynamics: Torque and Angular Momentum</p>
          <CaretDown size={24} color="#6B7280" className="mt-1 shrink-0" />
        </div>
        <p className="mt-1 text-[14px] text-[#6B7280]">2 days ago</p>
        <div className="mt-4 flex items-center gap-3">
          <span className="flex size-14 items-center justify-center rounded-full bg-[#DBEAFE] text-[18px] font-semibold text-[#1D4ED8]">BT</span>
          <div>
            <p className="text-[16px] font-semibold">Bishal Thapa</p>
            <p className="text-[14px] text-[#6B7280]">Instructor</p>
          </div>
        </div>
        <div className="mt-4 flex gap-3 overflow-hidden">
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#3B82F6] px-3 py-2 text-[14px] font-medium text-white"><ThumbsUp size={14} weight="fill" /> Like 24</span>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#E5E7EB] px-3 py-2 text-[14px] font-medium text-[#374151]"><ChatsCircle size={14} /> Ask</span>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#E5E7EB] px-3 py-2 text-[14px] font-medium text-[#374151]"><DownloadSimple size={14} /> Download</span>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#E5E7EB] px-3 py-2 text-[14px] font-medium text-[#374151]"><Paperclip size={14} /> Attachments</span>
        </div>
        <div className="mt-5 rounded-lg bg-[#F9FAFB] p-4">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-bold">Comments <span className="text-[14px] font-normal text-[#6B7280]">18</span></p>
            <CaretDown size={18} color="#6B7280" />
          </div>
          <p className="mt-3 flex items-start gap-2 text-[14px] text-[#374151]">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#3B82F6] text-[11px] font-semibold text-white">A</span>
            <span><b className="font-semibold">Aayusha</b> The worked example at 12:40 finally made the sign convention clear.</span>
          </p>
        </div>
        <p className="mb-3 mt-6 text-[16px] font-bold">Up next</p>
        {["Moment of inertia", "Conservation of angular momentum"].map((t, i) => (
          <div key={t} className="mb-2 flex items-center gap-3 rounded-xl border border-[#F3F4F6] p-3">
            <span className="flex h-12 w-20 items-center justify-center rounded-lg bg-[#0b0f16]"><Play size={18} color="#fff" weight="fill" /></span>
            <div>
              <p className="text-[14px] font-semibold">{t}</p>
              <p className="text-[12px] text-[#6B7280]">{i ? "21:05" : "16:48"}</p>
            </div>
          </div>
        ))}
      </Body>
    </div>
  );
}

/* ---------- Progress (app/Progress/[courseId].tsx + SubjectStatsCard) ---------- */

export function ProgressScreen() {
  const rows = [
    { s: "Physics", p: 72, tests: "3 attempts · 81% avg", asg: "2 submitted · 88 avg score", att: "9/10 classes · 90%" },
    { s: "Chemistry", p: 64, tests: "4 attempts · 74% avg", asg: "3 submitted · 79 avg score", att: "8/10 classes · 80%" },
    { s: "Mathematics", p: 58, tests: "2 attempts · 69% avg", asg: "1 submitted · 72 avg score", att: "9/10 classes · 90%" },
  ];
  return (
    <div className="flex h-full flex-col bg-[#FAFAFA]">
      <div className="shrink-0 border-b border-[#E5E7EB] bg-white pt-[54px]">
        <div className="flex h-[52px] items-center justify-between px-4">
          <CaretLeft size={24} color="#111827" />
          <span className="text-[18px] font-semibold">Progress</span>
          <Bell size={22} color="#111827" />
        </div>
      </div>
      <Body className="p-4">
        {rows.map((r) => (
          <div key={r.s} className="mb-4 rounded-3xl border border-[#E5E7EB] bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-[18px] font-semibold">{r.s}</p>
              <p className="text-[14px] font-medium text-[#374151]">{r.p}%</p>
            </div>
            <div className="mb-4 mt-2 h-2 overflow-hidden rounded-full bg-[#E5E7EB]">
              <div className="h-full rounded-full bg-[#3B82F6]" style={{ width: `${r.p}%` }} />
            </div>
            {[
              { Icon: ListChecks, bg: "#EFF6FF", c: "#3B82F6", l: "Tests", v: r.tests },
              { Icon: ClipboardText, bg: "#FAF5FF", c: "#9333EA", l: "Assignments", v: r.asg },
              { Icon: CalendarCheck, bg: "#F0FDF4", c: "#16A34A", l: "Attendance", v: r.att },
            ].map(({ Icon, bg, c, l, v }) => (
              <div key={l} className="mt-3 flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl" style={{ background: bg }}>
                  <Icon size={18} color={c} />
                </span>
                <div>
                  <p className="text-[12px] text-[#6B7280]">{l}</p>
                  <p className="text-[14px] font-semibold">{v}</p>
                </div>
              </div>
            ))}
            <p className="mt-4 text-[12px] text-[#9CA3AF]">Last activity: 3 Oct 2026</p>
          </div>
        ))}
      </Body>
    </div>
  );
}


/* ---------- Google Play search result for "noteswift" ---------- */

const PLAY_GREEN = "#01875F";

/** Real app screens shrunk into Play Store screenshot tiles (390x844 -> 112x242). */
function Shot({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-[242px] w-[112px] shrink-0 overflow-hidden rounded-[10px] border border-[#E5E7EB]">
      <div className="absolute left-0 top-0 h-[844px] w-[390px] origin-top-left" style={{ transform: "scale(0.287)" }}>{children}</div>
    </div>
  );
}

export function PlayStoreScreen() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="shrink-0 pt-[54px]">
        <div className="mx-4 flex h-[52px] items-center gap-3 rounded-full bg-[#F1F3F4] px-4">
          <ArrowLeft size={22} color="#202124" />
          <span className="flex-1 text-[16px] text-[#202124]">noteswift</span>
          <MagnifyingGlass size={22} color="#5F6368" />
        </div>
      </div>
      <Body className="px-5 pt-6">
        <div className="flex gap-4">
          <Image src="/brand/icon-192.png" alt="" width={76} height={76} className="size-[76px] rounded-[18px] border border-[#E5E7EB]" />
          <div className="min-w-0 pt-1">
            <p className="text-[20px] font-medium leading-tight text-[#202124]">Note Swift</p>
            <p className="mt-1 text-[14px] font-medium" style={{ color: PLAY_GREEN }}>NoteSwift Private Limited</p>
            <p className="mt-0.5 text-[13px] text-[#5F6368]">Education</p>
          </div>
        </div>
        <span className="mt-5 flex h-[44px] items-center justify-center rounded-full text-[15px] font-medium text-white" style={{ background: PLAY_GREEN }}>
          Install
        </span>
        <div className="mt-5 flex gap-2">
          <Shot><HomeScreen /></Shot>
          <Shot><LearnScreen /></Shot>
          <Shot><SikaiChatScreen /></Shot>
        </div>
        <p className="mt-5 text-[14px] leading-relaxed text-[#5F6368]">Lessons, notes, tests, live classes and SikAI for SEE, Class 11 and Class 12.</p>
      </Body>
    </div>
  );
}
