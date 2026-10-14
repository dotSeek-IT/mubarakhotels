import { pageMetadata } from "@/app/seo";
import About from "@/components/about/About";
import Testimonials from "@/components/testimonials/Testimonials";

export const metadata = pageMetadata({
  path: "/about/",
  title: "About Us",
  description:
    "About Mubarak Hotel & Family Restaurant, Marthandam, Kanyakumari: hotel rooms, halal family dining, party and conference halls, and guest reviews.",
});

export default function AboutPage() {
  return (
    <main className="main inner-page">
      <About asPage />
      <Testimonials />
    </main>
  );
}
