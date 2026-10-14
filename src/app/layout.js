import { Great_Vibes, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.min.css";
import "./globals.css";

import TemplateScripts from "@/components/utils/TemplateScripts";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import ScrollTop from "@/components/scrollTop/ScrollTop";
import FloatingBar from "@/components/floatingBar/FloatingBar";

// Fonts: see mubarak.md. Chillax (headings/nav) loads from Fontshare below.
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
});

const SITE_URL = "https://www.mubarakhotels.com";
const TITLE = "Mubarak Family Restaurant Marthandam | Halal Multi-Cuisine";
const DESCRIPTION =
  "Halal family restaurant in Marthandam, Kanyakumari. South Indian, Kerala, Chinese and Arabian dishes, biriyani, rooms and event spaces. Open daily 8 AM–11 PM.";
const OG_IMAGE = {
  url: "/assets/img/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Biriyani at Mubarak Family Restaurant, Marthandam",
};

export const metadata = {
  // Absolute base for canonical, Open Graph and Twitter URLs.
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Mubarak Family Restaurant",
  keywords: [
    "Mubarak Hotel",
    "Mubarak Family Restaurant",
    "restaurant in Marthandam",
    "halal restaurant Kanyakumari",
    "biriyani Marthandam",
    "Kerala food Marthandam",
    "South Indian restaurant",
    "Chinese restaurant Marthandam",
    "Arabian food Al Faham",
    "family restaurant Kanyakumari",
    "party hall Marthandam",
    "hotel rooms Marthandam",
  ],
  authors: [{ name: "Alameen Amaanullah" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/img/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Mubarak Family Restaurant",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

// Google structured data: lets search show address, hours, cuisine, phone.
const RESTAURANT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: "Mubarak Family Restaurant",
  alternateName: "Mubarak Hotel & Family Restaurant",
  url: SITE_URL,
  image: [`${SITE_URL}/assets/img/og-image.jpg`],
  logo: `${SITE_URL}/assets/img/mubarak_logo.png`,
  description: DESCRIPTION,
  telephone: "+91-73737-50999",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-73737-50999",
      contactType: "reservations",
      areaServed: "IN",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-4651-272545",
      contactType: "customer service",
      areaServed: "IN",
    },
  ],
  email: "mubarakhotels@yahoo.co.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2-76-A2, Safiya Complex, Main Road",
    addressLocality: "Marthandam",
    addressRegion: "Tamil Nadu",
    postalCode: "629165",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 8.2925,
    longitude: 77.2578,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "23:00",
    },
  ],
  servesCuisine: ["South Indian", "Kerala", "Chinese", "Arabian", "Halal"],
  priceRange: "₹",
  currenciesAccepted: "INR",
  hasMenu: `${SITE_URL}/#menu`,
  acceptsReservations: true,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${roboto.variable} ${greatVibes.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=chillax@400,500,600&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(RESTAURANT_JSON_LD),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingBar />
        <ScrollTop />
        <TemplateScripts />
      </body>
    </html>
  );
}
