import { pageMetadata } from "@/app/seo";
import Events from "@/components/events/Events";

export const metadata = pageMetadata({
  path: "/events/",
  title: "Party Hall & Conference Hall",
  description:
    "Party hall, banquet hall and conference hall at Mubarak Hotel, Marthandam for weddings, birthdays, meetings and corporate events, with halal catering.",
});

export default function EventsPage() {
  return (
    <main className="main inner-page">
      <Events asPage />
    </main>
  );
}
