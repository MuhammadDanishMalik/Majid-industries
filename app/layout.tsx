import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";

export const metadata: Metadata = {
  title: "Majid Industries - Your Trusted Partners in Plastic | Since 1996",
  description: "Leading manufacturer of high-quality plastic packaging solutions. Specializing in buckets, jars, bottles, and autoparts since 1996. Serving Pakistan with excellence.",
  keywords: "plastic packaging, buckets, jars, bottles, ice cream containers, jerry cans, autoparts, plastic manufacturing, Majid Industries, Pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
