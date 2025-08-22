import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

export const metadata: Metadata = {
  title: "FC전적검색",
  description: "FC온라인 전적 검색 사이트 입니다.",
  keywords: ["FC온라인", "피파", "전적검색"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <TanstackQueryProvider>
          <Header />
          {children}
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
