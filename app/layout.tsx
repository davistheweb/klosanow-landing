import type { Metadata } from "next";
import { Providers } from "./providers";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
  title: "Klosanow",
  description: "An online education platform for sub-Saharan Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // suppressHydrationWarning
    >
      <body
      //  className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
