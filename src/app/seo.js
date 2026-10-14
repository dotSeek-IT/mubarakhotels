// Shared SEO settings. Pages call pageMetadata() so each one keeps the
// site-wide preview image and site name (Next.js replaces, not merges,
// a page's openGraph object).

export const SITE_URL = "https://www.mubarakhotels.com";
export const SITE_NAME = "Mubarak Hotel & Family Restaurant";

export const OG_IMAGE = {
  url: "/assets/img/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Biriyani at Mubarak Hotel & Family Restaurant, Marthandam",
};

export function pageMetadata({ path, title, description }) {
  const fullTitle = `${title} | Mubarak Hotel Marthandam`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
