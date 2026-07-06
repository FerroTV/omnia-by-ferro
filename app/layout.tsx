import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omnia-by-ferro.vercel.app"),
  title: "Omnia by Ferro",
  description:
    "A personal digital space for projects, ideas, code, art and experiments.",
  applicationName: "Omnia by Ferro",
  authors: [{ name: "Zhelyazko “Ferro” Zhelyazkov" }],
  creator: "Zhelyazko “Ferro” Zhelyazkov",
  publisher: "Zhelyazko “Ferro” Zhelyazkov",
  keywords: [
    "Omnia",
    "Ferro",
    "portfolio",
    "software development",
    "AI concepts",
    "creative archive",
    "digital experiments",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Omnia by Ferro",
    description:
      "A personal digital space for projects, ideas, code, art and experiments.",
    url: "https://omnia-by-ferro.vercel.app",
    siteName: "Omnia by Ferro",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Omnia by Ferro",
    description:
      "A personal digital space for projects, ideas, code, art and experiments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
