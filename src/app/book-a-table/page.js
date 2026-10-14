import { pageMetadata } from "@/app/seo";
import BookATable from "@/components/bookATable/BookATable";

export const metadata = pageMetadata({
  path: "/book-a-table/",
  title: "Book a Table",
  description:
    "Reserve a table at Mubarak Hotel & Family Restaurant, Marthandam, for family dinners, birthdays and parties. Call +91 73737 50999 or book online.",
});

export default function BookATablePage() {
  return (
    <main className="main inner-page">
      <BookATable asPage />
    </main>
  );
}
