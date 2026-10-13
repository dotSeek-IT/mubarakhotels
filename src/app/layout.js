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

export const metadata = {
  // Absolute base for Open Graph / Twitter image URLs in link previews.
  metadataBase: new URL("https://www.mubarakhotels.com"),
  title: "Mubarak Family Restaurant | Marthandam, Kanyakumari",
  description:
    "Family-friendly dining and hospitality in Marthandam, Kanyakumari.",
  keywords: [
    "Restaurant",
    "luxury restaurant",
    "Mubarak Family Restaurant",
    "Marthandam",
    "Kanyakumari",
    "Multi-cuisine",
    "South Indian",
    "Chinese",
    "Arabic",
    "Room bookings",
    "Event bookings",
    "Hotel",
  ],
  authors: [{ name: "Alameen Amaanullah" }],
  icons: {
    icon: "/assets/img/favicon.ico",
  },
  openGraph: {
    title: "Mubarak Family Restaurant | Marthandam, Kanyakumari",
    description:
      "Family-friendly dining and hospitality in Marthandam, Kanyakumari.",
    url: "https://www.mubarakhotels.com",
    images: ["/assets/img/mubarak_logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mubarak Family Restaurant | Marthandam, Kanyakumari",
    description:
      "Family-friendly dining and hospitality in Marthandam, Kanyakumari.",
    images: ["/assets/img/mubarak_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${greatVibes.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=chillax@400,500,600&display=swap"
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
