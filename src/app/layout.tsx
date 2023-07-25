import { layout } from "@d-exclaimation/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./(components)/nav";
import "./globals.css";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@saturday/night",
  description: "Planned features of Saturday",
  // metadataBase: new URL("https://night.saturday.team"),
  icons: {
    icon: [
      "/favicon.ico",
      { sizes: "16x16", url: "/favicon-16x16.png" },
      { sizes: "32x32", url: "/favicon-32x32.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    initialScale: 1,
    width: "device-width",
    viewportFit: "cover",
  },
  manifest: "/site.webmanifest",
};

export default layout(({ children }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Nav />
      </body>
    </html>
  );
});
