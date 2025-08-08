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
  metadataBase: new URL("https://tonyouma.com"),
  title: {
    default: "Tony Ouma",
    template: "%s · Tony Ouma",
  },
  description: "Software engineer. I build clean, reliable products.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    title: "Tony Ouma",
    description: "Software engineer. I build clean, reliable products.",
    url: "https://tonyouma.com",
    siteName: "Tony Ouma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tony Ouma",
    description: "Software engineer. I build clean, reliable products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh px-6 sm:px-8 md:px-10">{children}</div>
      </body>
    </html>
  );
}
