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
    title: "Spotem",
    icon: "📍",
    summary: "A location-based social app that lets users spot, share, and discover moments around them in real time.",
    details:
      "Spotem is a real-time location-based platform where users can spot and share events, people, or moments at specific locations. Built with Flutter for cross-platform performance, the app features live maps, real-time feeds, user profiles, and push notifications to keep users connected with what's happening around them.",
    stack: ["Flutter", "Dart", "Firebase", "REST API", "Google Maps"],
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
    summary: "A powerful mobile POS and business management app for retail and restaurant operations.",
    details:
      "Sharpos Mobile brings the full power of the Sharpos point-of-sale system to Android and iOS. It enables business owners and staff to manage orders, track inventory, process payments, and generate reports — all from a handheld device. Built with Flutter for a seamless cross-platform experience.",
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
    summary: "A construction and project management app designed to streamline build workflows on the go.",
    details:
      "Build Studio helps construction professionals manage projects, track progress, assign tasks, and communicate with teams directly from their iPhone. The app features project timelines, photo documentation, site reports, and real-time team updates — all in a clean, intuitive Flutter interface.",
    stack: ["Flutter", "Dart", "Firebase", "Bloc", "REST API"],
    screenshots: [],
    appStore: "https://apps.apple.com/us/app/build-studio/id6760635211",
    published: true,
    publishedDate: "2024",
  },
  {
    slug: "nvf",
    title: "NVF",
    icon: "⚡",
    summary: "A sleek utility app delivering fast, focused features with a clean and minimal Flutter UI.",
    details:
      "NVF is a focused iOS utility app built with Flutter, delivering a smooth and responsive user experience. The app emphasizes performance, clean architecture, and minimal design — ensuring users get exactly what they need without any friction.",
    stack: ["Flutter", "Dart", "Firebase", "Clean Architecture"],
    screenshots: [],
    appStore: "https://apps.apple.com/us/app/nvf/id6760635896",
    published: true,
    publishedDate: "2024",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
