'use client'
import Image from "next/image";
import { Hero, Footer } from "@/components";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const smoothScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href").substring(1);
        smoothScroll(targetId);
      });
    });
  }, []);
  return (
    <main>
      <Hero />
      <Footer/>
    </main>
  );
}
