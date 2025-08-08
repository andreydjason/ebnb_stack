// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Link from "next/link";

import { FaSearch } from "react-icons/fa";

import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

//import LinkProtection from '@/components/LinkProtection';

import LayoutSearchTeaching from "@/components/LayoutSearchTeaching";
//import ArticleSearchLoader from '@/components/ArticleSearchLoader';

import AccessibilityToggle from '@/components/AccessibilityToggle';
import AccessibilityPanel from '@/components/AccessibilityPanel';
import { AccessibilityProvider } from '@/contexts/AccessibilityContext';

import NavMenu from '@/components/NavMenu';
import MobileNav from '@/components/MobileNav';

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

const thisSiteUrl = "http://localhost:3000"; // TODO - MUDAR A URL E HTTPS QUANDO EM PRODUÇÃO 

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

export default function RootLayout({
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
      <body className={`${geistSans.variable} ${geistMono.variable} dark:bg-gray-700 dark:text-white`} >
        {/* ACCESSIBILITY */}
        <AccessibilityProvider>
          <AccessibilityToggle />
          <AccessibilityPanel />
        </AccessibilityProvider>
        {/* HEADER */}

        <header id="topo" className="header-topo bg-dark text-white text-center p-4 namespace w-full bg-gray-800 text-white py-4 px-8 shadow-md">
          <nav className="items-center">
            {/* NO JAVASCRIPT */}
            <noscript>
              <div className="javascript-off">
                <h3>
                  Seu navegador está com o JavaScript desabilitado. Algumas funcionalidades podem não funcionar corretamente.
                </h3>
              </div>
            </noscript>
            <Link href="/">
              <h1 className="text-4xl text-center font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Ensinamentos Baseados<br></br>na Bíblia Sagrada</h1>
            </Link>
            <p className="header-verses p-1 mb-5 lead">
              {verse}
            </p>

            {/* MENU */}
            {/* CHANGE MENU TO APPEAR ON SCROLL-TOP */}
            <div className="flex justify-center mb-4">
              {/* Menu desktop */}
              <ul className="nav-menu hidden md:flex space-x-6">
                <NavMenu />
              </ul>

              {/* Menu mobile toggle */}
              <MobileNav />
              <li className="search-input flex items-center">
                <form className="flex" role="search">
                  <LayoutSearchTeaching />
                  <button className="search-button rounded-full px-3 py-0
                  hover:bg-sky-600 hover:ring-1 hover:ring-sky-500" type="submit" id="button_pesquisar">
                    <FaSearch />
                  </button>
                </form>
              </li>
            </div>
          </nav>
        </header>

        {/* CONTENT */}
        <div className="text-center m-1 text-white dark:text-white">
          <small>
            O site está escuro? É o tema do seu computador ou celular no modo Escuro
            <br></br>
            (Em breve um botão aqui para mudar automaticamente entre os temas claro e escuro)
          </small>
        </div>
        
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>

        {/* ABOUT */}
        {/* SOBRE */}
        <div
          id="sobre"
          className="about flex p-5 m-20 pb-3 text-1x2 border rounded-xl bg-gray-100 rounded-x5 dark:bg-gray-800 dark:text-white"
        >
          <div className="row g-4 py-2">
            <div className="col d-flex align-items-start">
              <h2 className="about-title pb-2 border-bottom">
                O que é o &quot;Ensinamentos Baseados na Bíblia Sagrada&quot;?
              </h2>
              <div>
                <p>
                  Somos uma plataforma de <strong>ensinamentos</strong> com{' '}
                  <strong>funtamentos na Bíblia Sagrada Cristã</strong>, mais
                  especificamente a <strong>Bíblia Sagrada Evangélica</strong>.
                  <br />
                  <br />
                  A maioria dos textos bíblicos citados neste site podem ser
                  encontrados em diversas Bíblias de versões diferentes, com pequenas
                  diferenças de escrita, mas a compreensão e entendimento do texto é
                  o mesmo, não muda.
                  <br />
                  <br />
                  Buscamos pesquisar e nos aprofundar nos assuntos tratados aqui. E
                  também, pesquisamos outras versões e traduções em que foram
                  escritos os textos, incluindo isto em cada conteúdo quando possível
                  ou necessário,{' '}
                  <strong>
                    trazendo o melhor entendimento possível sobre cada assunto e cada
                    mensagem
                  </strong>
                  .
                  <br />
                  <br />
                  Devemos <strong>ser como os Bereanos</strong>, como diz em{' '}
                  <strong>Atos 17:11</strong>
                </p>
                <blockquote className="bg-white mt-7 dark:bg-gray-800 dark:text-white">
                  &quot;Ora, estes de Bereia eram mais nobres que os de Tessalônica, pois
                  receberam a palavra com todo o interesse, examinando todos os dias as
                  Escrituras para ver se as coisas eram, de fato, assim.&quot;
                </blockquote>
                <br />
                <p>
                  <strong>Também devemos sempre buscar nas Escrituras</strong> se o
                  que dizem e ensinam é verdadeiro, caso contrário, é anátema.
                  <br></br>
                  Como está escrito em <strong>Gálatas 1:8-9</strong>, e disse Jesus:
                </p>
                <blockquote className="bg-white mt-7 dark:bg-gray-800 dark:text-white">
                  &quot;Mas, ainda que nós mesmos ou um anjo do céu vos pregasse outro
                  evangelho além do que já vos pregamos, seja anátema. Assim, como já
                  vo-lo dissemos, agora de novo também vo-lo digo: se alguém vos
                  anunciar outro evangelho além do que já recebestes, seja anátema.&quot;
                </blockquote>
              </div>
            </div>
          </div>

          <div className="row py-0 my-0">
            <p className="text-center py-0 my-0">
              <a href="#topo" className="btn btn-outline-secondary">
                &uarr; Voltar ao topo
              </a>
            </p>
          </div>
        </div>

        {/* Rodapé */}
        <footer className="bg-dark text-white dark:bg-gray-900 dark:text-white dark:border-t-1 dark:border-gray-600 text-center py-4">
          <p className="mb-1">
            “Conhecereis a verdade, e a verdade vos libertará.” — João 8:32
          </p>
          <small>© 2025 Ensinamentos Baseados na Bíblia Sagrada. Todos os direitos reservados.</small>
          {/* Ensinamentos Bíblicos */}
        </footer>


        {/* COMPONENTS */}
        {/*<LinkProtection />*/}
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