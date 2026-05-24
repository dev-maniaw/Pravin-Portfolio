import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praveen Thangavel - Video Editor & Creative Designer",
  description:
    "Premium video editing, GFX & design, motion graphics, and photography services by Praveen Thangavel.",
  keywords: "Praveen Thangavel, Video Editor, Creative Designer, GFX, Motion Graphics, Photography",
};

import Navbar from "@/components/navigation/Navbar";
import Preloader from "@/components/ui/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${montserrat.variable} antialiased bg-black text-white`}>
        <Preloader />
        <Navbar />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
