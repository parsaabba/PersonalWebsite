import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
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
    images: [{ url: "https://parsaabbasian.com/assets/images/parsa-portrait.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parsa Abbasian | Computer Engineering Portfolio",
    description: "Computer Engineering Student at York University exploring software, AI, and technology. View my projects and journey.",
    images: ["https://parsaabbasian.com/assets/images/parsa-portrait.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.svg",
    shortcut: "/assets/icons/favicon.svg",
    apple: "/assets/icons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${bricolage.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
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
