export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.mubarakhotels.com/sitemap.xml",
    host: "https://www.mubarakhotels.com",
  };
}
