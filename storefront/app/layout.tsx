import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Fira_Code, Inter } from "next/font/google";
import Toast from "@/components/ui/Toast";

const heading = Fira_Code({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STOREFRONT",
  description: "Quality products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <Toast />
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
