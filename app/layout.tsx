import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { CartProvider } from "@/components/cart/CartProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.github.io/maw3aw-pet-lifestyle";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteConfig.name} — Pet Lifestyle Goods`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["pet accessories Lebanon", "dog accessories", "cat accessories", "pet lifestyle"],
  openGraph: { type: "website", title: `${siteConfig.name} — Pet Lifestyle Goods`, description: siteConfig.description, images: [{ url: `${siteUrl}/og.png`, width: 1732, height: 909, alt: "MAW3AW — curated pet lifestyle goods" }] },
  twitter: { card: "summary_large_image", title: `${siteConfig.name} — Pet Lifestyle Goods`, description: siteConfig.description, images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
