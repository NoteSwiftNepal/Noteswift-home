const en = {
  meta: {
    title: "Impact",
    description: "Beyond the app: robotics and AI workshops, exam preparation programs, ed-tech roundtables, school partnerships and community programs from Note Swift.",
  },
  crumb: "Impact",
  hero: {
    title: "Learning that reaches beyond the screen.",
    lead: "Some of the most important learning happens in rooms, not on screens. These programs take Note Swift to schools and communities.",
  },
  measure: {
    title: "What we pay attention to.",
    lead: "We judge our work by whether students learn more, not by how much content we publish.",
    items: [
      { title: "Reach", body: "How many students, schools and communities we serve, including those beyond major cities." },
      { title: "Learning", body: "Whether test results and chapter completion improve over a term." },
      { title: "Schools", body: "How partner schools use attendance, assignments and reports in everyday teaching." },
    ],
  },
  programs: {
    title: "Programs beyond the app.",
    items: [
      { key: "robotics", title: "Robotics and AI workshops", body: "Hands-on sessions where students build simple robots and learn the basics of how AI works.", tags: ["Build-your-first-robot session", "Intro to AI concepts"] },
      { key: "exam", title: "Exam preparation program", body: "A structured program that helps board exam students plan, practise and revise.", tags: ["Study planning", "Revision sessions", "Mock tests"] },
      { key: "roundtable", title: "Ed-tech roundtable", body: "Bringing school leaders, teachers and technologists together to talk about digital learning.", tags: ["School leaders", "Open discussion"] },
      { key: "schools", title: "School partnerships", body: "Working with schools to bring digital learning tools into everyday teaching.", tags: ["Onboarding", "Teacher training"] },
      { key: "community", title: "Community programs", body: "Taking learning resources and guidance to communities beyond major cities.", tags: ["Study guidance", "Learning resources"] },
    ],
  },
  cta: { title: "Create impact with us.", lead: "Partner with Note Swift as a school, organisation or sponsor.", events: "See events" },
};

export type ImpactCopy = typeof en;

const ne: ImpactCopy = {
  meta: {
    title: "प्रभाव",
    description: "एपभन्दा बाहिर: Note Swift का रोबोटिक्स र AI कार्यशाला, परीक्षा तयारी कार्यक्रम, एड-टेक छलफल, विद्यालय साझेदारी र सामुदायिक कार्यक्रम।",
  },
  crumb: "प्रभाव",
  hero: {
    title: "स्क्रिनभन्दा पर पुग्ने सिकाइ।",
    lead: "केही महत्त्वपूर्ण सिकाइ स्क्रिनमा होइन, कोठाभित्र हुन्छ। यी कार्यक्रमले Note Swift लाई विद्यालय र समुदायसम्म पुर्याउँछन्।",
  },
  measure: {
    title: "हामी केमा ध्यान दिन्छौं।",
    lead: "हामी आफ्नो कामलाई कति सामग्री प्रकाशित गर्यौं भनेर होइन, विद्यार्थीले कति बढी सिके भनेर मूल्याङ्कन गर्छौं।",
    items: [
      { title: "पहुँच", body: "ठूला सहरबाहिर समेत कति विद्यार्थी, विद्यालय र समुदायसम्म पुग्यौं।" },
      { title: "सिकाइ", body: "एउटा सत्रमा परीक्षा नतिजा र अध्याय पूरा गर्ने दर सुध्रियो कि सुध्रिएन।" },
      { title: "विद्यालय", body: "साझेदार विद्यालयले दैनिक शिक्षणमा हाजिरी, असाइनमेन्ट र रिपोर्ट कसरी प्रयोग गर्छन्।" },
    ],
  },
  programs: {
    title: "एपभन्दा बाहिरका कार्यक्रम।",
    items: [
      { key: "robotics", title: "रोबोटिक्स र AI कार्यशाला", body: "विद्यार्थीले साधारण रोबोट बनाउने र AI कसरी काम गर्छ भन्ने आधारभूत कुरा सिक्ने व्यावहारिक सत्र।", tags: ["पहिलो रोबोट बनाउने सत्र", "AI का आधारभूत अवधारणा"] },
      { key: "exam", title: "परीक्षा तयारी कार्यक्रम", body: "बोर्ड परीक्षा दिने विद्यार्थीलाई योजना, अभ्यास र पुनरावृत्तिमा मद्दत गर्ने व्यवस्थित कार्यक्रम।", tags: ["अध्ययन योजना", "पुनरावृत्ति सत्र", "मक टेस्ट"] },
      { key: "roundtable", title: "एड-टेक छलफल", body: "डिजिटल सिकाइबारे कुरा गर्न विद्यालय प्रमुख, शिक्षक र प्रविधिविद्लाई एकै ठाउँमा ल्याउने कार्यक्रम।", tags: ["विद्यालय प्रमुख", "खुला छलफल"] },
      { key: "schools", title: "विद्यालय साझेदारी", body: "डिजिटल सिकाइ उपकरणलाई दैनिक शिक्षणमा ल्याउन विद्यालयसँग सहकार्य।", tags: ["सुरुआती सहयोग", "शिक्षक तालिम"] },
      { key: "community", title: "सामुदायिक कार्यक्रम", body: "ठूला सहरबाहिरका समुदायसम्म सिकाइ सामग्री र मार्गदर्शन पुर्याउने काम।", tags: ["अध्ययन मार्गदर्शन", "सिकाइ सामग्री"] },
    ],
  },
  cta: { title: "हामीसँग मिलेर प्रभाव सिर्जना गर्नुहोस्।", lead: "विद्यालय, संस्था वा प्रायोजकका रूपमा Note Swift सँग साझेदारी गर्नुहोस्।", events: "कार्यक्रमहरू हेर्नुहोस्" },
};

export const impact = { en, ne };
