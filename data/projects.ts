export type ProjectItem = {
  slug: string;
  title: string;
  icon: string;
  logoText: string;
  logoAccent: string;
  logoBackground: string;
  cardSummary: string;
  summary: string;
  details: string;
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
    slug: "spotem",
    title: "Spotem365",
    icon: "📍",
    logoText: "S365",
    logoAccent: "#0f766e",
    logoBackground: "linear-gradient(135deg, #d9fdf6 0%, #ecfeff 100%)",
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
    slug: "sharpos-mobile",
    title: "Sharpos Mobile",
    icon: "🛒",
    logoText: "SM",
    logoAccent: "#1d4ed8",
    logoBackground: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
    cardSummary:
      "POS companion app for live sales, inventory visibility, and remote business monitoring in one mobile dashboard.",
    summary: "A mobile POS companion app for real-time sales monitoring, inventory tracking, and remote business management.",
    details:
      "Sharpos Mobile is a powerful POS system companion that gives business owners and managers real-time visibility into their operations from anywhere. The app delivers live sales data, inventory tracking, detailed analytics, and daily operations management — all integrated seamlessly with the Sharpos POS system. Built with Flutter and optimized for iOS and Android, it features a clean, user-friendly interface designed to streamline decision-making on the go.",
    stack: ["Flutter", "Dart", "REST API", "Clean Architecture", "GetX"],
    screenshots: [],
    playStore: "https://play.google.com/store/apps/details?id=com.sharposmobile.ivangrafa",
    appStore: "https://apps.apple.com/app/sharpos-mobile/id6761111194",
    published: true,
    publishedDate: "2024",
  },
  {
    slug: "build-studio",
    title: "Build Studio",
    icon: "🏗️",
    logoText: "BS",
    logoAccent: "#b45309",
    logoBackground: "linear-gradient(135deg, #fef3c7 0%, #fff7ed 100%)",
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
    logoText: "NVF",
    logoAccent: "#7c3aed",
    logoBackground: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)",
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
    slug: "walletflow",
    title: "WalletFlow",
    icon: "💸",
    logoText: "WF",
    logoAccent: "#047857",
    logoBackground: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%)",
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
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
