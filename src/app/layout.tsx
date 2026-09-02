import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kanha Law Point Academy | Premier Legal Education in Kanpur",
  description:
    "Premier law coaching dedicated to academic excellence and professional mentoring. We forge confident lawyers and visionary judges in Kanpur.",
  keywords: [
    "Kanha Law Point Academy",
    "CLAT Coaching Kanpur",
    "Judiciary Coaching Kanpur",
    "Law Academy Uttar Pradesh",
    "Arbind Kumar Srivastava",
  ],
  icons: {
    icon: "/assets/logo.png",
    shortcut: "/assets/logo.png",
    apple: "/assets/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/assets/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/assets/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} bg-surface text-navy-900 antialiased selection:bg-gold-500 selection:text-navy-950`}
      >
        {children}
      </body>
    </html>
  );
}
