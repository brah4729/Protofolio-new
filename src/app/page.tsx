import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGrid />
      <Projects />
      <Contact />
    </main>
  );
}
