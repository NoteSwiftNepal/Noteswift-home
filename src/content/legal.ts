import { site } from "@/lib/site";

// Legal pages. A string is a paragraph; a string[] is a bullet list.
export type LegalSection = { id: string; title: string; body: (string | string[])[] };
export type LegalDoc = { title: string; description: string; intro: string; sections: LegalSection[] };

export const legalUpdated = "2026-10-05";

const shared = {
  en: {
    updated: "Last updated",
    toc: "On this page",
    translationNote: "",
    contactTitle: "Questions",
  },
  ne: {
    updated: "अन्तिम पटक अद्यावधिक",
    toc: "यस पृष्ठमा",
    translationNote: "यो नेपाली संस्करण अनुवाद हो। अंग्रेजी र नेपाली संस्करणबीच कुनै फरक परेमा अंग्रेजी संस्करण मान्य हुनेछ।",
    contactTitle: "प्रश्नहरू",
  },
};

const app = site.appUrl.replace("https://", "");

const en: Record<"privacy" | "terms" | "refund", LegalDoc> = {
  privacy: {
    title: "Privacy policy",
    description: `How ${site.legalName} collects, uses and protects information across the Note Swift website and apps.`,
    intro: `This policy explains how ${site.legalName} ("Note Swift", "we") handles information when you use this website, the Note Swift student app and our teacher, parent and school portals.`,
    sections: [
      {
        id: "information-we-collect",
        title: "Information we collect",
        body: [
          "We collect information you give us and information created when you use Note Swift:",
          [
            "Account details, such as name, phone number, email, class and school.",
            "Learning activity, such as lessons watched, tests taken, scores and progress.",
            "Messages, such as questions you ask teachers or SikAI, and support requests.",
            "Device information, such as device type, app version and basic usage data needed to keep the service working.",
          ],
          "This public website does not require an account and does not process payments.",
        ],
      },
      {
        id: "how-we-use-information",
        title: "How we use information",
        body: [
          [
            "To provide lessons, tests, live classes and SikAI.",
            "To personalise learning recommendations.",
            "To support schools you are enrolled with, where applicable.",
            "To respond to support requests and improve Note Swift.",
            "To send important service updates.",
          ],
        ],
      },
      {
        id: "sharing",
        title: "Sharing",
        body: [
          "We do not sell personal information. We share information only with service providers who help us run Note Swift (such as hosting and payment partners), with your school where you are enrolled through a school partnership, with a linked parent or guardian account, or when required by law.",
        ],
      },
      {
        id: "students-under-18",
        title: "Students under 18",
        body: [
          "Many of our learners are under 18. We collect only what we need to provide the service, and we encourage parents and guardians to be involved in their child's use of Note Swift, including through the parent portal.",
        ],
      },
      {
        id: "security-and-retention",
        title: "Security and retention",
        body: [
          "We use reasonable technical and organisational measures to protect information, and keep it only as long as needed to provide the service or meet legal requirements.",
        ],
      },
      {
        id: "your-choices",
        title: "Your choices",
        body: [
          "You can ask to access, correct or delete your account information by contacting us. Some information may be kept where required by law.",
        ],
      },
      {
        id: "contact",
        title: "Contact",
        body: [`For privacy questions, email ${site.email.support}.`],
      },
    ],
  },
  terms: {
    title: "Terms of use",
    description: `The terms that apply when you use the Note Swift website, apps and learning platform operated by ${site.legalName}.`,
    intro: `By using the Note Swift website, apps or learning platform, operated by ${site.legalName}, you agree to these terms. Please read them carefully.`,
    sections: [
      {
        id: "the-service",
        title: "The service",
        body: ["Note Swift provides digital learning content and tools for students, parents, teachers and schools. Features may change as we improve the platform."],
      },
      {
        id: "accounts",
        title: "Accounts",
        body: [
          [
            "Keep your login details private. You are responsible for activity on your account.",
            "Accounts are personal and may not be shared or resold.",
            "If you are under 18, use Note Swift with the permission of a parent or guardian.",
          ],
        ],
      },
      {
        id: "content",
        title: "Content and intellectual property",
        body: ["Lessons, notes, videos, questions and other materials on Note Swift belong to Note Swift or its licensors. You may use them for your own learning. Copying, recording, redistributing or reselling them is not allowed."],
      },
      {
        id: "acceptable-use",
        title: "Acceptable use",
        body: [
          [
            "Be respectful in live classes, chats and with teachers.",
            "Do not attempt to disrupt, reverse-engineer or misuse the platform.",
            "Use SikAI to learn, not to cheat in exams or assignments.",
          ],
        ],
      },
      {
        id: "payments",
        title: "Payments",
        body: [`Course purchases are made in the Note Swift student app (${app}). Prices, access periods and inclusions are shown before you pay. Refunds follow our Refund policy.`],
      },
      {
        id: "limitations",
        title: "Limitations",
        body: ["We work hard to keep content accurate and the service available, but we cannot guarantee specific exam results or uninterrupted access."],
      },
      {
        id: "changes",
        title: "Changes to these terms",
        body: ["We may update these terms. When we do, we change the date at the top of this page. Continuing to use Note Swift means you accept the updated terms."],
      },
      {
        id: "contact",
        title: "Contact",
        body: [`Questions about these terms can be sent to ${site.email.support}.`],
      },
    ],
  },
  refund: {
    title: "Refund policy",
    description: "When a refund may be available for Note Swift courses purchased in the student app, and how to request one.",
    intro: `We want you to be happy with your learning. This policy explains when a refund may be available for courses purchased in the Note Swift student app (${app}).`,
    sections: [
      {
        id: "eligible",
        title: "When a refund may be available",
        body: [
          [
            "The request is made within the refund window shown at checkout.",
            "Only a limited portion of the course content has been accessed.",
            "Duplicate payments for the same course are always refunded.",
          ],
        ],
      },
      {
        id: "not-eligible",
        title: "Not eligible",
        body: [
          [
            "Requests made after the refund window.",
            "Courses where a significant part of the content has been used or downloaded.",
            "Accounts suspended for breaking our Terms of use.",
          ],
        ],
      },
      {
        id: "how-to-request",
        title: "How to request a refund",
        body: [`Email ${site.email.support} from the email or phone number linked to your account. Include the course name, payment date and payment reference. We review every request and reply with a decision.`],
      },
      {
        id: "processing",
        title: "Processing",
        body: ["Approved refunds are returned to the original payment method. Processing times depend on your payment provider."],
      },
    ],
  },
};

const ne: typeof en = {
  privacy: {
    title: "गोपनीयता नीति",
    description: `${site.legalName} ले Note Swift वेबसाइट र एपहरूमा जानकारी कसरी सङ्कलन, प्रयोग र सुरक्षा गर्छ।`,
    intro: `तपाईंले यो वेबसाइट, Note Swift विद्यार्थी एप र हाम्रा शिक्षक, अभिभावक तथा विद्यालय पोर्टल प्रयोग गर्दा ${site.legalName} ("Note Swift", "हामी") ले जानकारी कसरी व्यवस्थापन गर्छ भन्ने कुरा यो नीतिले बताउँछ।`,
    sections: [
      {
        id: "information-we-collect",
        title: "हामीले सङ्कलन गर्ने जानकारी",
        body: [
          "तपाईंले दिनुभएको जानकारी र Note Swift प्रयोग गर्दा बन्ने जानकारी हामी सङ्कलन गर्छौं:",
          [
            "खाता विवरण, जस्तै नाम, फोन नम्बर, इमेल, कक्षा र विद्यालय।",
            "सिकाइ गतिविधि, जस्तै हेरिएका पाठ, दिइएका परीक्षा, अंक र प्रगति।",
            "सन्देश, जस्तै शिक्षक वा SikAI लाई सोधिएका प्रश्न र सहयोग अनुरोध।",
            "डिभाइस जानकारी, जस्तै डिभाइसको प्रकार, एप संस्करण र सेवा चलाउन आवश्यक आधारभूत प्रयोग डाटा।",
          ],
          "यो सार्वजनिक वेबसाइट प्रयोग गर्न खाता आवश्यक पर्दैन र यसले भुक्तानी प्रक्रिया गर्दैन।",
        ],
      },
      {
        id: "how-we-use-information",
        title: "हामी जानकारी कसरी प्रयोग गर्छौं",
        body: [
          [
            "पाठ, परीक्षा, लाइभ कक्षा र SikAI उपलब्ध गराउन।",
            "सिकाइ सुझावलाई व्यक्तिगत बनाउन।",
            "लागू हुने अवस्थामा तपाईं भर्ना भएको विद्यालयलाई सहयोग गर्न।",
            "सहयोग अनुरोधको जवाफ दिन र Note Swift सुधार गर्न।",
            "सेवासम्बन्धी महत्त्वपूर्ण जानकारी पठाउन।",
          ],
        ],
      },
      {
        id: "sharing",
        title: "जानकारी साझा गर्ने",
        body: [
          "हामी व्यक्तिगत जानकारी बेच्दैनौं। Note Swift चलाउन मद्दत गर्ने सेवा प्रदायक (जस्तै होस्टिङ र भुक्तानी साझेदार), विद्यालय साझेदारीमार्फत भर्ना भएको अवस्थामा तपाईंको विद्यालय, जोडिएको अभिभावक खाता, वा कानुनले माग गरेको अवस्थामा मात्र जानकारी साझा गर्छौं।",
        ],
      },
      {
        id: "students-under-18",
        title: "१८ वर्षमुनिका विद्यार्थी",
        body: [
          "हाम्रा धेरै विद्यार्थी १८ वर्षमुनिका छन्। हामी सेवा दिन चाहिने जानकारी मात्र सङ्कलन गर्छौं, र अभिभावक पोर्टलमार्फत समेत आफ्नो सन्तानको Note Swift प्रयोगमा संलग्न हुन अभिभावकलाई प्रोत्साहन गर्छौं।",
        ],
      },
      {
        id: "security-and-retention",
        title: "सुरक्षा र जानकारी राख्ने अवधि",
        body: [
          "जानकारी सुरक्षित राख्न हामी उचित प्राविधिक र संगठनात्मक उपाय अपनाउँछौं, र सेवा दिन वा कानुनी आवश्यकता पूरा गर्न चाहिने अवधिसम्म मात्र जानकारी राख्छौं।",
        ],
      },
      {
        id: "your-choices",
        title: "तपाईंका विकल्प",
        body: [
          "हामीलाई सम्पर्क गरेर आफ्नो खाताको जानकारी हेर्न, सच्याउन वा मेटाउन अनुरोध गर्न सक्नुहुन्छ। कानुनले माग गरेको अवस्थामा केही जानकारी राखिन सक्छ।",
        ],
      },
      {
        id: "contact",
        title: "सम्पर्क",
        body: [`गोपनीयतासम्बन्धी प्रश्नका लागि ${site.email.support} मा इमेल गर्नुहोस्।`],
      },
    ],
  },
  terms: {
    title: "प्रयोगका सर्तहरू",
    description: `${site.legalName} द्वारा सञ्चालित Note Swift वेबसाइट, एप र सिकाइ प्लेटफर्म प्रयोग गर्दा लागू हुने सर्तहरू।`,
    intro: `${site.legalName} द्वारा सञ्चालित Note Swift वेबसाइट, एप वा सिकाइ प्लेटफर्म प्रयोग गरेर तपाईं यी सर्तहरूमा सहमत हुनुहुन्छ। कृपया ध्यानपूर्वक पढ्नुहोस्।`,
    sections: [
      {
        id: "the-service",
        title: "सेवा",
        body: ["Note Swift ले विद्यार्थी, अभिभावक, शिक्षक र विद्यालयका लागि डिजिटल सिकाइ सामग्री र उपकरण उपलब्ध गराउँछ। प्लेटफर्म सुधार गर्दै जाँदा सुविधाहरू परिवर्तन हुन सक्छन्।"],
      },
      {
        id: "accounts",
        title: "खाता",
        body: [
          [
            "आफ्नो लग इन विवरण गोप्य राख्नुहोस्। तपाईंको खाताबाट हुने गतिविधिको जिम्मेवारी तपाईंकै हुन्छ।",
            "खाता व्यक्तिगत हो, यसलाई साझा गर्न वा बेच्न पाइँदैन।",
            "तपाईं १८ वर्षमुनिको हुनुहुन्छ भने अभिभावकको अनुमतिमा Note Swift प्रयोग गर्नुहोस्।",
          ],
        ],
      },
      {
        id: "content",
        title: "सामग्री र बौद्धिक सम्पत्ति",
        body: ["Note Swift मा भएका पाठ, नोट्स, भिडियो, प्रश्न र अन्य सामग्री Note Swift वा यसका इजाजतपत्रदाताका हुन्। तपाईं यिनलाई आफ्नै सिकाइका लागि प्रयोग गर्न सक्नुहुन्छ। प्रतिलिपि बनाउन, रेकर्ड गर्न, पुनः वितरण गर्न वा बेच्न पाइँदैन।"],
      },
      {
        id: "acceptable-use",
        title: "उचित प्रयोग",
        body: [
          [
            "लाइभ कक्षा, च्याट र शिक्षकसँग सम्मानजनक व्यवहार गर्नुहोस्।",
            "प्लेटफर्ममा अवरोध पुर्याउने, रिभर्स इन्जिनियरिङ गर्ने वा दुरुपयोग गर्ने प्रयास नगर्नुहोस्।",
            "SikAI लाई सिक्न प्रयोग गर्नुहोस्, परीक्षा वा असाइनमेन्टमा चिटिङ गर्न होइन।",
          ],
        ],
      },
      {
        id: "payments",
        title: "भुक्तानी",
        body: [`कोर्स खरिद Note Swift विद्यार्थी एप (${app}) मा गरिन्छ। भुक्तानी गर्नुअघि मूल्य, पहुँच अवधि र समावेश कुरा देखाइन्छ। फिर्ता हाम्रो फिर्ता नीति अनुसार हुन्छ।`],
      },
      {
        id: "limitations",
        title: "सीमितता",
        body: ["हामी सामग्री सही र सेवा उपलब्ध राख्न मेहनत गर्छौं, तर परीक्षाको निश्चित नतिजा वा निरन्तर पहुँचको ग्यारेन्टी दिन सक्दैनौं।"],
      },
      {
        id: "changes",
        title: "सर्तमा परिवर्तन",
        body: ["हामी यी सर्तहरू अद्यावधिक गर्न सक्छौं। त्यसो गर्दा यस पृष्ठको माथि रहेको मिति बदलिन्छ। Note Swift प्रयोग गरिरहनुको अर्थ अद्यावधिक सर्त स्वीकार गर्नु हो।"],
      },
      {
        id: "contact",
        title: "सम्पर्क",
        body: [`यी सर्तबारे प्रश्न ${site.email.support} मा पठाउन सक्नुहुन्छ।`],
      },
    ],
  },
  refund: {
    title: "फिर्ता नीति",
    description: "विद्यार्थी एपमा खरिद गरिएका Note Swift कोर्सको रकम कहिले फिर्ता हुन सक्छ र कसरी अनुरोध गर्ने।",
    intro: `तपाईं आफ्नो सिकाइमा सन्तुष्ट होस् भन्ने हामी चाहन्छौं। Note Swift विद्यार्थी एप (${app}) मा खरिद गरिएका कोर्सको रकम कहिले फिर्ता हुन सक्छ भन्ने कुरा यो नीतिले बताउँछ।`,
    sections: [
      {
        id: "eligible",
        title: "रकम फिर्ता हुन सक्ने अवस्था",
        body: [
          [
            "भुक्तानीका बेला देखाइएको फिर्ता अवधिभित्र अनुरोध गरिएको छ।",
            "कोर्स सामग्रीको सीमित भाग मात्र प्रयोग गरिएको छ।",
            "एउटै कोर्सका लागि दोहोरो भुक्तानी भएमा सधैं फिर्ता गरिन्छ।",
          ],
        ],
      },
      {
        id: "not-eligible",
        title: "फिर्ता नहुने अवस्था",
        body: [
          [
            "फिर्ता अवधि सकिएपछि गरिएका अनुरोध।",
            "सामग्रीको उल्लेख्य भाग प्रयोग वा डाउनलोड गरिएका कोर्स।",
            "प्रयोगका सर्त उल्लङ्घन गरेकाले निलम्बन गरिएका खाता।",
          ],
        ],
      },
      {
        id: "how-to-request",
        title: "फिर्ता कसरी अनुरोध गर्ने",
        body: [`आफ्नो खातासँग जोडिएको इमेल वा फोन नम्बरबाट ${site.email.support} मा इमेल गर्नुहोस्। कोर्सको नाम, भुक्तानी मिति र भुक्तानी सन्दर्भ नम्बर समावेश गर्नुहोस्। हामी हरेक अनुरोध हेर्छौं र निर्णयसहित जवाफ दिन्छौं।`],
      },
      {
        id: "processing",
        title: "प्रक्रिया",
        body: ["स्वीकृत रकम सुरुमा भुक्तानी गरिएको माध्यममै फिर्ता गरिन्छ। प्रक्रियामा लाग्ने समय तपाईंको भुक्तानी सेवा प्रदायकमा भर पर्छ।"],
      },
    ],
  },
};

export const legal = { en, ne };
export const legalShared = shared;
