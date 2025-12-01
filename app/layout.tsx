import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health Desk Clinic - All Natural Supplements",
  description:
    "Premium natural health supplements designed for your complete well-being",
  keywords:
    "supplements, health, wellness, natural, organic, nutrition",
  authors: [{ name: "Health Desk Clinic" }],
  openGraph: {
    title: "Health Desk Clinic",
    description: "All Natural Supplements for Your Complete Well-Being",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
