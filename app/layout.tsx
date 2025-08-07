// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Link from "next/link";

import LinkProtection from '@/components/LinkProtection';
import LayoutSearchTeaching from "@/components/LayoutSearchTeaching";
//import ArticleSearchLoader from '@/components/ArticleSearchLoader';

//import AccessibilityToggle from '@/components/AccessibilityToggle';

import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

import "@/css/globals.css";
import "@/css/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const thisSiteUrl = "http://localhost:3000"; // TODO - MUDAR PARA HTTPS QUANDO EM PRODUÇÃO 

export const metadata: Metadata = {
  metadataBase: new URL(thisSiteUrl),

  icons: {
    icon: {
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
    apple: {
      url: "/apple-favicon.ico",
      href: "/apple-favicon.ico",
    },
  },
  
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

  manifest: "/manifest.json"
};

// Random verses in the header
const verses = [
  '“Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão por mim.” — João 14:6',
  '“Porque Deus amou o mundo de tal maneira...” – João 3:16',
  '“O Senhor é meu pastor, nada me faltará.” – Salmos 23:1',
  '“Tudo posso naquele que me fortalece.” – Filipenses 4:13',
  '“Sede fortes e corajosos, não temais.” – Deuteronômio 31:6',
  '“Alegrai-vos na esperança, sede pacientes na tribulação.” – Romanos 12:12'
];

function getRandomVerse() {
  return verses[Math.floor(Math.random() * verses.length)];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const verse = getRandomVerse();

  return (
    <html lang="pt-BR">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <meta name="apple-mobile-web-app-title" content="EBNB" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ACCESSIBILITY */}
        <noscript>
          <div className="javascript-off">
            <h2>
              Seu navegador está com o JavaScript desabilitado. Algumas funcionalidades podem não funcionar corretamente.
            </h2>
          </div>
        </noscript>
        <div className="accessibility">
          {/*<AccessibilityToggle />*/}
          <h2 className="sr-only text-center">
            ESTAMOS TRABALHANDO PARA INCLUIR ACESSIBILIDADE NESTE SITE
            <br></br>
            DESCULPE O TRANSTORNO</h2>
        </div>

        {/* HEADER */}
        <header className="header-topo bg-dark text-white text-center p-4 namespace w-full bg-gray-800 text-white py-4 px-8 shadow-md">
          <nav className="items-center">
            <h1 className="text-xl font-bold">
              <Link href="/">Ensinamentos Baseados na Bíblia Sagrada</Link>
            </h1>
            <p className="header-versiculos p-1 lead">
              {verse}
            </p>

            {/* MENU */}
            {/* CHANGE MENU TO APPEAR ON SCROLL-TOP */}
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">Ensinamentos</Link>
              </li>
              <li>
                <Link href="/artigos" className="hover:underline">Todos Artigos</Link>
              </li>
              <li>
                <Link href="/api/hello" className="hover:underline">API</Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:underline">Sobre</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline">Contato</Link>
              </li>
              <li>
                <form className="flex space-x-6" role="search">
                  <LayoutSearchTeaching />
                  <button className="button-pesquisar" type="submit" id="button_pesquisar">
                    Ir&nbsp;&gt;{/* CHANGE TO AN ICON */}
                  </button>
                </form>
              </li>
            </ul>
          </nav>
        </header>

        {/* CONTENT */}
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>

        {/* COMPONENTS */}
        <LinkProtection />
      </body>
    </html>
  );
};

// INCLUDE SEARCH
// INCLUDE HTTP SECURITY HEADERS
// INCLUDE RESPONSIVE DESIGN IF/WHEN NEEDED
// INCLUDE ACCESSIBILITY - INCREASE AND DECREASE FONT SIZE, VISUALIZATION/READING FOR DISABLED, VOICE READING, LIGHT AND DARK THEME, ETC
// INCLUDE SUPPORT FOR RIGHT-TO-LEFT TEXT READING - AND CDN AND/OR NEW DOMAIN SO IT CAN BE ACCESSED FROM OTHER COUNTRIES WITH RESTRICTIONS (RESEARCH IF THIS IS VIABLE AND SAFE)
// INCLUDE TO RECEIVE NEWS ON MOBILE/EMAIL
// INCLUDE FULL SUPPORT FOR WEB STANDARDS
// INCLUDE POSSIBILITY TO COMMENT ON POSTS, BUT WITH SUPERVISOR MODERATION
// INCLUDE THAT THIS SITE DOES NOT SUPPORT IE