"use client";
import { useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
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
    <nav
      id="sticky_header"
      className="flex justify-between items-center font-semibold p-3"
    >
      <div>R</div>
      <ul className="w-full flex justify-evenly">
        <li>
          <Link href="#home">Home</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
