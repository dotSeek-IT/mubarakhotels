export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: "https://www.mubarakhotels.com/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.mubarakhotels.com/assets/menu/mubarak-menu.pdf",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
