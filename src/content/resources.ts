import type { Locale } from "@/lib/i18n";

export type ResourceKey = "notes" | "important" | "pyq" | "grid" | "formula" | "guide";

const en = {
  meta: {
    title: "Study resources",
    description: "Chapter notes, important questions, past year questions, specification grids, formula sheets and study guides for SEE, Class 11 and Class 12 students in Nepal.",
  },
  crumb: "Resources",
  hero: {
    title: "Everything you need to revise, in one place.",
    lead: "Notes, question banks and exam guides for SEE, Class 11 and Class 12. Open them in the Note Swift student app, matched to your class and subject.",
  },
  materials: {
    title: "Study materials in the app",
    lead: "Pick a type of material, then choose your class and subject inside the student app.",
    items: [
      { key: "notes", title: "Chapter notes", body: "Clear notes for every chapter, written to match the CDC and NEB textbooks. Read before the lesson or revise after it." },
      { key: "important", title: "Important questions", body: "Questions that come up often, grouped by chapter, so you know where to spend revision time." },
      { key: "pyq", title: "Past year questions", body: "Previous exam papers to practise under time limits and see how questions are asked." },
      { key: "grid", title: "Specification grids", body: "Marks and question types per chapter, so you can plan your revision around the exam." },
      { key: "formula", title: "Formula sheets", body: "Formulas and key facts on one page for Mathematics, Science and Accountancy." },
      { key: "guide", title: "Study guides", body: "Step-by-step plans for revising a subject and getting ready for the exam." },
    ] as { key: ResourceKey; title: string; body: string }[],
    open: "Open in the app",
  },
  guides: {
    title: "Student guides",
    lead: "Short reads from the academic team on how to study and prepare. Each topic opens our newest article on it.",
    topics: [
      { category: "Study techniques", title: "Study techniques", body: "Active recall, spaced revision and using AI to learn, not to skip the thinking." },
      { category: "SEE preparation", title: "SEE preparation", body: "How to plan the months before SEE and read the specification grid." },
      { category: "NEB preparation", title: "NEB preparation", body: "A revision approach for Class 12 board exams." },
      { category: "Career guidance", title: "Career guidance", body: "Choosing a stream after SEE, with science and management in view." },
    ],
  },
  latest: { title: "Latest from the blog", all: "All posts" },
  cta: { title: "Open your notes and questions.", lead: "Sign in to the student app and pick your class." },
};

const ne: typeof en = {
  meta: {
    title: "अध्ययन सामग्री",
    description: "नेपालका SEE, कक्षा ११ र कक्षा १२ का विद्यार्थीका लागि अध्याय नोट्स, महत्त्वपूर्ण प्रश्न, पुराना वर्षका प्रश्न, विशिष्टीकरण तालिका, सूत्र पाना र अध्ययन गाइड।",
  },
  crumb: "अध्ययन सामग्री",
  hero: {
    title: "दोहोर्याउन चाहिने सबै कुरा, एकै ठाउँमा।",
    lead: "SEE, कक्षा ११ र कक्षा १२ का नोट्स, प्रश्न बैंक र परीक्षा गाइड। आफ्नो कक्षा र विषय अनुसार Note Swift विद्यार्थी एपमा खोल्नुहोस्।",
  },
  materials: {
    title: "एपमा उपलब्ध अध्ययन सामग्री",
    lead: "सामग्रीको प्रकार छान्नुहोस्, अनि विद्यार्थी एपभित्र आफ्नो कक्षा र विषय रोज्नुहोस्।",
    items: [
      { key: "notes", title: "अध्याय नोट्स", body: "CDC र NEB पाठ्यपुस्तकसँग मिल्ने हरेक अध्यायका स्पष्ट नोट्स। पाठअघि पढ्नुहोस् वा पाठपछि दोहोर्याउनुहोस्।" },
      { key: "important", title: "महत्त्वपूर्ण प्रश्न", body: "बारम्बार सोधिने प्रश्न अध्याय अनुसार समूहबद्ध छन्, ताकि दोहोर्याउने समय कहाँ खर्चिने थाहा होस्।" },
      { key: "pyq", title: "पुराना वर्षका प्रश्न", body: "समय तोकेर अभ्यास गर्न र प्रश्न कसरी सोधिन्छ हेर्न अघिल्ला परीक्षाका प्रश्नपत्र।" },
      { key: "grid", title: "विशिष्टीकरण तालिका", body: "हरेक अध्यायको अंकभार र प्रश्नको प्रकार, ताकि परीक्षा अनुसार दोहोर्याउने योजना बनाउन सकियोस्।" },
      { key: "formula", title: "सूत्र पाना", body: "गणित, विज्ञान र लेखाशास्त्रका सूत्र र मुख्य तथ्य एकै पानामा।" },
      { key: "guide", title: "अध्ययन गाइड", body: "कुनै विषय दोहोर्याउन र परीक्षाको तयारी गर्न चरणबद्ध योजना।" },
    ],
    open: "एपमा खोल्नुहोस्",
  },
  guides: {
    title: "विद्यार्थी गाइड",
    lead: "कसरी पढ्ने र तयारी गर्ने भन्नेबारे शैक्षिक टिमका छोटा लेख। हरेक विषयले त्यसको सबैभन्दा नयाँ लेख खोल्छ।",
    topics: [
      { category: "अध्ययन विधि", title: "अध्ययन विधि", body: "सक्रिय स्मरण, अन्तरालमा दोहोर्याउने र सोच्ने काम नछोडी AI बाट सिक्ने तरिका।" },
      { category: "SEE तयारी", title: "SEE तयारी", body: "SEE अघिका महिना कसरी योजना बनाउने र विशिष्टीकरण तालिका कसरी पढ्ने।" },
      { category: "NEB तयारी", title: "NEB तयारी", body: "कक्षा १२ को बोर्ड परीक्षाका लागि दोहोर्याउने तरिका।" },
      { category: "करियर मार्गदर्शन", title: "करियर मार्गदर्शन", body: "SEE पछि विज्ञान र व्यवस्थापनलाई ध्यानमा राखेर विषय छनोट।" },
    ],
  },
  latest: { title: "ब्लगका पछिल्ला लेख", all: "सबै लेख" },
  cta: { title: "आफ्ना नोट्स र प्रश्न खोल्नुहोस्।", lead: "विद्यार्थी एपमा साइन इन गरेर आफ्नो कक्षा छान्नुहोस्।" },
};

export const resources: Record<Locale, typeof en> = { en, ne };
