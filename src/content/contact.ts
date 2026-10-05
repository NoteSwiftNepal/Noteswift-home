const en = {
  meta: {
    title: "Contact",
    description: "Contact Note Swift. Reach student support, our schools team or partnerships by email, phone or WhatsApp.",
  },
  crumb: "Contact",
  hero: {
    title: "How can we help?",
    lead: "Pick the path that fits you, or send us a message.",
  },
  paths: [
    { key: "students", title: "Students", body: "Questions about courses, the app or your account.", email: "support", whatsapp: true },
    { key: "parents", title: "Parents", body: "Want to know how Note Swift can help your child?", email: "support", whatsapp: true },
    { key: "schools", title: "Schools", body: "Bring Note Swift to your school and teachers.", email: "contact", whatsapp: false },
    { key: "partners", title: "Partnerships", body: "Sponsorships, content, events and collaborations.", email: "contact", whatsapp: false },
  ] as { key: string; title: string; body: string; email: "support" | "contact"; whatsapp: boolean }[],
  labels: { email: "Email", whatsapp: "WhatsApp", phone: "Phone", help: "Help center", helpBody: "Most answers are already there." },
  existing: "Already a student? Sign in to the student app at",
  form: {
    title: "Send us a message",
    lead: "Your email app opens with the message ready to send.",
    name: "Your name",
    email: "Email address",
    emailHelp: "We reply to this address.",
    topic: "Topic",
    topics: ["Student support", "Parent question", "School partnership", "Partnerships and events", "Something else"],
    message: "Message",
    messageHelp: "Include your class and device if this is about the app.",
    submit: "Send message",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please write a message of at least 10 characters.",
    },
    errorSummary: "Please fix the highlighted fields.",
    sent: "Your email app should now be open. If it did not open, write to us at",
  },
};

export type ContactCopy = typeof en;

const ne: ContactCopy = {
  meta: {
    title: "सम्पर्क",
    description: "Note Swift लाई सम्पर्क गर्नुहोस्। इमेल, फोन वा WhatsApp मार्फत विद्यार्थी सहयोग, विद्यालय टिम वा साझेदारी टिमसम्म पुग्नुहोस्।",
  },
  crumb: "सम्पर्क",
  hero: {
    title: "हामी कसरी मद्दत गर्न सक्छौं?",
    lead: "आफूलाई मिल्ने बाटो छान्नुहोस्, वा हामीलाई सन्देश पठाउनुहोस्।",
  },
  paths: [
    { key: "students", title: "विद्यार्थी", body: "कोर्स, एप वा आफ्नो खाताबारे प्रश्न।", email: "support", whatsapp: true },
    { key: "parents", title: "अभिभावक", body: "Note Swift ले तपाईंको सन्तानलाई कसरी मद्दत गर्छ जान्न चाहनुहुन्छ?", email: "support", whatsapp: true },
    { key: "schools", title: "विद्यालय", body: "Note Swift लाई आफ्नो विद्यालय र शिक्षकसम्म ल्याउनुहोस्।", email: "contact", whatsapp: false },
    { key: "partners", title: "साझेदारी", body: "प्रायोजन, सामग्री, कार्यक्रम र सहकार्य।", email: "contact", whatsapp: false },
  ],
  labels: { email: "इमेल", whatsapp: "WhatsApp", phone: "फोन", help: "सहायता केन्द्र", helpBody: "धेरैजसो उत्तर त्यहाँ पहिले नै छन्।" },
  existing: "पहिले नै विद्यार्थी हुनुहुन्छ? विद्यार्थी एपमा लग इन गर्नुहोस्:",
  form: {
    title: "हामीलाई सन्देश पठाउनुहोस्",
    lead: "तपाईंको इमेल एप सन्देश तयार अवस्थामा खुल्छ।",
    name: "तपाईंको नाम",
    email: "इमेल ठेगाना",
    emailHelp: "हामी यही ठेगानामा जवाफ दिन्छौं।",
    topic: "विषय",
    topics: ["विद्यार्थी सहयोग", "अभिभावकको प्रश्न", "विद्यालय साझेदारी", "साझेदारी र कार्यक्रम", "अन्य"],
    message: "सन्देश",
    messageHelp: "एपसम्बन्धी कुरा हो भने आफ्नो कक्षा र डिभाइस पनि लेख्नुहोस्।",
    submit: "सन्देश पठाउनुहोस्",
    errors: {
      name: "कृपया आफ्नो नाम लेख्नुहोस्।",
      email: "कृपया सही इमेल ठेगाना लेख्नुहोस्।",
      message: "कृपया कम्तीमा १० अक्षरको सन्देश लेख्नुहोस्।",
    },
    errorSummary: "कृपया चिनो लगाइएका ठाउँ सच्याउनुहोस्।",
    sent: "तपाईंको इमेल एप अब खुलेको हुनुपर्छ। नखुलेमा हामीलाई यहाँ लेख्नुहोस्:",
  },
};

export const contact = { en, ne };
