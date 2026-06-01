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
    slug: "fish-hunter-gameplay",
    title: "Fish Hunter Gameplay",
    icon: "🎣",
    summary: "Core fishing gameplay with cast action and progress tracking.",
    details:
      "This module focuses on the main game loop where users cast hooks, catch fish, and progress through river levels.",
    stack: ["Flutter", "Game UI", "Animations"],
    screenshots: ["/projects/fish-1.jpeg"],
    appStore: "https://apps.apple.com/us/app/build-studio/id6760635211",
    published: true,
    publishedDate: "April 28, 2026"
  },
  {
    slug: "fish-hunter-dashboard",
    title: "Fish Hunter Dashboard",
    icon: "📊",
    summary: "Dashboard with coins, fish inventory, and map state.",
    details:
      "The home dashboard gives players a quick overview of their profile state, inventory totals, and shortcut actions.",
    stack: ["Flutter", "State Management", "Responsive Layout"],
    screenshots: ["/projects/fish-2.jpeg"],
    appStore: "https://apps.apple.com/us/app/nvf/id6760635896",
    published: true,
    publishedDate: "April 28, 2026"
  },
  {
    slug: "fish-hunter-splash",
    title: "Fish Hunter Splash",
    icon: "🚀",
    summary: "Brand-first splash experience for startup identity.",
    details:
      "This startup screen establishes product tone with a soft gradient, centered identity mark, and quick app launch timing.",
    stack: ["Flutter", "Branding", "Motion"],
    screenshots: ["/projects/fish-3.jpeg"],
    playStore: "https://play.google.com/store/apps/details?id=com.jay.spotem",
    published: true,
    publishedDate: "April 28, 2026"
  },
  {
    slug: "fish-hunter-collection",
    title: "Fish Collection Module",
    icon: "🐟",
    summary: "Inventory listing with fish count and sell actions.",
    details:
      "The collection module lists caught fish with count and price details and includes quick sell actions per item.",
    stack: ["Flutter", "List UI", "Reusable Widgets"],
    screenshots: ["/projects/fish-4.jpeg"],
    appStore: "https://apps.apple.com/us/app/spotem365/id6753931786",
    published: true,
    publishedDate: "April 28, 2026"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
