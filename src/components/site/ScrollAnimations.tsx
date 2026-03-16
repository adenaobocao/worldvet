"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("anim-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    );

    // Observe all elements with data-anim attribute
    const observe = () => {
      document.querySelectorAll("[data-anim]:not(.anim-in)").forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-observe after a short delay to catch any late-rendered elements
    const t = setTimeout(observe, 300);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return null;
}
