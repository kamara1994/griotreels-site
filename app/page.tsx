"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Series from "./components/Series";
import ApiFlow from "./components/ApiFlow";
import Privacy from "./components/Privacy";
import Stats from "./components/Stats";
import LogoCta from "./components/LogoCta";
import Footer from "./components/Footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const fadeElements = document.querySelectorAll(".fade-up");
    fadeElements.forEach((el) => observer.observe(el));

    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const href = anchor.getAttribute("href");

      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const page = document.getElementById("page-wrapper");

      if (!page) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      page.style.transition = "transform 0.28s ease, opacity 0.28s ease";
      page.style.transformOrigin = "center center";
      page.style.transform = "perspective(1200px) rotateX(3deg) scale(0.985)";
      page.style.opacity = "0.72";

      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        setTimeout(() => {
          page.style.transition = "transform 0.42s ease, opacity 0.42s ease";
          page.style.transform = "perspective(1200px) rotateX(0deg) scale(1)";
          page.style.opacity = "1";
        }, 140);
      }, 180);
    };

    const internalLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    internalLinks.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      observer.disconnect();
      internalLinks.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);

  return (
    <div id="page-wrapper">
      <Navbar />

      <main
        style={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        <Hero />
        <Series />
        <ApiFlow />
        <Privacy />
        <Stats />
        <LogoCta />
        <Footer />
      </main>
    </div>
  );
}