
import Image from "next/image";
import { Hero, About, Contact, Skills, Footer, Background } from "@/components";

export default function Home() {
  
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
