import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";


import { ScriptsBlock } from "@/components/shared/ScriptsBlock";
import { Header } from "@/components/widgets/Header";
import { ImageScreenWrapper } from "@/components/shared/ImageScreenWrapper";
import { CloudCardWrapper } from "@/components/shared/CloudCardWrapper";

const inter = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Quickspeak. Landing bot builder. Create dynamic landing page",
  description: "Create dynamic landing page with Quickspeak. With awesome landing button dialog style.",
  icons: {
    icon: 'icon.png',
    shortcut: 'icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScriptsBlock gtmList={'GTM-5Q75X56W'} />
        <ImageScreenWrapper>
          <CloudCardWrapper>
            <Header />
            {children}
          </CloudCardWrapper>
        </ImageScreenWrapper>
      </body>
    </html>
  );
}
