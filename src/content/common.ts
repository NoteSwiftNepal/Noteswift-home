// Shared UI copy: navigation, footer, settings panel, global CTAs.
const en = {
  skip: "Skip to content",
  homeLabel: "Note Swift home",
  tagline: "The smarter way to learn.",
  orgSummary: "A learning platform for students, parents, teachers and schools across Nepal.",
  cta: {
    start: "Start learning",
    app: "Get the app",
    contact: "Talk to us",
    schools: "Partner with us",
  },
  nav: [
    {
      label: "Learn",
      items: [
        { label: "Why Note Swift", href: "/learn", desc: "How learning works on Note Swift" },
        { label: "Features", href: "/features", desc: "Every tool in the student app" },
        { label: "SikAI", href: "/ai", desc: "Your AI learning assistant" },
        { label: "Courses", href: "/courses", desc: "SEE, Class 11 and Class 12" },
      ],
    },
    {
      label: "Schools",
      items: [
        { label: "For schools", href: "/schools", desc: "Tools for leaders and teachers" },
        { label: "School partnership", href: "/school-partnership", desc: "How we work with schools" },
        { label: "Events", href: "/events", desc: "Workshops and programs" },
      ],
    },
    {
      label: "Resources",
      items: [
        { label: "Study resources", href: "/resources", desc: "Notes, PYQs and guides" },
        { label: "Blog", href: "/blog", desc: "Study tips and exam guides" },
        { label: "Help center", href: "/help", desc: "Answers to common questions" },
      ],
    },
    {
      label: "Company",
      items: [
        { label: "About us", href: "/about", desc: "Why we started Note Swift" },
        { label: "Team", href: "/about/team", desc: "How we are organised" },
        { label: "Impact", href: "/impact", desc: "Programs beyond the app" },
        { label: "Careers", href: "/careers", desc: "Work with us" },
        { label: "Contact", href: "/contact", desc: "Reach the right team" },
      ],
    },
  ],
  footer: {
    columns: [
      { title: "Product", links: [["Features", "/features"], ["SikAI", "/ai"], ["Courses", "/courses"], ["Why Note Swift", "/learn"]] },
      { title: "Schools", links: [["For schools", "/schools"], ["Partnership", "/school-partnership"], ["Events", "/events"]] },
      { title: "Resources", links: [["Study resources", "/resources"], ["Blog", "/blog"], ["Help center", "/help"]] },
      { title: "Company", links: [["About us", "/about"], ["Team", "/about/team"], ["Impact", "/impact"], ["Careers", "/careers"], ["Contact", "/contact"]] },
    ],
    portals: "Sign in",
    portalLinks: { student: "Student", teacher: "Teacher", school: "School", parent: "Parent" },
    legal: [["Privacy policy", "/privacy"], ["Terms of use", "/terms"], ["Refund policy", "/refund-policy"]],
    rights: "All rights reserved.",
    madeIn: "Made in Nepal.",
  },
  menu: { open: "Open menu", close: "Close menu" },
  lang: { label: "Language", switchTo: "नेपाली", switchToLabel: "Switch to Nepali" },
  prefs: {
    open: "Display and accessibility settings",
    title: "Display",
    theme: "Theme",
    themes: { system: "System", light: "Light", dark: "Dark" },
    text: "Text size",
    texts: ["Default", "Large", "Larger"],
    contrast: "High contrast",
    motion: "Reduce motion",
    links: "Underline links",
    reset: "Reset",
  },
  breadcrumbHome: "Home",
  readMore: "Read more",
};

export type CommonCopy = typeof en;

const ne: CommonCopy = {
  skip: "मुख्य सामग्रीमा जानुहोस्",
  homeLabel: "Note Swift गृहपृष्ठ",
  tagline: "सिक्ने अझ स्मार्ट तरिका।",
  orgSummary: "नेपालभरका विद्यार्थी, अभिभावक, शिक्षक र विद्यालयका लागि एउटै सिकाइ प्लेटफर्म।",
  cta: {
    start: "सिक्न सुरु गर्नुहोस्",
    app: "एप डाउनलोड गर्नुहोस्",
    contact: "हामीसँग कुरा गर्नुहोस्",
    schools: "साझेदार बन्नुहोस्",
  },
  nav: [
    {
      label: "सिकाइ",
      items: [
        { label: "किन Note Swift", href: "/learn", desc: "Note Swift मा सिकाइ कसरी हुन्छ" },
        { label: "सुविधाहरू", href: "/features", desc: "विद्यार्थी एपका सबै उपकरण" },
        { label: "SikAI", href: "/ai", desc: "तपाईंको AI सिकाइ सहायक" },
        { label: "कोर्सहरू", href: "/courses", desc: "SEE, कक्षा ११ र कक्षा १२" },
      ],
    },
    {
      label: "विद्यालय",
      items: [
        { label: "विद्यालयका लागि", href: "/schools", desc: "प्रमुख र शिक्षकका लागि उपकरण" },
        { label: "विद्यालय साझेदारी", href: "/school-partnership", desc: "हामी विद्यालयसँग कसरी काम गर्छौं" },
        { label: "कार्यक्रमहरू", href: "/events", desc: "कार्यशाला र कार्यक्रम" },
      ],
    },
    {
      label: "स्रोतहरू",
      items: [
        { label: "अध्ययन सामग्री", href: "/resources", desc: "नोट्स, PYQ र गाइड" },
        { label: "ब्लग", href: "/blog", desc: "अध्ययन सुझाव र परीक्षा गाइड" },
        { label: "सहायता केन्द्र", href: "/help", desc: "सामान्य प्रश्नका उत्तर" },
      ],
    },
    {
      label: "कम्पनी",
      items: [
        { label: "हाम्रो बारेमा", href: "/about", desc: "Note Swift किन सुरु भयो" },
        { label: "टिम", href: "/about/team", desc: "हामी कसरी संगठित छौं" },
        { label: "प्रभाव", href: "/impact", desc: "एपभन्दा बाहिरका कार्यक्रम" },
        { label: "करियर", href: "/careers", desc: "हामीसँग काम गर्नुहोस्" },
        { label: "सम्पर्क", href: "/contact", desc: "सही टिमसम्म पुग्नुहोस्" },
      ],
    },
  ],
  footer: {
    columns: [
      { title: "उत्पादन", links: [["सुविधाहरू", "/features"], ["SikAI", "/ai"], ["कोर्सहरू", "/courses"], ["किन Note Swift", "/learn"]] },
      { title: "विद्यालय", links: [["विद्यालयका लागि", "/schools"], ["साझेदारी", "/school-partnership"], ["कार्यक्रमहरू", "/events"]] },
      { title: "स्रोतहरू", links: [["अध्ययन सामग्री", "/resources"], ["ब्लग", "/blog"], ["सहायता केन्द्र", "/help"]] },
      { title: "कम्पनी", links: [["हाम्रो बारेमा", "/about"], ["टिम", "/about/team"], ["प्रभाव", "/impact"], ["करियर", "/careers"], ["सम्पर्क", "/contact"]] },
    ],
    portals: "लग इन",
    portalLinks: { student: "विद्यार्थी", teacher: "शिक्षक", school: "विद्यालय", parent: "अभिभावक" },
    legal: [["गोपनीयता नीति", "/privacy"], ["प्रयोगका सर्तहरू", "/terms"], ["फिर्ता नीति", "/refund-policy"]],
    rights: "सर्वाधिकार सुरक्षित।",
    madeIn: "नेपालमा निर्मित।",
  },
  menu: { open: "मेनु खोल्नुहोस्", close: "मेनु बन्द गर्नुहोस्" },
  lang: { label: "भाषा", switchTo: "English", switchToLabel: "Switch to English" },
  prefs: {
    open: "प्रदर्शन र पहुँच सेटिङ",
    title: "प्रदर्शन",
    theme: "थिम",
    themes: { system: "सिस्टम", light: "उज्यालो", dark: "अँध्यारो" },
    text: "अक्षरको आकार",
    texts: ["सामान्य", "ठूलो", "अझ ठूलो"],
    contrast: "उच्च कन्ट्रास्ट",
    motion: "एनिमेसन घटाउनुहोस्",
    links: "लिङ्कमा रेखाङ्कन",
    reset: "रिसेट",
  },
  breadcrumbHome: "गृहपृष्ठ",
  readMore: "थप पढ्नुहोस्",
};

export const common = { en, ne };
