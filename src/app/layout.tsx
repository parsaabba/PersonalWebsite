import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Parsa Abbasian",
  description: "Parsa Abbasian is a Computer Engineering student at York University specializing in Full-Stack Development, AI, and Research. Explore my portfolio, projects, and technical blog.",
  keywords: ["Parsa Abbasian", "Computer Engineering", "York University", "Lassonde School of Engineering", "Portfolio", "Full-Stack Developer", "AI Researcher", "Software Engineer"],
  authors: [{ name: "Parsa Abbasian" }],
  openGraph: {
    type: "website",
    url: "https://parsaabbasian.com/",
    title: "Parsa Abbasian | Computer Engineering Portfolio",
    description: "Computer Engineering Student at York University exploring software, AI, and technology. View my projects and journey.",
    images: [{ url: "https://parsaabbasian.com/assets/icons/favicon.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parsa Abbasian | Computer Engineering Portfolio",
    description: "Computer Engineering Student at York University exploring software, AI, and technology. View my projects and journey.",
    images: ["https://parsaabbasian.com/assets/icons/favicon.svg"],
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
    shortcut: "/assets/icons/favicon.svg",
    apple: "/assets/icons/favicon.svg",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={false}
        >
          <AnimatedBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
