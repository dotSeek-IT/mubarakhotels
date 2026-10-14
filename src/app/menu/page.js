import { pageMetadata } from "@/app/seo";
import Menu from "@/components/menu/Menu";

export const metadata = pageMetadata({
  path: "/menu/",
  title: "Menu & Prices",
  description:
    "Full menu of Mubarak Hotel & Family Restaurant, Marthandam: biriyani, parotta, Nadan Kozhi, Al Faham, seafood, Chinese and South Indian dishes with prices.",
});

export default function MenuPage() {
  return (
    <main className="main inner-page">
      <Menu asPage />
    </main>
  );
}
