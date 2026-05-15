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
  title: "Fagency | Your Digital Agency",
  description: "Fagency is a professional freelancers team with 1+ years of experience in Malappuram, Kerala. We provide high-quality web, app, and software development solutions.",
  keywords: ["Fagency", "Your Digital Agency", "web development Malappuram", "app development Kerala", "software development", "digital marketing", "media production"],
  authors: [{ name: "Fagency Team" }],
  openGraph: {
    title: "Fagency | Your Digital Agency",
    description: "1+ Year experienced freelancer team providing modern digital solutions.",
    url: "https://fagency.com",
    siteName: "Fagency",
    locale: "en_US",
    type: "website",
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
