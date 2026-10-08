import type { Locale } from "@/lib/i18n";

// Course catalogue shown on the marketing site. Enrolment happens in the student app.
export type Course = {
  slug: string;
  label: string;
  short: string;
  exam: "SEE" | "NEB";
  syllabus: string;
  title: string;
  summary: string;
  tracks: { key: string; name: string; desc: string; subjects: string[] }[];
};

const en: Course[] = [
  {
    slug: "see",
    label: "Class 10",
    short: "SEE",
    exam: "SEE",
    syllabus: "CDC syllabus",
    title: "Get ready for SEE, one chapter at a time.",
    summary: "Complete SEE preparation for Nepali and English medium students, with lessons, notes, practice and tests for every compulsory and optional subject.",
    tracks: [
      { key: "english-medium", name: "English medium", desc: "Full course in English medium, aligned with the CDC textbook.", subjects: ["English", "Nepali", "Mathematics", "Science", "Social Studies", "Optional Mathematics", "Computer Science"] },
      { key: "nepali-medium", name: "Nepali medium", desc: "Full course in Nepali medium, aligned with the CDC textbook.", subjects: ["English", "Nepali", "Mathematics", "Science", "Social Studies", "Optional Mathematics", "Computer Science"] },
    ],
  },
  {
    slug: "class-11",
    label: "Class 11",
    short: "+2",
    exam: "NEB",
    syllabus: "NEB curriculum",
    title: "Start +2 with a strong foundation.",
    summary: "Science and Management courses for Class 11, built around the NEB curriculum.",
    tracks: [
      { key: "science", name: "Science", desc: "Concept-first lessons and daily numericals for Physics, Chemistry, Biology and Mathematics.", subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Nepali", "Computer Science"] },
      { key: "management", name: "Management", desc: "Clear explanations of accounts, economics and business with solved examples.", subjects: ["Accountancy", "Economics", "Business Studies", "Business Mathematics", "English", "Nepali", "Computer Science"] },
    ],
  },
  {
    slug: "class-12",
    label: "Class 12",
    short: "+2",
    exam: "NEB",
    syllabus: "NEB curriculum",
    title: "Finish +2 prepared for the NEB board exam.",
    summary: "Science and Management courses for Class 12 with NEB-focused revision, model questions and full mock exams.",
    tracks: [
      { key: "science", name: "Science", desc: "Board-focused preparation with PYQs, model questions and full mock tests.", subjects: ["Physics", "Chemistry", "Biology", "Mathematics", "English", "Nepali", "Computer Science"] },
      { key: "management", name: "Management", desc: "Exam-ready practice for accounts, economics and business subjects.", subjects: ["Accountancy", "Economics", "Business Studies", "Business Mathematics", "English", "Nepali", "Computer Science"] },
    ],
  },
];

const ne: Course[] = [
  {
    slug: "see",
    label: "कक्षा १०",
    short: "SEE",
    exam: "SEE",
    syllabus: "CDC पाठ्यक्रम",
    title: "SEE को तयारी, एक एक अध्याय गर्दै।",
    summary: "नेपाली र अंग्रेजी माध्यमका विद्यार्थीका लागि SEE को पूर्ण तयारी: हरेक अनिवार्य र ऐच्छिक विषयका पाठ, नोट्स, अभ्यास र परीक्षा।",
    tracks: [
      { key: "english-medium", name: "अंग्रेजी माध्यम", desc: "CDC पाठ्यपुस्तक अनुसार अंग्रेजी माध्यमको पूर्ण कोर्स।", subjects: ["अंग्रेजी", "नेपाली", "गणित", "विज्ञान", "सामाजिक अध्ययन", "ऐच्छिक गणित", "कम्प्युटर विज्ञान"] },
      { key: "nepali-medium", name: "नेपाली माध्यम", desc: "CDC पाठ्यपुस्तक अनुसार नेपाली माध्यमको पूर्ण कोर्स।", subjects: ["अंग्रेजी", "नेपाली", "गणित", "विज्ञान", "सामाजिक अध्ययन", "ऐच्छिक गणित", "कम्प्युटर विज्ञान"] },
    ],
  },
  {
    slug: "class-11",
    label: "कक्षा ११",
    short: "+2",
    exam: "NEB",
    syllabus: "NEB पाठ्यक्रम",
    title: "+2 को सुरुआत बलियो आधारसहित।",
    summary: "NEB पाठ्यक्रममा आधारित कक्षा ११ का विज्ञान र व्यवस्थापन कोर्सहरू।",
    tracks: [
      { key: "science", name: "विज्ञान", desc: "भौतिक, रसायन, जीव विज्ञान र गणितका अवधारणामा आधारित पाठ र दैनिक संख्यात्मक अभ्यास।", subjects: ["भौतिक विज्ञान", "रसायन विज्ञान", "जीव विज्ञान", "गणित", "अंग्रेजी", "नेपाली", "कम्प्युटर विज्ञान"] },
      { key: "management", name: "व्यवस्थापन", desc: "हल गरिएका उदाहरणसहित लेखा, अर्थशास्त्र र व्यवसायको स्पष्ट व्याख्या।", subjects: ["लेखा", "अर्थशास्त्र", "व्यवसाय अध्ययन", "व्यावसायिक गणित", "अंग्रेजी", "नेपाली", "कम्प्युटर विज्ञान"] },
    ],
  },
  {
    slug: "class-12",
    label: "कक्षा १२",
    short: "+2",
    exam: "NEB",
    syllabus: "NEB पाठ्यक्रम",
    title: "NEB बोर्ड परीक्षाको पूर्ण तयारीसहित +2 पूरा गर्नुहोस्।",
    summary: "NEB केन्द्रित पुनरावृत्ति, नमुना प्रश्न र पूर्ण मक परीक्षासहित कक्षा १२ का विज्ञान र व्यवस्थापन कोर्सहरू।",
    tracks: [
      { key: "science", name: "विज्ञान", desc: "PYQ, नमुना प्रश्न र पूर्ण मक टेस्टसहित बोर्ड परीक्षा केन्द्रित तयारी।", subjects: ["भौतिक विज्ञान", "रसायन विज्ञान", "जीव विज्ञान", "गणित", "अंग्रेजी", "नेपाली", "कम्प्युटर विज्ञान"] },
      { key: "management", name: "व्यवस्थापन", desc: "लेखा, अर्थशास्त्र र व्यवसायिक विषयका लागि परीक्षा केन्द्रित अभ्यास।", subjects: ["लेखा", "अर्थशास्त्र", "व्यवसाय अध्ययन", "व्यावसायिक गणित", "अंग्रेजी", "नेपाली", "कम्प्युटर विज्ञान"] },
    ],
  },
];

export const courses: Record<Locale, Course[]> = { en, ne };
export const courseSlugs = en.map((c) => c.slug);
export const trackParams = en.flatMap((c) => c.tracks.map((t) => ({ slug: c.slug, track: t.key })));

// NPR fees, matching the published courses in the student app (api /student/courses).
export const prices: Record<string, number> = {
  "see/english-medium": 3999,
  "see/nepali-medium": 3999,
  "class-11/science": 4999,
  "class-11/management": 4999,
  "class-12/science": 4999,
  "class-12/management": 4999,
};
