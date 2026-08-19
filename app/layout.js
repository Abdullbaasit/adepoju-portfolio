import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://adepojutaiwo.dev"),
  title: "Adepoju Taiwo — Frontend Web Developer",
  description:
    "Adepoju Taiwo — Frontend Web Developer portfolio. Building fast, accessible, global-standard web experiences with React, Next.js, TypeScript and Tailwind CSS.",
  icons: {
    icon: "/assets/favicon.svg"
  },
  openGraph: {
    title: "Adepoju Taiwo — Frontend Web Developer",
    description:
      "Frontend developer crafting fast, accessible, global-standard web experiences with React, Next.js, TypeScript and Tailwind CSS.",
    images: ["/assets/profile.jpg"],
    type: "website"
  }
};

export const viewport = {
  themeColor: "#BDB76B"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream font-body text-ink transition-colors duration-300 dark:bg-darkBg dark:text-darkText">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
