const en = {
  meta: {
    title: "Team",
    description: "Teachers, engineers and creators building Note Swift in Nepal. See how our product, academics, content, communications and operations teams work together.",
  },
  crumbs: { about: "About us", team: "Team" },
  hero: {
    title: "Teachers, engineers and creators.",
    lead: "A small team in Nepal, building for students across Nepal.",
  },
  how: {
    title: "How we are organised.",
    lead: "Five teams share one goal: lessons a student understands the first time, and tools that make that easy.",
  },
  teams: [
    { key: "product", title: "Product and engineering", body: "Build the apps, platforms, live-class and AI systems students use every day, including SikAI.", focus: ["Student, teacher, parent and school apps", "Live classes and video delivery", "SikAI and learning analytics"] },
    { key: "academics", title: "Academics", body: "Teach, design curriculum, and make sure everything we publish is accurate and exam-relevant.", focus: ["NEB and CDC syllabus mapping", "Live and recorded classes", "Tests and model questions"] },
    { key: "content", title: "Content", body: "Produce videos, notes, mind maps and question banks that are clear and useful.", focus: ["Video lessons", "Notes and mind maps", "Question banks and PYQs"] },
    { key: "communications", title: "Communications", body: "Tell our story to students, parents and schools, honestly and clearly.", focus: ["Student and parent guides", "Blog and study resources", "Events and community"] },
    { key: "operations", title: "Operations", body: "Keep everything running: support, partnerships, finance and logistics.", focus: ["Student and parent support", "School partnerships", "Finance and logistics"] },
  ],
  principle: {
    quote: "If a student can't understand it quickly, we haven't finished building it.",
    by: "The principle every team works to",
  },
  cta: { title: "Want to build with us?", lead: "We are always looking for people who care about learning.", button: "See careers" },
};

export type TeamCopy = typeof en;

const ne: TeamCopy = {
  meta: {
    title: "टिम",
    description: "नेपालमा Note Swift बनाइरहेका शिक्षक, इन्जिनियर र सिर्जनाकर्ता। हाम्रा प्रडक्ट, शैक्षिक, सामग्री, सञ्चार र सञ्चालन टिम कसरी सँगै काम गर्छन्, हेर्नुहोस्।",
  },
  crumbs: { about: "हाम्रो बारेमा", team: "टिम" },
  hero: {
    title: "शिक्षक, इन्जिनियर र सिर्जनाकर्ता।",
    lead: "नेपालभरका विद्यार्थीका लागि काम गरिरहेको नेपालकै एउटा सानो टिम।",
  },
  how: {
    title: "हामी कसरी संगठित छौं।",
    lead: "पाँचवटा टिमको एउटै लक्ष्य छ: विद्यार्थीले पहिलो पटकमै बुझ्ने पाठ, र त्यसलाई सजिलो बनाउने उपकरण।",
  },
  teams: [
    { key: "product", title: "प्रडक्ट र इन्जिनियरिङ", body: "विद्यार्थीले हरेक दिन प्रयोग गर्ने एप, प्लेटफर्म, लाइभ कक्षा र SikAI लगायतका AI प्रणाली बनाउँछ।", focus: ["विद्यार्थी, शिक्षक, अभिभावक र विद्यालय एप", "लाइभ कक्षा र भिडियो प्रसारण", "SikAI र सिकाइ विश्लेषण"] },
    { key: "academics", title: "शैक्षिक टिम", body: "पढाउँछ, पाठ्यक्रम तयार गर्छ, र प्रकाशित हरेक कुरा सही र परीक्षा उपयोगी भएको सुनिश्चित गर्छ।", focus: ["NEB र CDC पाठ्यक्रम मिलान", "लाइभ र रेकर्ड गरिएका कक्षा", "परीक्षा र नमुना प्रश्न"] },
    { key: "content", title: "सामग्री", body: "स्पष्ट र उपयोगी भिडियो, नोट्स, माइन्ड म्याप र प्रश्न बैंक तयार गर्छ।", focus: ["भिडियो पाठ", "नोट्स र माइन्ड म्याप", "प्रश्न बैंक र PYQ"] },
    { key: "communications", title: "सञ्चार", body: "विद्यार्थी, अभिभावक र विद्यालयलाई हाम्रो कथा इमानदार र स्पष्ट रूपमा सुनाउँछ।", focus: ["विद्यार्थी र अभिभावक गाइड", "ब्लग र अध्ययन सामग्री", "कार्यक्रम र समुदाय"] },
    { key: "operations", title: "सञ्चालन", body: "सहयोग, साझेदारी, वित्त र व्यवस्थापन गरेर सबै कुरा सुचारु राख्छ।", focus: ["विद्यार्थी र अभिभावक सहयोग", "विद्यालय साझेदारी", "वित्त र व्यवस्थापन"] },
  ],
  principle: {
    quote: "विद्यार्थीले छिट्टै बुझ्न सकेनन् भने हाम्रो काम अझै सकिएको छैन।",
    by: "हरेक टिमले पछ्याउने सिद्धान्त",
  },
  cta: { title: "हामीसँग मिलेर बनाउन चाहनुहुन्छ?", lead: "सिकाइको ख्याल गर्ने मानिसहरूको खोजीमा हामी सधैं हुन्छौं।", button: "करियर हेर्नुहोस्" },
};

export const team = { en, ne };
