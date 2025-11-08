export const translations = {
  en: {
    nav: {
      about: 'About',
      tools: 'Research Tools',
      resources: 'Resources',
      contact: 'Contact',
    },
    hero: {
      title: 'AI-Powered Tools for Evidence-Based Medical Research',
      subtitle: 'Professional suite of Google Gemini-based tools for systematic literature reviews and clinical research analysis',
      scrollDown: 'Explore Tools',
    },
    about: {
      title: 'About',
      bio: "Shai Tamam is a Medical Information Specialist and AI Analyst with over 10 years of experience in pharma-tech and healthcare sectors. He specializes in systematic literature reviews, clinical data analysis, and AI-integrated research methodologies. Shai develops educational tools and training programs that bridge traditional medical information literacy with modern AI capabilities, empowering healthcare professionals to conduct more efficient and rigorous evidence-based research.",
    },
    tools: {
      title: 'Research Tools',
      launchButton: 'Launch Tool',
      tool1: {
        name: 'Medical Research Question Builder',
        description: 'Expert tool for formulating precise systematic review questions. Identifies question type, recommends optimal frameworks (PICO, CoCoPop, PFO, PerSPEcTiF, etc.), and provides 3 formulation variations: broad, focused, and alternative angle. Bilingual support (Hebrew-English).',
      },
      tool2: {
        name: 'PubMed Query Architect',
        description: 'Advanced tool for translating clinical questions into professional PubMed search queries. Breaks down questions into components (Population, Intervention, Outcome), identifies Free-Text and MeSH terms, and builds multiple search strategies: Broad (high sensitivity), Narrow (high specificity), and Clinically Filtered. Includes proximity searching and optional filters toolbox.',
      },
      tool3: {
        name: 'PubMed Abstract Screening Tool',
        description: 'Automated tool for screening abstracts in systematic reviews. Performs two-stage process: Stage 1 - rapid rule-based filtering (animal studies, editorials, etc.), Stage 2 - deep AI-powered clinical analysis to identify causal relationships between drugs and adverse events. Generates comprehensive summary table with PMID, Status, AI Answer, and Reasoning.',
      },
      tool4: {
        name: 'Clinical Article Appraisal',
        description: 'Structured tool for critical appraisal of clinical-pharmacology articles. Generates detailed report (600-800 words) including: Highlights (3-5 key findings), and systematic analysis of 8 categories - Abstract, Introduction, Methods, Results, Discussion, Limitations, Funding/COI, and Critical Appraisal (Validity & Bias). Based solely on article content with exact citations (effect estimates, CI, p-values in LaTeX format).',
      },
      tool5: {
        name: 'Find My Journal',
        description: 'Intelligent academic publishing advisor that helps identify the most suitable journals for your manuscript. Acts as a \'meta-agent\' searching multiple journal finder tools (Elsevier, Springer Nature, JANE, Wiley) and synthesizes results into strategic recommendations. Analyzes your title and abstract, then categorizes 4-6 journals into three tiers: Top-Tier & Best Fit, Broad Audience, and Niche Journals. Provides verified scope, impact metrics (IF/CiteScore), and target audience for each recommendation. Fully multilingual.',
      },
    },
    footer: {
      copyright: '© 2025 Shai Tamam. All rights reserved.',
      builtWith: 'Built with Next.js & Google Gemini',
      home: 'Home',
      myTools: 'My Tools',
    },
    resources: {
      title: 'Recommended AI Tools for Medical Research',
      subtitle: 'Curated collection of commercial AI platforms for evidence-based research',
      visitButton: 'Visit Website',
      pricing: {
        free: 'Free',
        freemium: 'Freemium',
        paid: 'Paid',
      },
      tool1: {
        name: 'Evidence Hunt',
        category: 'Clinical Evidence Search',
        description: 'AI-powered clinical evidence search through a chat interface. Ask questions and receive summarized answers within seconds, complete with citations and verifiable sources. Searches across PubMed, medical guidelines, and protocols.',
        features: [
          'AI Chat with direct access to medical databases',
          'Weekly personalized e-alerts',
          'Search by medical specialties',
          'Transparent sourcing and verification',
        ],
      },
      tool2: {
        name: 'Consensus',
        category: 'Academic Search Engine',
        description: 'AI-powered academic search engine with access to 200+ million scientific papers. Uses language models to help find, understand, and synthesize research literature faster. Includes Consensus Meter to visualize agreement levels across studies.',
        features: [
          'Search 200M+ academic papers',
          'Deep Search for efficient literature reviews',
          'Synthesis of 1000+ papers into cited reports',
          'Support for 100+ languages',
        ],
      },
      tool3: {
        name: 'Elicit',
        category: 'Literature Review Assistant',
        description: 'AI research assistant based on systematic review processes. Can find up to 1,000 relevant papers and analyze up to 20,000 data points simultaneously. Supports sentence-level citations and interactive tables.',
        features: [
          'Find papers without perfect keyword matching',
          'Extract and organize data into research matrices',
          'Notebooks for unified research workflows',
          'Integration with Zotero and citation managers',
        ],
      },
      tool4: {
        name: 'Scite',
        category: 'Smart Citations',
        description: 'Smart citation analysis tool that shows how papers are cited - whether they support, contrast, or mention findings. Helps identify reliable and well-substantiated research.',
        features: [
          'Smart Citations with full context',
          'Supporting vs. contrasting citation analysis',
          'Credibility assessment for papers',
          'Reference checking and verification',
        ],
      },
      tool5: {
        name: 'Research Rabbit',
        category: 'Visual Discovery',
        description: 'Free tool for discovering papers through visualization of research networks. Build collections and get suggestions for similar papers, earlier works, and later works.',
        features: [
          'Intuitive visual interface',
          'Automatic alerts for new papers',
          'Collaboration between researchers',
          'Collection management and sharing',
        ],
      },
      tool6: {
        name: 'Connected Papers',
        category: 'Citation Network',
        description: 'Creates visual graphs of connected papers using co-citation and bibliographic coupling. Helps identify key papers and see the historical development of a research field.',
        features: [
          'Unique visualization of paper connections',
          'Prior Works and Derivative Works identification',
          'Export capabilities (BIB files)',
          '5 free graphs per month',
        ],
      },
      tool7: {
        name: 'Semantic Scholar',
        category: 'AI Academic Search',
        description: 'Free AI-powered academic search engine developed by Allen Institute. Offers smart recommendations, research summaries, and impact analysis of papers.',
        features: [
          'Automatic TL;DR for papers',
          'Influential citations graphs',
          'Paper recommendations',
          'Completely free',
        ],
      },
      tool8: {
        name: 'Perplexity Academic',
        category: 'Conversational Search',
        description: 'AI-powered conversational search engine with dedicated Academic Mode for searching scientific databases. Provides detailed answers with citations from academic sources.',
        features: [
          'Natural conversational interface',
          'Follow-up questions support',
          'Integration with multiple academic databases',
          'Real-time source verification',
        ],
      },
    },
  },
  he: {
    nav: {
      about: 'אודות',
      tools: 'כלי מחקר',
      resources: 'משאבים',
      contact: 'יצירת קשר',
    },
    hero: {
      title: 'כלים מבוססי AI למחקר רפואי מבוסס-ראיות',
      subtitle: 'סוויטת כלים מקצועיים מבוססי Google Gemini לסקירות ספרות שיטתיות וניתוח מחקר קליני',
      scrollDown: 'גלה כלים',
    },
    about: {
      title: 'אודות',
      bio: 'שי תמם הוא מומחה למידע רפואי ואנליסט AI עם למעלה מ-10 שנות ניסיון בתעשיות הפארמה-טק והבריאות. הוא מתמחה בסקירות ספרות שיטתיות, ניתוח נתונים קליניים, ומתודולוגיות מחקר משולבות AI. שי מפתח כלים חינוכיים ותכניות הדרכה המגשרים בין אוריינות מידע רפואי מסורתית ליכולות AI מודרניות, ומעצימים אנשי מקצוע בתחום הבריאות לבצע מחקר מבוסס-ראיות יעיל ומדויק יותר.',
    },
    tools: {
      title: 'כלי מחקר',
      launchButton: 'פתח כלי',
      tool1: {
        name: 'ארכיטקט שאלות מחקר',
        description: 'כלי מומחה לניסוח שאלות מחקר מדויקות לסקירות שיטתיות. מזהה את סוג השאלה, ממליץ על ה-Framework המתאים ביותר (PICO, CoCoPop, PFO, PerSPEcTiF ועוד), ומציע 3 ניסוחים שונים. תמיכה דו-לשונית (עברית-אנגלית).',
      },
      tool2: {
        name: 'ארכיטקט שאילתות PubMed',
        description: 'כלי מתקדם לתרגום שאלות קליניות לשאילתות חיפוש מקצועיות ב-PubMed. מפרק את השאלה למרכיבים (Population, Intervention, Outcome), מזהה מונחי Free-Text ו-MeSH מתאימים, ובונה מספר אסטרטגיות חיפוש. כולל Proximity Searching ו-toolbox של מסננים אופציונליים.',
      },
      tool3: {
        name: 'כלי סינון תקצירים אוטומטי',
        description: 'כלי אוטומציה לסינון abstracts במסגרת systematic reviews. מבצע תהליך דו-שלבי: Stage 1 - סינון מהיר על בסיס כללי הכללה והדרה, Stage 2 - ניתוח קליני מעמיק באמצעות AI לזיהוי קשר סיבתי בין תרופה לתופעת לוואי. מייצר טבלת סיכום מקיפה.',
      },
      tool4: {
        name: 'הערכה ביקורתית של מאמרים',
        description: 'כלי מובנה להערכת איכות מאמרים קליניים-פרמקולוגיים. מייצר דוח מפורט הכולל: Highlights (3-5 ממצאים מרכזיים), וניתוח שיטתי של 8 קטגוריות. הכלי מבוסס אך ורק על תוכן המאמר, כולל ציטוטים מדויקים של תוצאות ומסיים בהערכת חוזק הראיות.',
      },
      tool5: {
        name: 'מאתר כתבי עת אקדמיים',
        description: 'יועץ פרסום אקדמי חכם המסייע לזהות את כתבי העת המתאימים ביותר למאמר שלך. פועל כ-\'meta-agent\' - חוקר מספר כלי journal finder (Elsevier, Springer Nature, JANE, Wiley) ומסנתז תוצאות להמלצות אסטרטגיות. מנתח כותרת ותקציר, ומקטלג 4-6 כתבי עת לשלוש רמות: מובילים, קהל רחב, וניש מקצועי. מספק היקף מאומת, מדדי השפעה (IF/CiteScore), וקהל יעד לכל המלצה. דו-לשוני מלא.',
      },
    },
    footer: {
      copyright: '© 2025 שי תמם. כל הזכויות שמורות.',
      builtWith: 'נבנה עם Next.js ו-Google Gemini',
      home: 'בית',
      myTools: 'הכלים שלי',
    },
    resources: {
      title: 'כלי AI מומלצים למחקר רפואי',
      subtitle: 'אוסף נבחר של פלטפורמות AI מסחריות למחקר מבוסס-ראיות',
      visitButton: 'בקר באתר',
      pricing: {
        free: 'חינמי',
        freemium: 'פרימיום חלקי',
        paid: 'בתשלום',
      },
      tool1: {
        name: 'Evidence Hunt',
        category: 'חיפוש ראיות קליניות',
        description: 'חיפוש ראיות קליניות מבוסס AI דרך ממשק צ\'אט. שאל שאלות וקבל תשובות מסוכמות תוך שניות, כולל ציטוטים ומקורות מאומתים. חיפוש ב-PubMed, גיידליינים רפואיים ופרוטוקולים.',
        features: [
          'צ\'אט AI עם גישה ישירה למאגרי מידע רפואיים',
          'התראות שבועיות מותאמות אישית',
          'חיפוש לפי specialties רפואיים',
          'מקורות שקופים ואימות מידע',
        ],
      },
      tool2: {
        name: 'Consensus',
        category: 'מנוע חיפוש אקדמי',
        description: 'מנוע חיפוש אקדמי מבוסס AI עם גישה ל-200+ מיליון מאמרים מדעיים. משתמש ב-language models כדי לעזור למצוא, להבין ולסנתז ספרות מחקרית. כולל Consensus Meter להצגת רמת הסכמה בין מחקרים.',
        features: [
          'חיפוש ב-200M+ מאמרים אקדמיים',
          'Deep Search ל-literature reviews יעילים',
          'סינתזה של 1000+ מאמרים לדוחות עם ציטוטים',
          'תמיכה ב-100+ שפות',
        ],
      },
      tool3: {
        name: 'Elicit',
        category: 'עוזר סקירת ספרות',
        description: 'עוזר מחקר AI המבוסס על תהליכי systematic reviews. יכול למצוא עד 1,000 מאמרים רלוונטיים ולנתח עד 20,000 נקודות מידע בו-זמנית. תומך בציטוטים ברמת משפט וטבלאות אינטראקטיביות.',
        features: [
          'מציאת מאמרים ללא התאמה מושלמת של מילות מפתח',
          'חילוץ וארגון מידע למטריצות מחקר',
          'Notebooks לזרימות עבודה מאוחדות',
          'אינטגרציה עם Zotero וכלי ניהול ציטוטים',
        ],
      },
      tool4: {
        name: 'Scite',
        category: 'ציטוטים חכמים',
        description: 'כלי ניתוח ציטוטים חכם המראה כיצד מאמרים מצוטטים - האם הם תומכים, סותרים, או מזכירים ממצאים. עוזר לזהות מחקרים אמינים ומבוססים.',
        features: [
          'ציטוטים חכמים עם הקשר מלא',
          'ניתוח ציטוטים תומכים מול סותרים',
          'הערכת אמינות למאמרים',
          'בדיקה ואימות של הפניות',
        ],
      },
      tool5: {
        name: 'Research Rabbit',
        category: 'גילוי ויזואלי',
        description: 'כלי חינמי לגילוי מאמרים דרך ויזואליזציה של רשתות מחקר. בנה אוספים וקבל הצעות למאמרים דומים, עבודות קודמות ועבודות מאוחרות יותר.',
        features: [
          'ממשק ויזואלי אינטואיטיבי',
          'התראות אוטומטיות על מאמרים חדשים',
          'שיתוף פעולה בין חוקרים',
          'ניהול ושיתוף אוספים',
        ],
      },
      tool6: {
        name: 'Connected Papers',
        category: 'רשת ציטוטים',
        description: 'יוצר גרפים ויזואליים של מאמרים מקושרים באמצעות co-citation ו-bibliographic coupling. עוזר לזהות מאמרים מפתח ולראות התפתחות היסטורית של תחום מחקר.',
        features: [
          'ויזואליזציה ייחודית של קשרים בין מאמרים',
          'זיהוי Prior Works ו-Derivative Works',
          'יכולות ייצוא (קבצי BIB)',
          '5 גרפים חינמיים בחודש',
        ],
      },
      tool7: {
        name: 'Semantic Scholar',
        category: 'חיפוש אקדמי AI',
        description: 'מנוע חיפוש אקדמי חינמי מבוסס AI מפיתוח Allen Institute. מציע המלצות חכמות, סיכומי מחקר, וניתוח השפעה של מאמרים.',
        features: [
          'TL;DR אוטומטי למאמרים',
          'גרפים של ציטוטים משפיעים',
          'המלצות למאמרים',
          'חינמי לחלוטין',
        ],
      },
      tool8: {
        name: 'Perplexity Academic',
        category: 'חיפוש שיחתי',
        description: 'מנוע חיפוש שיחתי מבוסס AI עם מצב אקדמי ייעודי לחיפוש במאגרים מדעיים. מספק תשובות מפורטות עם ציטוטים ממקורות אקדמיים.',
        features: [
          'ממשק שיחתי טבעי',
          'תמיכה בשאלות המשך',
          'אינטגרציה עם מאגרים אקדמיים מרובים',
          'אימות מקורות בזמן אמת',
        ],
      },
    },
  },
};

export const toolLinks = [
  'https://gemini.google.com/gem/1zIYUVzVw9X6TAmvos_wH-vOxY-SONlwp',
  'https://gemini.google.com/gem/1uzDVUMu85rTI-aFvs3KeTjAqJR2VJynt',
  'https://gemini.google.com/gem/1yfMT4Lrqs8ExFgml6g58j7GPsIQqHBEt',
  'https://gemini.google.com/gem/13UEV3EZyH0iZl0zNPPFJiK__VLnRGK3I',
  'https://gemini.google.com/gem/1IF_IwJLaFy1Fg121r-7h7qum6LueUwK0',
];

export const resourceLinks = [
  'https://evidencehunt.com/chat',
  'https://consensus.app/',
  'https://elicit.com/',
  'https://scite.ai/',
  'https://researchrabbitapp.com/',
  'https://www.connectedpapers.com/',
  'https://www.semanticscholar.org/',
  'https://www.perplexity.ai/',
];

export const resourcePricing = [
  'freemium', // Evidence Hunt
  'freemium', // Consensus
  'freemium', // Elicit
  'freemium', // Scite
  'free',     // Research Rabbit
  'freemium', // Connected Papers
  'free',     // Semantic Scholar
  'freemium', // Perplexity
];
