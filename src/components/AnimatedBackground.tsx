"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function AnimatedBackground() {
  const pathname = usePathname();
  const isArticle = /^\/learning\/.+/.test(pathname) || /^\/blogs\/.+/.test(pathname);

  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onScroll = () => setScrollY(window.scrollY);

    setReducedMotion(media.matches);
    media.addEventListener("change", (e) => setReducedMotion(e.matches));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      media.removeEventListener("change", (e) => setReducedMotion(e.matches));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (isArticle) return null;

  const parallax = reducedMotion ? 0 : scrollY;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      <div className="absolute inset-0 dot-grid opacity-[0.14] dark:opacity-[0.07]" />

      <div
        className="absolute inset-[-20%] mesh-layer"
        style={{
          transform: reducedMotion ? undefined : `translate3d(0, ${parallax * 0.08}px, 0)`,
        }}
      >
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="mesh-blob mesh-blob-4" />
      </div>

      <div className="absolute inset-0 bg-mesh-shine" />
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute inset-0 bg-vignette" />

      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/60 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
