// icon: 'ic:<simpleicons-slug>' for a CDN image, or 'svg:<path-d>' for an inline SVG path

export interface Project {
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
}

export interface Video {
  url: string;
}

export interface SkillItem {
  name: string;
  percent: number;
  icon: string;
}

export interface SkillGroup {
  items: SkillItem[];
}

export const PROJECTS: Project[] = [
  {
    tags: ["Python", "OSINT"],
    repoUrl: "https://github.com/dincertekin/mailogleit",
  },
  {
    tags: ["Python", "Security", "Wordlists"],
    repoUrl: "https://github.com/dincertekin/passdict",
  },
  {
    tags: ["Python", "Vue", "Flask", "Redis"],
    repoUrl: "https://github.com/dincertekin/croovy",
  },
];

export const VIDEOS: Video[] = [
  { url: "https://youtube.com/@dincertekin" },
  { url: "https://youtube.com/@dincertekin" },
  { url: "https://youtube.com/@dincertekin" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    items: [
      { name: "Python", percent: 95, icon: "ic:python" },
      { name: "TypeScript", percent: 90, icon: "ic:typescript" },
      { name: "PHP", percent: 80, icon: "ic:php" },
      { name: "C", percent: 75, icon: "ic:c" },
      { name: "C#", percent: 55, icon: "ic:.net" },
      { name: "Rust", percent: 35, icon: "ic:rust" },
    ],
  },
  {
    items: [
      { name: "React", percent: 85, icon: "ic:react" },
      { name: "React Native", percent: 80, icon: "ic:react" },
      { name: "Node.js", percent: 75, icon: "ic:nodedotjs" },
      {
        name: "REST / APIs",
        percent: 85,
        icon: "svg:M9 7V3M15 7V3M6 7h12v4a6 6 0 0 1-12 0V7zM9 21v-2a3 3 0 0 1 6 0v2",
      },
    ],
  },
  {
    items: [
      { name: "Kali Linux", percent: 85, icon: "ic:kalilinux" },
      { name: "Wireshark", percent: 65, icon: "ic:wireshark" },
      {
        name: "Burp Suite",
        percent: 55,
        icon: "svg:M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      },
      { name: "OWASP ZAP", percent: 50, icon: "ic:owasp" },
    ],
  },
  {
    items: [
      { name: "Linux", percent: 95, icon: "ic:linux" },
      { name: "Git", percent: 92, icon: "ic:git" },
      { name: "Docker", percent: 87, icon: "ic:docker" },
      { name: "GitHub Actions", percent: 78, icon: "ic:githubactions" },
    ],
  },
];
