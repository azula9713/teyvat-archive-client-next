import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { getThemeFromCookie } from "~/utils/theme";

import ClientThemeSync from "~/components/common/theme/clientThemeSync";
import ErrorPage from "./error";
import BaseLayout from "~/components/layout/container/baseLayout";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Teyvat Archive",
  description:
    "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
  keywords:
    "Teyvat Archive, Genshin Impact, Teyvat lore, Genshin guides, RPG adventure, open-world gaming",
  openGraph: {
    title: "Teyvat Archive",
    description:
      "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Explore lore, guides, and secrets at Teyvat Archive.",
    url: "https://teyvatarchive.online",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Teyvat Archive",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teyvat Archive - Your Ultimate Genshin Impact Companion",
    description:
      "Welcome to Teyvat Archive! Your ultimate Genshin Impact companion. Dive into Teyvat Archive, the premier destination for Genshin Impact fans! Explore lore, character guides, and secrets of Teyvat in one epic hub.",
    images: ["/logo.jpg"],
    creatorId: "@azula9713",
    creator: "@azula9713",
    site: "@archive_teyvat",
    siteId: "@archive_teyvat",
  },
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = getThemeFromCookie();

  return (
    <html lang="en" className={theme}>
      <body className={`${openSans.variable} antialiased`} id="app">
        <ErrorBoundary errorComponent={ErrorPage}>
          <BaseLayout>{children}</BaseLayout>
          <ClientThemeSync />
        </ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
