export type ProjectItem = {
  slug: string;
  title: string;
  icon: string;
  category?: "project" | "publishing";
  logoText: string;
  logoAccent: string;
  logoBackground: string;
  tagline: string;
  cardSummary: string;
  summary: string;
  details: string;
  roleSummary?: string;
  stack: string[];
  screenshots: string[];
  playStore?: string;
  appStore?: string;
  github?: string;
  published: boolean;
  publishedDate?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "prophetic-pathway",
    title: "Prophetic Pathway",
    icon: "✨",
    category: "project",
    logoText: "PP",
    logoAccent: "#7c3aed",
    logoBackground: "linear-gradient(135deg, #ede9fe 0%, #faf5ff 100%)",
    tagline: "Spiritual Advisor Consultation App",
    cardSummary:
      "One-on-one spiritual guidance through live chat, voice, and video, with advisor booking, wallet payments, subscriptions, and AI session summaries.",
    summary:
      "A consultation platform connecting users with verified spiritual advisors for personalized guidance and flexible live sessions.",
    details:
      "Prophetic Pathway, also known as EJ PPathway, connects users with verified spiritual advisors for one-on-one consultations through real-time chat, voice calls, and video calls. Users can browse advisor profiles, ratings, and reviews, receive matches based on their preferences and language, and book, reschedule, or cancel sessions. An in-app wallet supports top-ups and per-minute session payments, while subscription plans offer options for regular consultations. Session notes and AI-generated summaries help users revisit their conversations, and notifications provide session reminders and advisor availability updates. Available on Android and iOS.",
    stack: ["Live Chat", "Voice & Video Calls", "Session Booking", "In-App Wallet", "Subscriptions", "AI Summaries"],
    screenshots: [],
    playStore: "https://play.google.com/store/apps/details?id=com.prophetic.ppathway",
    appStore: "https://apps.apple.com/us/app/prophetic-pathway/id6774471827",
    published: true,
  },
  {
    slug: "audioforge",
    title: "AudioForge",
    icon: "🎵",
    category: "project",
    logoText: "AF",
    logoAccent: "#c2410c",
    logoBackground: "linear-gradient(135deg, #ffedd5 0%, #fff7ed 100%)",
    tagline: "Offline Media Converter & Audio Editor",
    cardSummary:
      "Offline audio toolkit to extract audio from video, convert formats, trim, merge, and compress files with private on-device processing.",
    summary:
      "An offline media converter and audio editor for everyday tasks, from creating ringtones to combining voice clips and saving storage.",
    details:
      "AudioForge brings everyday audio editing and media conversion into one simple offline workflow. Users can extract audio from videos, convert between popular audio formats, trim unwanted sections, merge multiple files, and compress audio to reduce storage use. All processing happens directly on the device without uploading media, supporting private, fast access to editing tools. Whether creating a ringtone, combining voice clips, or reducing file sizes, the app keeps each task straightforward with a clean, user-friendly interface. Available on Android.",
    stack: ["Audio Extraction", "Format Conversion", "Audio Trimming", "Audio Merging", "Audio Compression", "Offline Processing"],
    screenshots: [],
    playStore: "https://play.google.com/store/apps/details?id=com.sumanry.audioforge",
    published: true,
  },
  {
    slug: "walletflow",
    title: "WalletFlow",
    icon: "💸",
    category: "project",
    logoText: "WF",
    logoAccent: "#047857",
    logoBackground: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%)",
    tagline: "Money Management & Invoice Creator",
    cardSummary:
      "Personal finance app for tracking income, expenses, and budgets with a clean wallet-style interface and simple daily flow.",
    summary:
      "A lightweight personal finance app focused on expense tracking, income logging, and simple budget management.",
    details:
      "WalletFlow is a personal finance app designed around quick daily money tracking. It focuses on logging income and expenses, reviewing budget activity, and keeping the overall experience clean and easy to use. Based on the published Google Play listing and the provided store link, the app presents a simple wallet-style flow for staying on top of spending without clutter.",
    stack: ["Flutter", "Dart", "Budget Tracking", "Expense Insights"],
    screenshots: [],
    playStore: "https://play.google.com/store/apps/details?id=com.srmanry.WalletFlow&hl=en",
    published: true,
    publishedDate: "2026",
  },
  {
    slug: "spotem",
    title: "Spotem365",
    icon: "📍",
    category: "project",
    logoText: "S365",
    logoAccent: "#0f766e",
    logoBackground: "linear-gradient(135deg, #d9fdf6 0%, #ecfeff 100%)",
    tagline: "Google Map Report Management app",
    cardSummary:
      "Community reporting app for traffic, safety alerts, and nearby local updates with fast posting and live discovery.",
    summary: "A real-time community reporting app — share and discover traffic, safety, and local events happening around you.",
    details:
      "Spotem365 lets users share and discover real-time events happening around them — from traffic alerts to safety notices and community updates. The app uses live location to display nearby reports and auto-fills addresses when creating posts. Built with Flutter for a smooth cross-platform experience on iOS and Android, featuring category filters, real-time feeds, and a privacy-focused location model that never stores or tracks user position.",
    stack: ["Flutter", "Dart", "Firebase", "Google Maps", "REST API"],
    screenshots: [],
    playStore: "https://play.google.com/store/apps/details?id=com.jay.spotem",
    appStore: "https://apps.apple.com/us/app/spotem365/id6753931786",
    published: true,
    publishedDate: "2024",
  },
  {
    slug: "build-studio",
    title: "Build Studio",
    icon: "🏗️",
    category: "project",
    logoText: "BS",
    logoAccent: "#b45309",
    logoBackground: "linear-gradient(135deg, #fef3c7 0%, #fff7ed 100%)",
    tagline: "Project Management App",
    cardSummary:
      "Construction and interior workflow app for tracking progress, documents, teams, and project collaboration.",
    summary: "A project management app built for construction and interior design teams to track, share, and collaborate in one place.",
    details:
      "Build Studio is a productivity app designed specifically for construction and interior design professionals. It brings project management, progress tracking, document organization, and team collaboration into a single centralized platform. Built with Flutter and available on iPhone, iPad, and Mac, the app enables teams to share updates, manage timelines, and stay aligned — from the office or on-site.",
    stack: ["Flutter", "Dart", "Firebase", "Bloc", "REST API"],
    screenshots: [],
    appStore: "https://apps.apple.com/us/app/build-studio/id6760635211",
    published: true,
    publishedDate: "2024",
  },
  {
    slug: "nvf",
    title: "NVF",
    icon: "🎨",
    category: "project",
    logoText: "NVF",
    logoAccent: "#7c3aed",
    logoBackground: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)",
    tagline: "Project Management App",
    cardSummary:
      "Interior design project app for team updates, document flow, messaging, and multi-project progress tracking.",
    summary: "A project management app tailored for interior design teams — manage projects, track progress, and collaborate efficiently.",
    details:
      "NVF is a productivity app built for interior design teams that need a focused, efficient way to manage their projects. It helps users track progress across multiple projects, share updates with team members, organize documents, and collaborate in real time — all from one place. Developed with Flutter and available across iPhone, iPad, and Mac, NVF features built-in messaging and a clean interface crafted for design professionals.",
    stack: ["Flutter", "Dart", "Firebase", "Clean Architecture", "Bloc"],
    screenshots: [],
    appStore: "https://apps.apple.com/us/app/nvf/id6760635896",
    published: true,
    publishedDate: "2024",
  },
  {
    slug: "fish-hunter-game-tdb",
    title: "Fish Hunter Game TDB: Offline",
    icon: "🐟",
    category: "project",
    logoText: "FH",
    logoAccent: "#0f766e",
    logoBackground: "linear-gradient(135deg, #ccfbf1 0%, #ecfeff 100%)",
    tagline: "Fish Hunter offline Game",
    cardSummary:
      "Offline arcade fishing game with relaxing underwater exploration, fish collection, gear upgrades, and simple controls for casual play.",
    summary:
      "A casual offline arcade game focused on fish hunting, underwater exploration, and simple relaxing gameplay.",
    details:
      "Fish Hunter Game TDB: Offline is a casual arcade fishing game built for easy offline play. Based on the current Google Play listing, the game features fish hunting across underwater environments, unlockable deep-sea areas, and gear upgrades including hooks, nets, and other tools. It is designed as a light, family-friendly experience with no internet requirement.",
    stack: ["Flutter", "Dart", "Arcade Game", "Offline Gameplay"],
    screenshots: [],
    playStore: "https://play.google.com/store/apps/details?id=com.fishhunter.tdb&hl=en",
    published: true,
    publishedDate: "2026",
  },
  {
    slug: "snooze-llc",
    title: "Snooze LLC",
    icon: "⏰",
    category: "project",
    logoText: "SZ",
    logoAccent: "#1d4ed8",
    logoBackground: "linear-gradient(135deg, #dbeafe 0%, #eef2ff 100%)",
    tagline: "Ai Sleep Tracking Smart Alarm App",
    cardSummary:
      "AI sleep tracking and smart alarm app with sleep notes, bedtime insights, and a polished nighttime-focused mobile experience.",
    summary:
      "A sleep-focused mobile app built around AI tracking, smart alarms, and habit-friendly bedtime analysis.",
    details:
      "Snooze LLC is an iOS health and fitness app centered on AI-assisted sleep tracking and smart alarm features. Based on the referenced App Store listing visible on July 22, 2026, it presents bedtime analysis, alarm management, and sleep note workflows in a dark, polished interface designed for iPhone and iPad users.",
    stack: ["Flutter", "Dart", "AI Sleep Tracking", "Smart Alarm"],
    screenshots: [],
    appStore: "https://apps.apple.com/us/app/snooze-llc/id6764524325",
    published: true,
    publishedDate: "2026",
  },
  {
    slug: "sharpos-mobile",
    title: "Sharpos Mobile",
    icon: "🛒",
    category: "publishing",
    logoText: "SM",
    logoAccent: "#1d4ed8",
    logoBackground: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
    tagline: "Only Development",
    cardSummary:
      "Published to Android and iOS as release support only. My role here was store submission, listing setup, and publishing delivery.",
    summary: "A mobile POS companion app for real-time sales monitoring, inventory tracking, and remote business management.",
    details:
      "Sharpos Mobile is included here as a publishing support engagement, not as a full build project. My contribution was handling release preparation and store publishing for Android and iOS. The product itself was developed by another team.",
    roleSummary:
      "Role: App publishing only. I handled store release setup, listing preparation, submission, and publishing support.",
    stack: ["Android Release", "iOS Release", "Store Listing", "Submission Support"],
    screenshots: [],
    playStore: "https://play.google.com/store/apps/details?id=com.sharposmobile.ivangrafa",
    appStore: "https://apps.apple.com/app/sharpos-mobile/id6761111194",
    published: true,
    publishedDate: "2024",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
