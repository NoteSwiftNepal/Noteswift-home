// The student web app (login, courses, checkout). Set NEXT_PUBLIC_STUDENT_APP_URL
// in .env (see .env.example); e.g. http://localhost:9002 to test the Enroll
// buttons against a local web app. Read at build time.
const studentAppUrl = (process.env.NEXT_PUBLIC_STUDENT_APP_URL || "https://student.noteswift.com.np").replace(/\/+$/, "");

// Real Note Swift details, taken from the student, admin and teacher apps.
export const site = {
  name: "Note Swift",
  legalName: "NoteSwift Private Limited",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://noteswift.com.np",
  appUrl: studentAppUrl,
  portals: {
    student: studentAppUrl,
    teacher: "https://teacher.noteswift.com.np",
    school: "https://school.noteswift.com.np",
    parent: "https://parent.noteswift.com.np",
  },
  playStore: "https://play.google.com/store/apps/details?id=com.noteswift",
  email: {
    support: "support@noteswift.com",
    contact: "contact@noteswift.com",
  },
  phone: "+977 976-7464242",
  phoneHref: "tel:+9779767464242",
  whatsapp: "https://wa.me/9779767464242",
  github: "https://github.com/NoteSwiftNepal",
  brandColor: "#0078D6",
} as const;
