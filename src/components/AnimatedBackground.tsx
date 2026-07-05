"use client";

import { usePathname } from "next/navigation";

const shapes = [
  { size: 48, left: "8%",  delay: "0s",    duration: "18s", opacity: 0.15, rotate: 15 },
  { size: 24, left: "18%", delay: "3s",    duration: "22s", opacity: 0.12, rotate: 45 },
  { size: 64, left: "28%", delay: "1.5s",  duration: "26s", opacity: 0.13, rotate: -20 },
  { size: 36, left: "40%", delay: "5s",    duration: "20s", opacity: 0.16, rotate: 30 },
  { size: 20, left: "52%", delay: "2s",    duration: "24s", opacity: 0.11, rotate: -45 },
  { size: 56, left: "62%", delay: "7s",    duration: "28s", opacity: 0.14, rotate: 10 },
  { size: 32, left: "72%", delay: "0.5s",  duration: "21s", opacity: 0.13, rotate: -30 },
  { size: 44, left: "82%", delay: "4s",    duration: "19s", opacity: 0.12, rotate: 55 },
  { size: 28, left: "90%", delay: "6s",    duration: "23s", opacity: 0.15, rotate: -15 },
  { size: 16, left: "5%",  delay: "8s",    duration: "25s", opacity: 0.10, rotate: 60 },
  { size: 52, left: "95%", delay: "2.5s",  duration: "27s", opacity: 0.13, rotate: -50 },
  { size: 40, left: "35%", delay: "9s",    duration: "30s", opacity: 0.12, rotate: 25 },
];

export function AnimatedBackground() {
  const pathname = usePathname();
  const isArticle = /^\/learning\/.+/.test(pathname) || /^\/blogs\/.+/.test(pathname);
  if (isArticle) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden="true">
      {/* Soft ambient blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl opacity-40 dark:opacity-15" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl opacity-40 dark:opacity-15" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-cyan-500/5 dark:bg-cyan-500/8 rounded-full blur-3xl opacity-30 dark:opacity-10" />

      {/* Floating squares */}
      {shapes.map((s, i) => (
        <div
          key={i}
          className="floating-square absolute bottom-[-80px] border border-primary/25 dark:border-primary/30"
          style={{
            width: s.size,
            height: s.size,
            left: s.left,
            opacity: s.opacity,
            animationDelay: s.delay,
            animationDuration: s.duration,
            transform: `rotate(${s.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
}
