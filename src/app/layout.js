import { Great_Vibes, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "swiper/css";
import "glightbox/dist/css/glightbox.min.css";
import "./globals.css";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/app/seo";

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

const TITLE = "Mubarak Hotel Marthandam | Rooms, Restaurant & Party Hall";
const DESCRIPTION =
  "Mubarak Hotel, Marthandam: room booking, halal family restaurant, party hall and conference hall for meetings and events. Call +91 73737 50999. Open daily.";

export const metadata = {
  // Absolute base for canonical, Open Graph and Twitter URLs.
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    // Inner pages: "Menu & Prices | Mubarak Hotel Marthandam"
    template: "%s | Mubarak Hotel Marthandam",
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Mubarak Hotel",
    "Hotel Mubarak",
    "Mubarak Hotel Marthandam",
    "Hotel Mubarak Marthandam",
    "Mubarak Hotel & Family Restaurant",
    "hotel in Marthandam",
    "hotel rooms Marthandam",
    "AC rooms Marthandam",
    "hotel with free parking Marthandam",
    "room booking Marthandam",
    "hotels in Kanyakumari district",
    "restaurant in Marthandam",
    "family restaurant Kanyakumari",
    "halal restaurant Marthandam",
    "biriyani Marthandam",
    "Kerala food Marthandam",
    "Chinese restaurant Marthandam",
    "Arabian food Al Faham",
    "party hall Marthandam",
    "banquet hall Marthandam",
    "birthday party hall",
    "wedding reception hall Marthandam",
    "conference hall Marthandam",
    "meeting hall Marthandam",
    "corporate events Kanyakumari",
    "catering Marthandam",
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
    siteName: SITE_NAME,
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

// Google structured data (schema.org). Shared contact details first, then
// the hotel, the restaurant inside it, and the website itself.
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "2-76-A2, Safiya Complex, Main Road",
  addressLocality: "Marthandam",
  addressRegion: "Tamil Nadu",
  postalCode: "629165",
  addressCountry: "IN",
};

// Pin of the "Hotel Mubarak" Google Maps listing (plus code 864F+JH).
const GEO = { "@type": "GeoCoordinates", latitude: 8.3065462, longitude: 77.2239003 };

const OPEN_DAILY = [
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
];

const CONTACT = {
  telephone: "+91-73737-50999",
  email: "mubarakhotels@yahoo.co.in",
  address: ADDRESS,
  geo: GEO,
  hasMap: "https://www.google.com/maps/search/?api=1&query=Mubarak+Hotel+Marthandam",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-73737-50999",
      contactType: "reservations",
      areaServed: "IN",
      availableLanguage: ["English", "Tamil", "Malayalam"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-4651-272545",
      contactType: "customer service",
      areaServed: "IN",
    },
  ],
};

const amenity = (name) => ({
  "@type": "LocationFeatureSpecification",
  name,
  value: true,
});

const HOTEL_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "@id": `${SITE_URL}/#hotel`,
  name: SITE_NAME,
  alternateName: ["Hotel Mubarak", "Mubarak Hotel"],
  description: DESCRIPTION,
  url: `${SITE_URL}/`,
  image: [`${SITE_URL}/assets/img/og-image.jpg`],
  logo: `${SITE_URL}/assets/img/mubarak_logo.png`,
  ...CONTACT,
  openingHoursSpecification: OPEN_DAILY,
  priceRange: "₹",
  currenciesAccepted: "INR",
  amenityFeature: [
    amenity("Rooms"),
    amenity("Air-conditioned rooms"),
    amenity("Free parking"),
    amenity("Restaurant"),
    amenity("Party hall"),
    amenity("Banquet hall"),
    amenity("Conference hall"),
    amenity("Meeting room"),
    amenity("Catering"),
  ],
  containsPlace: [
    { "@id": `${SITE_URL}/#restaurant` },
    {
      "@type": "EventVenue",
      name: "Mubarak Hotel party & banquet hall",
      description:
        "Hall for birthdays, weddings, receptions and family parties, with halal catering.",
      url: `${SITE_URL}/events/`,
    },
    {
      "@type": "EventVenue",
      name: "Mubarak Hotel conference & meeting hall",
      description:
        "Space for conferences, business meetings and corporate events in Marthandam.",
      url: `${SITE_URL}/events/`,
    },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: `${SITE_URL}/book-a-table/`,
    name: "Book a table",
  },
};

const RESTAURANT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": `${SITE_URL}/#restaurant`,
  name: "Mubarak Family Restaurant",
  alternateName: ["Mubarak Hotel & Family Restaurant", "Hotel Mubarak restaurant"],
  description:
    "Halal multi-cuisine family restaurant: South Indian, Kerala, Chinese and Arabian dishes, biriyani and Al Faham.",
  url: `${SITE_URL}/menu/`,
  image: [`${SITE_URL}/assets/img/og-image.jpg`],
  ...CONTACT,
  containedInPlace: { "@id": `${SITE_URL}/#hotel` },
  openingHoursSpecification: OPEN_DAILY,
  servesCuisine: ["South Indian", "Kerala", "Chinese", "Arabian", "Halal"],
  priceRange: "₹",
  currenciesAccepted: "INR",
  hasMenu: `${SITE_URL}/menu/`,
  acceptsReservations: true,
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Mubarak Hotel",
  alternateName: [SITE_NAME, "Hotel Mubarak", "Mubarak Family Restaurant"],
  url: `${SITE_URL}/`,
  publisher: { "@id": `${SITE_URL}/#hotel` },
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
            __html: JSON.stringify([
              WEBSITE_JSON_LD,
              HOTEL_JSON_LD,
              RESTAURANT_JSON_LD,
            ]),
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
