import Image from "next/image";
import MainHero from "@/sections/MainHero";
import MainNavigation from "@/sections/MainNavigation";
import SpecialH3 from "@/components/SpecialH3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <MainNavigation />
      <MainHero />
      <SpecialH3
        left={true}
        title="Features For all kind of Team."
        number="01"
      />
    </main>
  );
}
