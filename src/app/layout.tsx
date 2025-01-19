import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import { Inter } from "next/font/google";

export { metadata } from "@/metadata/layout";

const interVar = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${interVar.className}`}>
        <NextThemesProvider>{children}</NextThemesProvider>
      </body>
    </html>
  );
}
