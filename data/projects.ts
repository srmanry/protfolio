export type ProjectItem = {
  slug: string;
  title: string;
  icon: string;
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
    summary: "A project management app tailored for interior design teams — manage projects, track progress, and collaborate efficiently.",
    details:
      "NVF is a productivity app built for interior design teams that need a focused, efficient way to manage their projects. It helps users track progress across multiple projects, share updates with team members, organize documents, and collaborate in real time — all from one place. Developed with Flutter and available across iPhone, iPad, and Mac, NVF features built-in messaging and a clean interface crafted for design professionals.",
    stack: ["Flutter", "Dart", "Firebase", "Clean Architecture", "Bloc"],
    screenshots: [],
    appStore: "https://apps.apple.com/us/app/nvf/id6760635896",
    published: true,
    publishedDate: "2024",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
