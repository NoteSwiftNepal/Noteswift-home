// /schools copy. Features listed here exist in the Note Swift school, teacher and parent portals.
const en = {
  meta: {
    title: "Note Swift for Schools",
    description: "Attendance, assignments, online tests, reports, class routines, ID cards and certificates in one school portal, with teacher and parent portals and the student app.",
  },
  crumb: "For schools",
  hero: {
    title: "Technology that works with your school.",
    lead: "Your teachers know your students best. Note Swift gives them and your leadership better tools to teach, track and support every student.",
    portal: "School portal",
  },
  dash: {
    label: "Preview of the Note Swift school portal with attendance, class figures and alerts. Figures are sample data.",
    sample: "Sample data, not a real school",
    brand: "Schools",
    host: "school.noteswift.com.np",
    nav: ["Dashboard", "Attendance", "Assignments", "Online tests", "Reports", "Class routines", "Staff", "ID cards", "Certificates", "Leave notes"],
    title: "School overview",
    sub: "Today",
    report: "Download report",
    kpis: [
      { label: "Present today", value: "92%", note: "Sample" },
      { label: "Tests this week", value: "5", note: "Sample" },
      { label: "Assignments due", value: "7", note: "Sample" },
      { label: "Leave notes", value: "3", note: "Waiting for review" },
    ],
    chart: "Attendance by class, this week",
    alerts: ["Class 9 B attendance is below 85%", "Report ready: first terminal results", "Online test on Friday: Class 10 Science"],
  },
  statement: {
    title: "Note Swift does not replace teachers or schools.",
    body: "It gives them a digital layer, so learning continues beyond the classroom and nobody has to guess how students are doing.",
  },
  roles: {
    title: "Built for every role in your school.",
    lead: "Each person gets a portal designed for their work, all reading from the same school data.",
    tabsLabel: "Choose a role",
    items: [
      {
        key: "leaders",
        tab: "School leaders",
        title: "See your whole school, clearly.",
        body: "Attendance, results and records in one place, so decisions rest on what is actually happening.",
        link: "School portal",
        features: [
          { title: "Attendance", body: "Daily attendance by class and section." },
          { title: "Reports", body: "Clean reports for staff meetings and parents." },
          { title: "Staff management", body: "Keep teacher and staff records together." },
          { title: "Class routines", body: "Set the routine for every class." },
          { title: "ID cards", body: "Student ID cards, ready to print." },
          { title: "Certificates", body: "Issue certificates from the portal." },
        ],
      },
      {
        key: "teachers",
        tab: "Teachers",
        title: "Spend more time teaching.",
        body: "Take attendance, set work and run tests from one place. Less paperwork, more teaching.",
        link: "Teacher portal",
        features: [
          { title: "Attendance", body: "Mark attendance for your classes." },
          { title: "Assignments", body: "Create, share and review assignments." },
          { title: "Online tests", body: "Run tests online and see results." },
          { title: "Class routine", body: "Your classes and periods, in one view." },
          { title: "Reports", body: "Progress reports for your students." },
          { title: "Leave notes", body: "See leave notes sent by parents." },
        ],
      },
      {
        key: "parents",
        tab: "Parents",
        title: "Know how your child is doing.",
        body: "Attendance, results and notices from school, without waiting for the next meeting.",
        link: "Parent portal",
        features: [
          { title: "Attendance", body: "See your child's attendance." },
          { title: "Results", body: "Test results and reports." },
          { title: "Leave notes", body: "Send a leave note to the school online." },
          { title: "Assignments", body: "See what has been set." },
        ],
      },
      {
        key: "students",
        tab: "Students",
        title: "School, connected to your phone.",
        body: "School work and self-study in the same app.",
        link: "Student app",
        features: [
          { title: "Assignments", body: "See what is due and submit it." },
          { title: "Online tests", body: "Take school tests in the app." },
          { title: "Class routine", body: "Know which class is next." },
          { title: "Lessons and practice", body: "Study material for every subject, on the NEB and CDC syllabus." },
          { title: "SikAI", body: "An AI learning assistant for when you are stuck." },
        ],
      },
    ],
  },
  modules: {
    title: "One system for the office and the classroom.",
    lead: "The day-to-day work of running a school, grouped the way schools actually do it.",
    groups: [
      { name: "In the classroom", items: ["Assignments", "Online tests", "Class routines"] },
      { name: "In the office", items: ["Attendance", "Leave notes", "Staff management"] },
      { name: "On record", items: ["Reports", "ID cards", "Certificates"] },
    ],
  },
  portals: {
    title: "Sign in to your portal.",
    items: [
      { key: "school", name: "School portal", desc: "For principals, coordinators and school admins." },
      { key: "teacher", name: "Teacher portal", desc: "For subject and class teachers." },
      { key: "parent", name: "Parent portal", desc: "For parents and guardians." },
    ],
  },
  cta: {
    title: "Tell us about your school.",
    lead: "We will show you how Note Swift can fit in.",
  },
};

export type SchoolsCopy = typeof en;

const ne: SchoolsCopy = {
  meta: {
    title: "विद्यालयका लागि Note Swift",
    description: "हाजिरी, असाइनमेन्ट, अनलाइन परीक्षा, रिपोर्ट, कक्षा रुटिन, परिचयपत्र र प्रमाणपत्र एउटै विद्यालय पोर्टलमा, साथै शिक्षक र अभिभावक पोर्टल र विद्यार्थी एप।",
  },
  crumb: "विद्यालयका लागि",
  hero: {
    title: "तपाईंको विद्यालयसँगै काम गर्ने प्रविधि।",
    lead: "तपाईंका शिक्षकले विद्यार्थीलाई सबैभन्दा राम्रोसँग चिन्नुहुन्छ। Note Swift ले उहाँहरू र विद्यालय नेतृत्वलाई हरेक विद्यार्थीलाई पढाउन, निगरानी गर्न र सहयोग गर्न अझ राम्रा उपकरण दिन्छ।",
    portal: "विद्यालय पोर्टल",
  },
  dash: {
    label: "हाजिरी, कक्षागत तथ्यांक र सूचनासहित Note Swift विद्यालय पोर्टलको नमुना। तथ्यांक नमुना डाटा हो।",
    sample: "नमुना डाटा, वास्तविक विद्यालय होइन",
    brand: "विद्यालय",
    host: "school.noteswift.com.np",
    nav: ["ड्यासबोर्ड", "हाजिरी", "असाइनमेन्ट", "अनलाइन परीक्षा", "रिपोर्ट", "कक्षा रुटिन", "कर्मचारी", "परिचयपत्र", "प्रमाणपत्र", "बिदाको निवेदन"],
    title: "विद्यालयको सारांश",
    sub: "आज",
    report: "रिपोर्ट डाउनलोड",
    kpis: [
      { label: "आज उपस्थित", value: "९२%", note: "नमुना" },
      { label: "यो हप्ता परीक्षा", value: "५", note: "नमुना" },
      { label: "बुझाउन बाँकी असाइनमेन्ट", value: "७", note: "नमुना" },
      { label: "बिदाको निवेदन", value: "३", note: "समीक्षा बाँकी" },
    ],
    chart: "यो हप्ता कक्षागत हाजिरी",
    alerts: ["कक्षा ९ ख को हाजिरी ८५% भन्दा कम छ", "रिपोर्ट तयार: प्रथम त्रैमासिक नतिजा", "शुक्रबार अनलाइन परीक्षा: कक्षा १० विज्ञान"],
  },
  statement: {
    title: "Note Swift ले शिक्षक वा विद्यालयको ठाउँ लिँदैन।",
    body: "यसले उनीहरूलाई डिजिटल तह दिन्छ, जसले गर्दा सिकाइ कक्षाकोठाभन्दा बाहिर पनि जारी रहन्छ र विद्यार्थी कस्तो गर्दैछन् भनेर कसैले अनुमान गर्नु पर्दैन।",
  },
  roles: {
    title: "विद्यालयको हरेक भूमिकाका लागि बनेको।",
    lead: "हरेक व्यक्तिले आफ्नो कामअनुसार बनेको पोर्टल पाउँछन्, र सबैले एउटै विद्यालय डाटा प्रयोग गर्छन्।",
    tabsLabel: "भूमिका छान्नुहोस्",
    items: [
      {
        key: "leaders",
        tab: "विद्यालय नेतृत्व",
        title: "पूरै विद्यालय, स्पष्ट रूपमा हेर्नुहोस्।",
        body: "हाजिरी, नतिजा र अभिलेख एकै ठाउँमा, ताकि निर्णय वास्तविक अवस्थामा आधारित होस्।",
        link: "विद्यालय पोर्टल",
        features: [
          { title: "हाजिरी", body: "कक्षा र सेक्सनअनुसार दैनिक हाजिरी।" },
          { title: "रिपोर्ट", body: "कर्मचारी बैठक र अभिभावकका लागि सफा रिपोर्ट।" },
          { title: "कर्मचारी व्यवस्थापन", body: "शिक्षक र कर्मचारीको विवरण एकै ठाउँमा।" },
          { title: "कक्षा रुटिन", body: "हरेक कक्षाको रुटिन तय गर्नुहोस्।" },
          { title: "परिचयपत्र", body: "छाप्न तयार विद्यार्थी परिचयपत्र।" },
          { title: "प्रमाणपत्र", body: "पोर्टलबाटै प्रमाणपत्र जारी गर्नुहोस्।" },
        ],
      },
      {
        key: "teachers",
        tab: "शिक्षक",
        title: "पढाउनमा बढी समय दिनुहोस्।",
        body: "हाजिरी लिन, काम दिन र परीक्षा लिन एकै ठाउँ। कम कागजी काम, बढी पढाइ।",
        link: "शिक्षक पोर्टल",
        features: [
          { title: "हाजिरी", body: "आफ्ना कक्षाको हाजिरी लिनुहोस्।" },
          { title: "असाइनमेन्ट", body: "असाइनमेन्ट बनाउनुहोस्, बाँड्नुहोस् र हेर्नुहोस्।" },
          { title: "अनलाइन परीक्षा", body: "अनलाइन परीक्षा लिनुहोस् र नतिजा हेर्नुहोस्।" },
          { title: "कक्षा रुटिन", body: "तपाईंका कक्षा र पिरियड, एकै दृश्यमा।" },
          { title: "रिपोर्ट", body: "आफ्ना विद्यार्थीको प्रगति रिपोर्ट।" },
          { title: "बिदाको निवेदन", body: "अभिभावकले पठाएका बिदाको निवेदन हेर्नुहोस्।" },
        ],
      },
      {
        key: "parents",
        tab: "अभिभावक",
        title: "आफ्नो बच्चा कस्तो गर्दैछ, थाहा पाउनुहोस्।",
        body: "हाजिरी, नतिजा र विद्यालयका सूचना, अर्को बैठक कुर्नु नपर्ने गरी।",
        link: "अभिभावक पोर्टल",
        features: [
          { title: "हाजिरी", body: "आफ्नो बच्चाको हाजिरी हेर्नुहोस्।" },
          { title: "नतिजा", body: "परीक्षाको नतिजा र रिपोर्ट।" },
          { title: "बिदाको निवेदन", body: "विद्यालयमा अनलाइन बिदाको निवेदन पठाउनुहोस्।" },
          { title: "असाइनमेन्ट", body: "के काम दिइएको छ हेर्नुहोस्।" },
        ],
      },
      {
        key: "students",
        tab: "विद्यार्थी",
        title: "विद्यालय, तपाईंको फोनसँग जोडिएको।",
        body: "विद्यालयको काम र स्वअध्ययन, एउटै एपमा।",
        link: "विद्यार्थी एप",
        features: [
          { title: "असाइनमेन्ट", body: "के बुझाउन बाँकी छ हेर्नुहोस् र बुझाउनुहोस्।" },
          { title: "अनलाइन परीक्षा", body: "विद्यालयका परीक्षा एपमै दिनुहोस्।" },
          { title: "कक्षा रुटिन", body: "अर्को कक्षा कुन हो, थाहा पाउनुहोस्।" },
          { title: "पाठ र अभ्यास", body: "NEB र CDC पाठ्यक्रमअनुसार हरेक विषयको अध्ययन सामग्री।" },
          { title: "SikAI", body: "अड्किँदा सहयोग गर्ने AI सिकाइ सहायक।" },
        ],
      },
    ],
  },
  modules: {
    title: "कार्यालय र कक्षाकोठाका लागि एउटै प्रणाली।",
    lead: "विद्यालय सञ्चालनका दैनिक काम, विद्यालयले वास्तवमै गर्ने तरिकाअनुसार समूहमा राखिएको।",
    groups: [
      { name: "कक्षाकोठामा", items: ["असाइनमेन्ट", "अनलाइन परीक्षा", "कक्षा रुटिन"] },
      { name: "कार्यालयमा", items: ["हाजिरी", "बिदाको निवेदन", "कर्मचारी व्यवस्थापन"] },
      { name: "अभिलेखमा", items: ["रिपोर्ट", "परिचयपत्र", "प्रमाणपत्र"] },
    ],
  },
  portals: {
    title: "आफ्नो पोर्टलमा लग इन गर्नुहोस्।",
    items: [
      { key: "school", name: "विद्यालय पोर्टल", desc: "प्रधानाध्यापक, संयोजक र विद्यालय प्रशासकका लागि।" },
      { key: "teacher", name: "शिक्षक पोर्टल", desc: "विषय र कक्षा शिक्षकका लागि।" },
      { key: "parent", name: "अभिभावक पोर्टल", desc: "अभिभावक र संरक्षकका लागि।" },
    ],
  },
  cta: {
    title: "आफ्नो विद्यालयबारे हामीलाई बताउनुहोस्।",
    lead: "Note Swift तपाईंको विद्यालयमा कसरी मिल्छ, हामी देखाउनेछौं।",
  },
};

export const schools = { en, ne };
