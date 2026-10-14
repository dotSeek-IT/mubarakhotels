import { pageMetadata } from "@/app/seo";
import Contact from "@/components/contact/Contact";
import Location from "@/components/location/Location";

export const metadata = pageMetadata({
  path: "/contact/",
  title: "Contact & Location",
  description:
    "Contact Mubarak Hotel & Family Restaurant, Main Road, Marthandam, Tamil Nadu 629165. Call +91 73737 50999 or 04651 272545. Open daily 8 AM–11 PM.",
});

export default function ContactPage() {
  return (
    <main className="main inner-page">
      <Contact asPage />
      <Location />
    </main>
  );
}
