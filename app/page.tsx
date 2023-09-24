import Conferences from "@/components/Conferences/Conferences";
import Hero from "@/components/Hero/Hero";
import OurSponsor from "@/components/OurSponsor/OurSponsor";

export default function Home() {
  return (
    <main>
      <Hero />
      <Conferences />
      <OurSponsor />
    </main>
  );
}
