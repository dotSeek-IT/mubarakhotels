import { SITE_URL } from "@/app/seo";

export const dynamic = "force-static";

// Every real page. Keep in sync with the folders in src/app/.
const PAGES = [
  { path: "/", priority: 1 },
  { path: "/menu/", priority: 0.9 },
  { path: "/book-a-table/", priority: 0.8 },
  { path: "/contact/", priority: 0.8 },
  { path: "/about/", priority: 0.7 },
  { path: "/events/", priority: 0.7 },
  { path: "/assets/menu/mubarak-menu.pdf", priority: 0.5 },
];

export default function sitemap() {
  const lastModified = new Date();
  return PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
