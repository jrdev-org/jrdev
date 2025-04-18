import "@/styles/globals.css";

import { type Metadata } from "next";
import { Courier_Prime, Geist } from "next/font/google";

export const metadata: Metadata = {
	title: "jrdev - Developer Platform",
	description: "jrdev - A developer platform created by EllyBax",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const courier = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${courier.variable}`}>
      <body className="min-h-screen bg-primary text-text-main">{children}</body>
    </html>
  );
}
