import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Link from "next/link";

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
  icons: {
    icon: thisSiteUrl + "/favicon.png",
    //apple: thisSiteUrl + "/apple-icon.png"
  },
  manifest: thisSiteUrl + "manifest.json"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* ACESSIBILIDADE */}
        <div className="div_acessibilidade">
          <h2 className="visually-hidden text-center">
            ESTAMOS TRABALHANDO PARA INCLUIR ACESSIBILIDADE NESTE SITE
            <br></br>
            DESCULPE O TRANSTORNO</h2>
        </div>

        {/* CABEÇALHO */}
        <header id="topo" className="bg-dark text-white text-center p-4 namespace w-full bg-gray-800 text-white py-4 px-8 shadow-md">
          <nav className="flex items-center justify-between">
            <h1 className="text-xl font-bold">
              <Link href="/">Ensinamentos Baseados na Bíblia Sagrada</Link>
            </h1>
            <p id="header_versiculos" className="flex p-1 lead">
              "Eu sou o caminho, e a verdade, e a vida; ninguém vem ao Pai, senão por mim." — João 14:6
            </p>

            {/* MENU */}
            <ul className="flex space-x-6">
              <li>
                <Link href="/teste" className="hover:underline">Início</Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:underline">Sobre</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline">Contato</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        {/* CONTEÚDO */}
        {children}
      </body>
    </html>


  );
};

// INCLUIR PESQUISA
// INCLUIR SEGURANÇA HTTP HEADERS
// INCLUIR DESIGN RESPONSIVO SE/QUANDO NECESSÁRIO
// INCLUIR ACESSIBILIDADE - AUMENTO E DIMINUIÇÃO DE LETRAS, VISUALIZAÇÃO/LEITURA PARA DEFICIENTES, LEITURA EM VOZ, TEMA CLARO E ESCURO, ETC
// INCLUIR SUPORTE PARA LEITURA DE TEXTO DA DIREITA PARA ESQUERDA - E CDN E/OU NOVO DOMÍNIO PARA QUE POSSA SER ACESSADO DE OUTROS PAÍSES COM LIMITAÇÕES (PESQUISAR SE ISSO É VIÁVEL E SEGURO)
// INCLUIR PARA RECEBER NOVIDADES NO CELULAR/EMAIL
// INCLUIR SUPORTE COMPLETO PARA PADRÕES DA WEB
// INCLUIR POSSIBILIDADE DE COMENTAR NAS POSTAGENS, MAS COM MODERAÇÃO DE SUPERVISOR
// INCLUIR QUE ESTE SITE NÃO TEM SUPORTE AO IE