import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals_style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const thisSiteUrl = "https://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(thisSiteUrl),
  robots: { index: false, follow: false },
  title: { absolute: "Ensinamentos Baseados na Bíblia Sagrada", template: "%s | Ensinamentos Baseados na Bíblia Sagrada" },
  description: "Descrição Ensinamentos Baseados na Bíblia Sagrada",
  applicationName: "Ensinamentos Baseados na Bíblia Sagrada",
  creator: "Andrey Djason Viana",
  authors: [{name: "Andrey Djason Viana"}],
  generator: "Next.js",
  keywords: ['teste1', 'teste2', 'teste3'],
  alternates: {
    canonical: thisSiteUrl,
    languages: {
      'pt-BR': thisSiteUrl +'/pt-BR',
      'en':  thisSiteUrl +'/en-US',
      'en-US':  thisSiteUrl + '/en-US',
      'de-DE':  thisSiteUrl + '/de-DE'
    }
  },
  openGraph: {
    title: 'Ensinamentos Baseados na Bíblia Sagrada',
    description: 'Descrição Ensinamentos Baseados na Bíblia Sagrada',
    url: thisSiteUrl,
    siteName: 'Ensinamentos Baseados na Bíblia Sagrada',
    images: [{ url: thisSiteUrl + '/og.png' }]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>


  );
}
