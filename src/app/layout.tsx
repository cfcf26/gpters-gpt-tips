import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "지피터스가 사례게시글 작성 GPT를 만든 꿀팁",
  description: "지피터스와 개발자F가 직접 만든 '사례 게시글 작성 GPT'의 제작 노하우와 실제 경험담",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFDDAB]/10 min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
