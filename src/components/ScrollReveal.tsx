"use client";

import React, { useEffect, useRef, useState } from "react";

export type AnimationVariant = "fade-up" | "scale-up" | "slide-left" | "slide-right" | "fade";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  variant?: AnimationVariant;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  variant = "fade-up",
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const getHiddenStyle = () => {
    switch (variant) {
      case "scale-up":
        return "opacity-0 scale-95 pointer-events-none";
      case "slide-right":
        return "opacity-0 -translate-x-6 pointer-events-none";
      case "slide-left":
        return "opacity-0 translate-x-6 pointer-events-none";
      case "fade":
        return "opacity-0 pointer-events-none";
      case "fade-up":
      default:
        return "opacity-0 translate-y-5 pointer-events-none";
    }
  };

  const getVisibleStyle = () => {
    switch (variant) {
      case "scale-up":
        return "opacity-100 scale-100";
      case "slide-right":
      case "slide-left":
        return "opacity-100 translate-x-0";
      case "fade":
        return "opacity-100";
      case "fade-up":
      default:
        return "opacity-100 translate-y-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-500 ease-out transform ${
        isVisible ? getVisibleStyle() : getHiddenStyle()
      } ${className}`}
    >
      {children}
    </div>
  );
}
