import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fagency.vercel.app"),
  title: {
    default: "Fagency | Digital Agency in Malappuram, Kerala",
    template: "%s | Fagency"
  },
  description: "Fagency is a professional digital agency based in Malappuram, Kerala with 1+ years of experience. We specialize in Web Development, App Development, Graphic Design, Media Production & Digital Marketing.",
  keywords: [
    "Fagency", "fagency.it",
    "digital agency Malappuram", "digital agency Kerala",
    "web development Kerala", "web development Malappuram",
    "app development Malappuram", "app development Kerala",
    "software development Kerala", "software company Malappuram",
    "graphic design agency Kerala", "graphic design Malappuram",
    "digital marketing Malappuram", "digital marketing Kerala",
    "media production Kerala", "video production Malappuram",
    "website design Malappuram", "website design Kerala",
    "Next.js development India", "React development Kerala",
    "UI UX design Kerala", "branding agency Malappuram",
    "SEO agency Kerala", "social media marketing Malappuram",
    "freelancer team Kerala", "IT company Malappuram"
  ],
  authors: [{ name: "Fagency Team", url: "https://fagency.vercel.app" }],
  creator: "Fagency",
  publisher: "Fagency",
  category: "Technology",
  classification: "Digital Agency",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "6MeqMQsi4uE5B0vbmbnW8GM0GjQvMwLqgSDpvwTTopw",
  },
  openGraph: {
    title: "Fagency | Digital Agency in Malappuram, Kerala",
    description: "Professional digital agency with 1+ years of experience. Web, App, Software Development, Graphic Design & Digital Marketing.",
    url: "https://fagency.vercel.app",
    siteName: "Fagency",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fagency - Digital Agency in Malappuram, Kerala",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fagency | Digital Agency in Malappuram, Kerala",
    description: "Professional digital agency with 1+ years of experience. Web, App, Software Development & Digital Marketing.",
    images: ["/og-image.jpg"],
    creator: "@fagency",
  },
  alternates: {
    canonical: "https://fagency.vercel.app",
  },
  icons: {
    icon: "/logo.PNG",
    shortcut: "/logo.PNG",
    apple: "/logo.PNG",
  },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Malappuram, Kerala",
    "geo.position": "11.0522;76.0833",
    "ICBM": "11.0522, 76.0833",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Cursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
