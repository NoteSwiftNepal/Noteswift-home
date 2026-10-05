const en = {
  meta: {
    title: "SikAI: the AI learning assistant in Note Swift",
    description: "SikAI is the AI learning assistant in the Note Swift app. Pick a subject and module, ask, and get step-by-step explanations that follow your NEB or CDC syllabus.",
  },
  crumb: "SikAI",
  hero: {
    eyebrow: "SikAI",
    title: "Meet SikAI, your AI learning assistant.",
    lead: "Ask about anything you are studying. SikAI explains it step by step, inside the subject and module you chose, whenever you are studying.",
    phone: "SikAI chat in the Note Swift app explaining why the electric field inside a conductor is zero",
    logo: "SikAI logo",
  },
  how: {
    title: "Ask inside your course.",
    lead: "SikAI is built into the Note Swift app, so every conversation starts from what you are actually studying.",
    steps: [
      { title: "Choose a subject", body: "Pick the subject from your course, such as Physics or Accountancy." },
      { title: "Choose a module", body: "Narrow it to the chapter or module you are working on." },
      { title: "Ask your question", body: "Type it the way you would ask a teacher. Follow up as many times as you need." },
    ],
    phone: "SikAI welcome screen with a button to start a new chat",
  },
  demo: {
    title: "Explains like a patient teacher.",
    lead: "Ask about any concept. Get a clear explanation and an example you can relate to, then keep asking until it makes sense.",
    subject: "Chemistry",
    module: "Mole concept",
    ai: "SikAI",
    you: "You",
    question: "I don't understand what a mole is in chemistry.",
    answer: [
      "Think of a mole like a dozen. It is just a counting word.",
      "A dozen means 12. A mole means 6.022 × 10²³ particles.",
      "Chemists use it because atoms are far too small to count one by one.",
    ],
    followUp: "So 2 moles of water has how many molecules?",
    followAnswer: "2 × 6.022 × 10²³ = 1.2044 × 10²⁴ molecules. Try the same for 0.5 moles of oxygen.",
  },
  principles: {
    title: "What SikAI does for you.",
    items: [
      { title: "Explains, doesn't just answer", body: "Every answer shows the steps and the reasoning, so you can solve the next one yourself." },
      { title: "Follows your syllabus", body: "You pick the subject and module first, so answers stay inside your NEB or CDC course." },
      { title: "Available any time", body: "Late night or early morning, ask as many times as you need." },
      { title: "Pushes you to try", body: "Suggests a similar question to attempt. Learning is still your work." },
    ],
  },
  honest: {
    title: "Use AI to learn, not to cheat.",
    lead: "SikAI works best when you do the thinking and use it to get unstuck. A few habits keep it that way.",
    goodTitle: "Good uses",
    good: [
      "Ask for a concept to be explained again in simpler words.",
      "Try the question first, then ask SikAI to check your steps.",
      "Ask for a similar problem and solve it yourself.",
      "Compare its answer with your lesson and notes.",
    ],
    badTitle: "Not okay",
    bad: [
      "Using it to answer questions in an exam or a graded test.",
      "Copying its answers into an assignment as your own work.",
      "Trusting an important fact without checking your notes.",
    ],
    note: "Using SikAI to cheat breaks our Terms of Use. AI can be wrong, so treat it as a study aid and check key facts against your lessons.",
  },
  soon: {
    tag: "Coming soon",
    title: "Question Generator",
    body: "Fresh MCQs and short questions for any chapter and difficulty, so you never run out of practice. It is not in the app yet.",
  },
  faq: {
    title: "Questions about SikAI",
    items: [
      { q: "How do I start a chat with SikAI?", a: "Open the Ask tab in the Note Swift app, start a new chat, choose a subject and a module, then type your question." },
      { q: "Does SikAI follow the NEB and CDC syllabus?", a: "You choose a subject and module from your course before you ask, so SikAI answers in the context of that course. Always check important facts against your lessons and notes." },
      { q: "Can I use SikAI during exams or for assignments?", a: "No. Use SikAI to understand concepts and practise. Using it to cheat in exams or assignments breaks our Terms of Use." },
      { q: "Can I send a photo of a question?", a: "No. SikAI works from questions you type in the chat." },
      { q: "Does SikAI replace teachers?", a: "No. SikAI is a study aid. For a human explanation, ask your teachers in live classes or post a doubt in the app." },
    ],
  },
  cta: { title: "Ask your first question today.", lead: "SikAI is waiting in the Ask tab of the Note Swift app." },
};

export type AiCopy = typeof en;

const ne: AiCopy = {
  meta: {
    title: "SikAI: Note Swift को AI सिकाइ सहायक",
    description: "SikAI Note Swift एपभित्रको AI सिकाइ सहायक हो। आफ्नो विषय र मोड्युल छान्नुहोस्, प्रश्न सोध्नुहोस्, र जुनसुकै समय NEB वा CDC पाठ्यक्रम अनुसारको चरणबद्ध व्याख्या पाउनुहोस्।",
  },
  crumb: "SikAI",
  hero: {
    eyebrow: "SikAI",
    title: "SikAI सँग चिनजान गर्नुहोस्, तपाईंको AI सिकाइ सहायक।",
    lead: "आफूले पढिरहेको जुनसुकै कुरा सोध्नुहोस्। तपाईंले छानेको विषय र मोड्युलभित्र SikAI ले चरण चरणमा बुझाउँछ, जुनसुकै समय।",
    phone: "कन्डक्टरभित्र विद्युतीय क्षेत्र किन शून्य हुन्छ भनेर बुझाउँदै Note Swift एपको SikAI च्याट",
    logo: "SikAI को लोगो",
  },
  how: {
    title: "आफ्नो कोर्सभित्रै सोध्नुहोस्।",
    lead: "SikAI Note Swift एपभित्रै बनेको छ, त्यसैले हरेक कुराकानी तपाईंले साँच्चै पढिरहेको विषयबाट सुरु हुन्छ।",
    steps: [
      { title: "विषय छान्नुहोस्", body: "आफ्नो कोर्सबाट भौतिक विज्ञान वा लेखाजस्ता विषय छान्नुहोस्।" },
      { title: "मोड्युल छान्नुहोस्", body: "आफूले पढिरहेको अध्याय वा मोड्युल छान्नुहोस्।" },
      { title: "प्रश्न सोध्नुहोस्", body: "शिक्षकलाई सोधेजस्तै लेख्नुहोस्। जति पटक चाहिन्छ थप प्रश्न सोध्नुहोस्।" },
    ],
    phone: "नयाँ च्याट सुरु गर्ने बटनसहित SikAI को स्वागत स्क्रिन",
  },
  demo: {
    title: "धैर्यवान् शिक्षकजस्तै बुझाउँछ।",
    lead: "जुनसुकै अवधारणाबारे सोध्नुहोस्। स्पष्ट व्याख्या र आफूसँग मिल्ने उदाहरण पाउनुहोस्, र बुझिन्जेल सोधिरहनुहोस्।",
    subject: "रसायन विज्ञान",
    module: "मोल अवधारणा",
    ai: "SikAI",
    you: "तपाईं",
    question: "रसायन विज्ञानमा मोल भनेको के हो, मैले बुझिनँ।",
    answer: [
      "मोललाई दर्जनजस्तै सोच्नुहोस्। यो गन्तीको एउटा शब्द मात्र हो।",
      "दर्जन भनेको १२ हो। एक मोल भनेको 6.022 × 10²³ कण हो।",
      "परमाणु एक एक गरेर गन्न नसकिने गरी सानो हुन्छ, त्यसैले रसायनशास्त्रीहरू मोल प्रयोग गर्छन्।",
    ],
    followUp: "त्यसो भए २ मोल पानीमा कति अणु हुन्छन्?",
    followAnswer: "2 × 6.022 × 10²³ = 1.2044 × 10²⁴ अणु। अब ०.५ मोल अक्सिजनका लागि आफैं गरेर हेर्नुहोस्।",
  },
  principles: {
    title: "SikAI ले तपाईंका लागि के गर्छ।",
    items: [
      { title: "उत्तर मात्र होइन, व्याख्या", body: "हरेक उत्तरमा चरण र कारण देखिन्छ, ताकि अर्को प्रश्न आफैं हल गर्न सक्नुहोस्।" },
      { title: "तपाईंको पाठ्यक्रम पछ्याउँछ", body: "तपाईं पहिले विषय र मोड्युल छान्नुहुन्छ, त्यसैले उत्तर तपाईंको NEB वा CDC कोर्सभित्रै रहन्छ।" },
      { title: "जुनसुकै समय उपलब्ध", body: "राति अबेर होस् वा बिहान सबेरै, जति पटक चाहिन्छ सोध्नुहोस्।" },
      { title: "आफैं प्रयास गर्न लगाउँछ", body: "प्रयास गर्न मिल्दोजुल्दो प्रश्न सुझाउँछ। सिक्ने काम अझै तपाईंकै हो।" },
    ],
  },
  honest: {
    title: "AI सिक्न प्रयोग गर्नुहोस्, चिट गर्न होइन।",
    lead: "सोच्ने काम तपाईंले गर्नुभयो र अड्किँदा SikAI को सहयोग लिनुभयो भने यो सबैभन्दा राम्रो काम गर्छ। केही बानीले यसलाई त्यसै राख्छ।",
    goodTitle: "राम्रा प्रयोग",
    good: [
      "कुनै अवधारणा सरल शब्दमा फेरि बुझाउन भन्नुहोस्।",
      "पहिले आफैं प्रश्न हल गर्नुहोस्, अनि SikAI लाई तपाईंका चरण जाँच्न लगाउनुहोस्।",
      "मिल्दोजुल्दो समस्या मागेर आफैं हल गर्नुहोस्।",
      "यसको उत्तरलाई आफ्नो पाठ र नोट्ससँग तुलना गर्नुहोस्।",
    ],
    badTitle: "गर्न नहुने",
    bad: [
      "परीक्षा वा अंक गणना हुने टेस्टमा प्रश्नको उत्तर खोज्न प्रयोग गर्नु।",
      "यसका उत्तर असाइनमेन्टमा आफ्नै काम भनेर सार्नु।",
      "महत्त्वपूर्ण तथ्य नोट्समा नजाँची पत्याउनु।",
    ],
    note: "SikAI प्रयोग गरेर चिट गर्नु हाम्रो प्रयोगका सर्तहरूको उल्लङ्घन हो। AI ले गल्ती पनि गर्न सक्छ, त्यसैले यसलाई अध्ययन सहायक मात्र मान्नुहोस् र मुख्य तथ्य आफ्ना पाठसँग भिडाउनुहोस्।",
  },
  soon: {
    tag: "छिट्टै आउँदैछ",
    title: "प्रश्न जेनेरेटर",
    body: "जुनसुकै अध्याय र कठिनाइ स्तरका नयाँ MCQ र छोटा प्रश्न, ताकि अभ्यास कहिल्यै नसकियोस्। यो अहिले एपमा छैन।",
  },
  faq: {
    title: "SikAI बारे प्रश्नहरू",
    items: [
      { q: "SikAI सँग च्याट कसरी सुरु गर्ने?", a: "Note Swift एपको Ask ट्याब खोल्नुहोस्, नयाँ च्याट सुरु गर्नुहोस्, विषय र मोड्युल छान्नुहोस्, अनि प्रश्न लेख्नुहोस्।" },
      { q: "के SikAI ले NEB र CDC पाठ्यक्रम पछ्याउँछ?", a: "सोध्नुअघि तपाईं आफ्नो कोर्सबाट विषय र मोड्युल छान्नुहुन्छ, त्यसैले SikAI ले त्यही कोर्सको सन्दर्भमा उत्तर दिन्छ। महत्त्वपूर्ण तथ्य सधैं आफ्ना पाठ र नोट्ससँग भिडाउनुहोस्।" },
      { q: "के परीक्षा वा असाइनमेन्टमा SikAI प्रयोग गर्न मिल्छ?", a: "मिल्दैन। SikAI अवधारणा बुझ्न र अभ्यास गर्न प्रयोग गर्नुहोस्। परीक्षा वा असाइनमेन्टमा चिट गर्न प्रयोग गर्नु हाम्रो प्रयोगका सर्तहरूको उल्लङ्घन हो।" },
      { q: "के प्रश्नको फोटो पठाउन मिल्छ?", a: "मिल्दैन। SikAI ले च्याटमा तपाईंले लेखेका प्रश्नबाट काम गर्छ।" },
      { q: "के SikAI ले शिक्षकको ठाउँ लिन्छ?", a: "लिँदैन। SikAI अध्ययनको सहायक मात्र हो। मान्छेकै व्याख्या चाहिँदा लाइभ कक्षामा शिक्षकलाई सोध्नुहोस् वा एपमा जिज्ञासा राख्नुहोस्।" },
    ],
  },
  cta: { title: "आजै पहिलो प्रश्न सोध्नुहोस्।", lead: "SikAI Note Swift एपको Ask ट्याबमा तपाईंलाई पर्खिरहेको छ।" },
};

export const ai = { en, ne };
