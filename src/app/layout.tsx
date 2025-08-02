import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SERP Sprint Seo",
  description:
    "Stop wasting money on SEO tools, freelancers, or risky DIY fixes. With SERP Sprint, you get a full SEO audit alongwith expert fixes, starting at just $500.",
  verification: {
    google: "ytNIzxTvLWMJ_p9wiZZLcTr6yn7QImZRMIbcysKwPMo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
