import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { ScriptsBlock } from "@/shared/ScriptsBlock";


const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "cyrillic"],
});


export const metadata: Metadata = {
  title: "AI First Development",
  description: "We created new gen projets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`}>
        <ScriptsBlock gtmList={'GTM-TN9NXQ6'} />
        {children}
      </body>
    </html>
  );
}
